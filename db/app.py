from flask import Flask

app = Flask(__name__)

@app.route('/plant')
def get_only_plant():
  return 'Philodendron'

  