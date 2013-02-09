from os import environ

from bottle import get, response, run

@get('/status')
def return_status():
    response.headers['Access-Control-Allow-Origin'] = '*'

    return "Up and working"

run(host="0.0.0.0", port=int(environ.get("PORT", 5000)))
