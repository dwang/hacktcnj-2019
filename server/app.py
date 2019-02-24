from flask import Flask, render_template, request, redirect
import database

app = Flask(__name__)

@app.route("/")
def index():
    return "hello, world"


@app.route('/api/getIncidents')
def getIncidents():
    return database.getPosts()


@app.route('/api/addIncident', methods=['POST'])
def addIncident():
    message = request.form.get("message")
    time = request.form.get("time")
    image_name = request.form.get("image_name")
    image = request.files['image']
    image.save(image_name)
    
    database.addIncident(message, image_name, time)
    return redirect("https://reliefgrid.net")


if __name__ == "__main__":
    app.run(debug=True)
