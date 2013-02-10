from os import environ

from bottle import get, request, response, run
import requests

def get_food_label(upc):
    url = "http://api.foodessentials.com/labelarray?u=%s&sid=ec005ec5-eda3-4bdc-8ebd-479d7920f264&n=1&s=0&f=json&api_key=v2ub5nu4ka8w74uyqtwdw92u" % upc
    r = requests.get(url)

    return r.json()

def calculate_nutrient_percents(nutrients, daily_cal):
    data = nutrients
    
    return data

@get('/search')
def search():
    response.headers['Access-Control-Allow-Origin'] = '*'

    upc = request.query.get('upc', '016000264601')
    daily_calorie_limit = request.query.get('daily_cal')

    label = get_food_label(upc)
    nutrients = calculate_nutrient_percents(label['productsArray'][0]['nutrients'], daily_calorie_limit)
    
    data = {'nutrients': nutrients}

    return data

@get('/status')
def return_status():
    response.headers['Access-Control-Allow-Origin'] = '*'

    return "Up and working"

run(host="0.0.0.0", port=int(environ.get("PORT", 5000)), reloader=True)
