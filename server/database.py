from pymongo import MongoClient
import time
import random
import json
import logging

logging.basicConfig(filename="hacktcnj.log", level=logging.INFO)

db = MongoClient("reliefgrid.net", 27017)['hacktcnj']
posts = db.posts


def addPost(user, message, time):
    post = {
        "user": str(user),
        "message": str(message),
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
