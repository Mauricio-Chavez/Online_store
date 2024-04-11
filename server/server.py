from flask import Flask, request
import json
from config import dev,sum
from data import catalog
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.get('/')
def hello():
    return "Hello, World!"

@app.get('/test')
def test():
    return "This is a test"

@app.get('/about/<name>')
def about(name):
    return name

@app.get('/api/developer')
def developer():
    return json.dumps(dev)

@app.get('/api/sum')
def simple_sum():
    answer = sum(5,5)
    return json.dumps(answer)

#########################################################################
########################API Methods######################################
#########################################################################


@app.get('/api/products')
def get_catalog():
    return json.dumps(catalog)
@app.post('/api/products')
def save_product():
    prod = request.get_json()
    catalog.append(prod)
    return json.dumps(prod)
    






app.run(debug=True)

