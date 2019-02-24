from flask import Flask, render_template, request, redirect
import database
import time

app = Flask(__name__)

@app.route("/")
def index():
    return "hello, world"


@app.route('/api/getIncidents')
def getIncidents():
    return database.getPosts()


@app.route('/api/addIncident', methods=['GET', 'POST'])
def addIncident():
    message = request.form.get("message")
    current_time = time.time()
    image_name = request.form.get("image_name")
    image_name = "image.jpg"
    image = request.files["image"]
    image.save(image_name)
    
    database.addPost(message, image_name, current_time)
    return redirect("https://reliefgrid.net")


if __name__ == "__main__":
    app.run(debug=True)
