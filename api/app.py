from datetime import datetime
from os import environ

from bottle import get, redirect, request, response, run
import requests
import simplejson as json

def get_food_label(upc):
    url = 'http://api.foodessentials.com/labelarray?u=%s&sid=ec005ec5-eda3-4bdc-8ebd-479d7920f264&n=1&s=0&f=json&api_key=v2ub5nu4ka8w74uyqtwdw92u' % upc
    r = requests.get(url)

    return r.json()

def calculate_nutrient_percents(nutrients, daily_cal):
    daily_allowance = {}
    daily_allowance['Total Fat'] = 0.0325 * daily_cal
    daily_allowance['Saturated Fat'] = 0.01 * daily_cal
    daily_allowance['Cholesterol'] = 0.15 * daily_cal
    daily_allowance['Sodium'] = 1.2 * daily_cal
    daily_allowance['Potassium'] = 1.75 * daily_cal
    daily_allowance['Total Carbohydrate'] = 1.5 * daily_cal
    daily_allowance['Sugars'] = 0.02 * daily_cal
    daily_allowance['Fiber'] = 0.0125 * daily_cal
    daily_allowance['Protein'] = 0.025 * daily_cal
    daily_allowance['Vitamin A'] = 2.5 * daily_cal
    daily_allowance['Vitamin C'] = 0.03 * daily_cal
    daily_allowance['Calcium'] = 0.5 * daily_cal
    daily_allowance['Iron'] = 0.009 * daily_cal
    
    data = {}
    for nutrient in nutrients:
        name = nutrient['nutrient_name']
        if daily_allowance.get(name, None) != None:
            value = nutrient['nutrient_value']
            if value == '':
                value = '0.0'

            uom = nutrient['nutrient_uom']
            percentage = float(value)/daily_allowance[name] * 100
            data[name] = {'Value': value,
                    'uom': uom,
                    'Percent': '%.2f' % percentage}

    return data

@get('/search')
def search_upc():
    response.headers['Access-Control-Allow-Origin'] = '*'

    upc = request.query.get('upc', '016000264601')
    daily_calorie_limit = float(request.query.get('daily_cal', '2000'))

    label = get_food_label(upc)
    product = label['productsArray'][0]
    nutrients = calculate_nutrient_percents(product['nutrients'], daily_calorie_limit)
    
    data = {'item': product['product_name'],
            'serving_size': product['serving_size'],
            'serving_size_uom': product['serving_size_uom'],
            'servings_per_container': product['servings_per_container'],
            'nutrients': nutrients, 
            'ingredients': product['ingredients']}

    return data

@get('/daily_limit')
def calculate_daily_intake():
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    age = int(request.query.get('age', '25'))
    height = int(request.query.get('height', '70'))
    current_weight = int(request.query.get('current_weight', '150'))
    goal_weight = int(request.query.get('goal_weight', '100'))
    weeks_to_goal = int(request.query.get('weeks_to_goal', '4'))
    gender = request.query.get('gender', 'male').lower()
    activity_level = request.query.get('activity_level', 'moderately active').lower()

    pounds_per_week = (current_weight - goal_weight) / weeks_to_goal

    if gender == 'male':
        bmr = 66 + (6.3 * current_weight) + (12.9 * height) - (6.8 * age)
    else:
        bmr = 655 + (4.3 * current_weight) + (4.7 * height) - (4.7 * age)

    if activity_level == 'sedentary':
        bmr_and_activity = 1.2 * bmr
    elif activity_level == 'lightly active':
        bmr_and_activity = 1.3 * bmr
    elif activity_level == 'moderately active':
        bmr_and_activity = 1.4 * bmr
    elif activity_level == 'very active':
        bmr_and_activity = 1.5 * bmr
    
    limit = bmr_and_activity - ((pounds_per_week * 3500) / 7)

    return {'limit': '%.2f' % limit}

@get('/save_weight')
def save_weight():
    user_id = request.query.get('user_id', None)
    access_token = request.query.get('access_token', None)
    weight = request.query.get('weight', None)

    d = datetime.today()
    date = '%s-%s-%s' % (d.year, d.month, d.day)

    url = "https://hapi.medhelp.ws/v1/users/%s/vitals?client_id=e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f" % user_id
    headers = {'Authorization': 'Token token="%s"' % access_token}
    data = {'date': date,
            'field_name': 'Weight',
            'value': weight,
            'user_id': user_id}

    r = requests.post(url, headers=headers, data=json.dumps([data]))

    print r.text

@get('/callback')
def handle_oauth_callback():
    code = request.query.get('code', None)
    url = 'https://hapi.medhelp.ws/oauth/token?client_id=e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f'

    data = {}
    data['authorize'] = 'Yes'
    data['grant_type'] = 'authorization-code'
    data['response_type'] = 'code'
    data['redirect_uri'] = 'http://0.0.0.0:5000/callback'
    data['client_id'] = 'e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f'
    data['client_secret'] = 'd7daa38353fe6e9a904630ab4e57cf56809449010b7ea0636699e60b7e84b6e7'
    data['code'] = code

    r = requests.post(url, data=data)

    j = r.json()
    token = j['access_token']
    user_id = j['user_id']
    url = 'http://jeremiak.github.com/medhelp-hackathon/client/index.html?access_token=%s&user_id=%s' % (token, user_id)
    redirect(url)

@get('/status')
def return_status():
    response.headers['Access-Control-Allow-Origin'] = '*'

    return "Up and working"

run(host="0.0.0.0", port=int(environ.get("PORT", 5000)), reloader=True)
