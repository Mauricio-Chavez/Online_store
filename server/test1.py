name = "Mauricio"
print(name)



def say_hello():
    print("hello")
    print("I'm inside")


#calls
say_hello()


#data strctures -> 114

#array js -> list python
prices = [2, 5, 12, 67, 14]
prices.append(9)

print(prices)

#sum all the prices
total = 0

for price in prices:
    total += price

print(total)

#dictionary js -> object python

me = {
    "name": "Mauricio",
    "age": 20,
    "hobbies": ["coding", "reading", "gaming"],
    "address": {
        "street": "123 Main St",
        "city": "San Francisco"
    }
}

print(me)

#read 
print(me["name"])

#warning:reading a key that doesn't exist

if "last" in name:
    print(me["last"])

#modify
me["age"] = 99

me["last"] = "Chavez"

print("THE END!!!")










