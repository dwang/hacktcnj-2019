from flask import Flask, render_template, request, redirect
import database
import time
import image_recognition

app = Flask(__name__, static_folder="build/static", template_folder="build")

@app.route("/")
def index():
    return render_template('index.html')


@app.route('/api/getIncidents')
def getIncidents():
    return str(database.getPosts())


@app.route('/api/addIncident', methods=['GET', 'POST'])
def addIncident():
    message = request.form.get("message")
    current_time = str(int(time.time() * 1000.0 / 13.0))
    image_name = current_time
    image = request.files["image"]
    image.save(image_name)
    label = image_recognition.get_labels(image_name)

    
    database.addPost(message, image_name, label, current_time)
    return redirect("https://reliefgrid.net")


if __name__ == "__main__":
    app.run(debug=True)
