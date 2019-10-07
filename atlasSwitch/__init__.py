from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'wouldntyouliketoknow'

from atlasSwitch.core.views import core

app.register_blueprint(core)