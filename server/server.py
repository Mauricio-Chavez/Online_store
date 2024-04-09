from flask import Flask
import json
from config import dev,sum

app = Flask(__name__)



@app.get('/')
def hello():
    return "Hello, World!"

@app.get('/test')
def test():
    return "This is a test"

@app.get('/about/<name>')
def about(name):
    return name

#########################################################################
########################API Methods######################################
#########################################################################
@app.get('/api/developer')
def developer():
    return json.dumps(dev)

@app.get('/api/sum')
def simple_sum():
    answer = sum(5,5)
    return json.dumps(answer)











app.run(debug=True)

