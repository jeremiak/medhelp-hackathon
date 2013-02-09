from os import environ

from bottle import get, run

@get('/status')
def return_status():
    return "Up and working"

run(host="0.0.0.0", port=int(environ.get("PORT", 5000)))
