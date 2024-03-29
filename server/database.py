from pymongo import MongoClient
import random
import json
import logging

logging.basicConfig(filename="hacktcnj.log", level=logging.INFO)

db = MongoClient("127.0.0.1", 27017, connect=False)['hacktcnj']
posts = db.posts


def addPost(message, image_name, label, current_time):
    post = {
        "message": str(message),
        "image_name": str(image_name),
        "label": str(label),
        "current_time": str(current_time)
    }

    logging.info(post)
    posts.insert_one(post)


def getPosts():
    returnValue = []

    for document in posts.find({}):
        returnValue.append(document)

    return returnValue


def clearDatabase():
    posts.delete_many({})


if __name__ == "__main__":
    clearDatabase()
