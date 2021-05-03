from flask import Flask

app = Flask(__name__)

@app.route('/api/plants')
def get_only_plant():
  return {'plant': 'Philodendron'}

  