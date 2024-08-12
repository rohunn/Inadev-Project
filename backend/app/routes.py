from flask import Flask, request, jsonify
from .models import db, Item
from flask_migrate import Migrate
from flask_cors import CORS
import os
from flask import send_from_directory

app = Flask(__name__)
app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
#app.config = Config['SQLALCHEMY_DATABASE_URI']
app.config.from_object('backend.config.Config')
db.init_app(app)
migrate = Migrate(app, db)
# Enable CORS for all routes
CORS(app)

@app.route("/")
@app.route('/<path:path>')
def serve(path='index.html'):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)): return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/items', methods=['GET'])
def get_items():
    items = Item.query.all()

    return jsonify([item.serialize() for item in items])

@app.route('/api/add-item', methods=['POST'])
def add_item():
    data = request.get_json()
    new_item = Item(
        name=data['name'],
        price=data['price'],
        description=data['description'],
        quantity=data['quantity'],
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'message': 'Item added successfully'}), 201

@app.route('/api/delete-item', methods=['DELETE'])
def delete_item():
    data = request.get_json()

    item_id = data.get('itemId')
    if not item_id:
        return jsonify({'error': 'Item ID is required'}), 400
 
    item = Item.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item deleted successfully'})


if __name__ == '__main__':
    app.run(debug=True)
