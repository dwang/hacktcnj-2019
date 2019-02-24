from flask import Flask, render_template, request, redirect
import database
import json

app = Flask(__name__)


@app.route('/')
def serve(name=None):
    return render_template('session.html', name=name)

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


if __name__=="__main__":
    app.run(debug=True, host="0.0.0.0")
