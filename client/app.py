from flask import Flask, render_template, request, redirect
import json

app = Flask(__name__)


@app.route('/')
def serve(name=None):
    return render_template('session.html', name=name)


if __name__=="__main__":
    app.run(debug=True, host="0.0.0.0")
