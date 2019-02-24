from pymongo import MongoClient
import time
import random
import json
import logging

logging.basicConfig(filename="hacktcnj.log", level=logging.INFO)

db = MongoClient("127.0.0.1", 27017, connect=False)['hacktcnj']
posts = db.posts


def addPost(message, image_name, label, time):
    post = {
        "message": str(message),
        "image_name": str(image_name),
        "label": str(label)
        "time": str(time)
    }

    logging.info(post)
    posts.insert_one(post)


def getPosts():
    returnValue = []

    for document in posts.find({}):
        returnValue.append(document)


def clearDatabase():
    posts.delete_many({})


if __name__ == "__main__":
    clearDatabase()
