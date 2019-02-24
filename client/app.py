from flask import Flask, render_template, request, redirect
import json

app = Flask(__name__, static_folder="build/static", template_folder="build")


@app.route('/')
def serve():
    return render_template('index.html')


if __name__=="__main__":
    app.run(debug=True, host="0.0.0.0")
