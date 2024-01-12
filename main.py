import cohere
import os
import json
from stopwords import stopwords
import training_data
from cohere.responses.classify import Example
from flask import Flask, request

app = Flask(__name__)

@app.route("/acceptData", methods=["POST"])
def get_data():
  data = request.get_json()
  type = data["type"]

  if type == 0:
    pass
  elif type == 1:
    inputs = data["text"].split(",")
  else:
    inputs = []
    print(data)
    for i in data["file"]:
      inputs.append(i["file"])

  co = cohere.Client(f'{os.getenv("COHERE_KEY")}')

  pos_reviews = []
  neg_reviews = []

  examples=map(lambda x: Example(text=x[0], label=x[1]), training_data.training_data)

  response = co.classify(
    model='large',
    inputs=inputs,
    examples=examples,
  )


  def class_reviews():
    res_class = response.classifications

    in_and_pred = zip(inputs, res_class)

    for i in in_and_pred:
      pred = i[1].predictions[0]
      if pred == "neutral" or pred == "positive":
        pos_reviews.append(i[0])
      else:
        neg_reviews.append(i[0])

    return pos_reviews, neg_reviews

  def tokenize(pos_reviews, neg_reviews):
    pos_words = {}
    neg_words = {}
    for i in pos_reviews:
      for j in co.tokenize(i).token_strings:
        if pos_words.get(j) == None:
          pos_words[j] = 1
        else:
          pos_words[j] += 1

    for i in neg_reviews:
      for j in co.tokenize(i).token_strings:
        if neg_words.get(j) == None:
          neg_words[j] = 1
        else:
          neg_words[j] += 1

    return pos_words, neg_words

  pos, neg = class_reviews()
  pos_dict, neg_dict = tokenize(pos, neg)
  cleaned_pos_dict = dict(sorted({k.strip():v for (k, v) in pos_dict.items() if not k.strip().lower() in
  stopwords}
  .items(), key=lambda item: item[1], reverse=True))
  cleaned_neg_dict = dict(sorted({k.strip():v for (k, v) in neg_dict.items() if not k.strip().lower() in
  stopwords}
  .items(), key=lambda item: item[1], reverse=True))

  return {
      'PositiveList' : list(cleaned_pos_dict.items())[:5],
      'NegativeList' : list(cleaned_neg_dict.items())[:5],
      'PositiveInput' : pos,
      'NegativeInput' : neg
  }

if __name__ == "__main__":
  app.run(debug=True, port=4000)