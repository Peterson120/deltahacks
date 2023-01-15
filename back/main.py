import cohere
from cohere.classify import Example

from flask import Flask

co = cohere.Client('HRS65KTVg361twQCYspM1P2ppBmT8fQxN8DqWQ8k')

inputs=[
  "This item was broken when it arrived",
  "The product is amazing",
  "The product was not too bad",
]

examples=[
## delivery service
  Example("The order came 5 days early", "positive"), 
  Example("The item exceeded my expectations", "positive"), 
  Example("I ordered more for my friends", "positive"), 
  Example("I would buy this again", "positive"), 
  Example("I would recommend this to others", "positive"), 
  Example("The package was damaged", "negative"), 
  Example("The order is 5 days late", "negative"), 
  Example("The order was incorrect", "negative"), 
  Example("I want to return my item", "negative"), 
  Example("The item's material feels low quality", "negative"), 
  Example("The product was okay", "neutral"), 
  Example("I received five items in total", "neutral"), 
  Example("I bought it from the website", "neutral"), 
  Example("I used the product this morning", "neutral"), 
  Example("The product arrived yesterday", "neutral"), 
## restaurant
  Example("The food was excellently cooked", "positive"), 
  Example("The food was well cooked", "positive"), 
  Example("The food was decently cooked", "neutral"), 
  Example("The food was badly cooked", "negative"),
  Example("I could barely contain myself from eating another plate", "positive"), 
  Example("The food was barely edible", "negative"),
  Example("I had a wonderful time being served by Tracy", "positive"), 
  Example("The environment was very welcoming and staff were friendly", "positive"),
  Example("Overall, the food was alright", "neutral"), 
  Example("The environment was dirty and staff were unfriendly", "negative"), 
  Example("The restaurant was well decorated", "positive"),
  Example("The restaurant was ugly", "negative"),
  Example("The waittress named May was terribly ill-mannered", "negative"), 
  Example("My family is definitely coming back for more", "positive"), 
  Example("My family will never be coming back", "negative"), 
  Example("I ate the chicken sandwich", "neutral"), 
  Example("The owner of this restaurant is careless", "negative"),
  # waiter slander
  Example("Patricia dropped 3 dishes on the floor", "negative"),
  Example("Bob picked his nose in front of my family", "negative"),
  Example("Bob had a wonderful attitude", "positive"),
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response.classifications)

# def foo ():
#   co = cohere.Client('HRS65KTVg361twQCYspM1P2ppBmT8fQxN8DqWQ8k')

#   inputs=[
#     "This item was broken when it arrived",
#     "The product is amazing",
#     "The product was not too bad",
#   ]

#   examples=[
#     Example("The order came 5 days early", "positive"), 
#     Example("The item exceeded my expectations", "positive"), 
#     Example("I ordered more for my friends", "positive"), 
#     Example("I would buy this again", "positive"), 
#     Example("I would recommend this to others", "positive"), 
#     Example("The package was damaged", "negative"), 
#     Example("The order is 5 days late", "negative"), 
#     Example("The order was incorrect", "negative"), 
#     Example("I want to return my item", "negative"), 
#     Example("The item\'s material feels low quality", "negative"), 
#     Example("The product was okay", "neutral"), 
#     Example("I received five items in total", "neutral"), 
#     Example("I bought it from the website", "neutral"), 
#     Example("I used the product this morning", "neutral"), 
#     Example("The product arrived yesterday", "neutral"), 
#   ]

#   response = co.classify(
#     model="medium",
#     inputs=inputs,
#     examples=examples,
#   )
#   print(response.classifications)
#   return response.classifications

# app = Flask(__name__)

# @app.route("/api")
# def hello_world():
#     return f'{foo()}'
