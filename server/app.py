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
    user = request.form.get("user")
    message = request.form.get("message")
    time = request.form.get("time")

    database.addIncident(user, message, time)
    return redirect("https://reliefgrid.net")


if __name__ == "__main__":
    app.run(debug=True)
