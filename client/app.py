from flask import Flask, render_template
from flask_socketio import SocketIO
import database
import json
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def serve(name=None):
    return render_template('session.html', name=name)

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('new message')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received new message: ' + str(json))
    database.addPost(json["user_name"], json["message"], time.time())
    print(database.getPost())
    socketio.emit('push message', database.getPost())

if __name__=="__main__":
    SocketIO.run(app, debug=True, host="0.0.0.0")