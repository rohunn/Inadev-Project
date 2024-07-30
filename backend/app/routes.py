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

# @app.route('/items', methods=['POST'])
# def add_item():
#     data = request.get_json()
#     new_item = Item(
#         name=data['name'],
#         quantity=data['quantity'],
#     )
#     db.session.add(new_item)
#     db.session.commit()
#     return jsonify({'message': 'Item added successfully'}), 201

# @app.route('/items/<int:item_id>', methods=['GET'])
# def get_item(item_id):
#     item = Item.query.get_or_404(item_id)
#     return jsonify({
#         'id': item.id,
#         'name': item.name,
#         'quantity': item.quantity,
#     })

# @app.route('/items', methods=['GET'])
# def get_items():
#     items = Item.query.all()
#     return jsonify([{
#         'id': item.id,
#         'name': item.name,
#         'quantity': item.quantity,
#     } for item in items])

# @app.route('/items/<int:item_id>', methods=['PUT'])
# def update_item(item_id):
#     data = request.get_json()
#     item = Item.query.get_or_404(item_id)
#     item.name = data['name']
#     item.quantity = data['quantity']
#     db.session.commit()
#     return jsonify({'message': 'Item updated successfully'})

# @app.route('/items/<int:item_id>', methods=['DELETE'])
# def delete_item(item_id):
#     item = Item.query.get_or_404(item_id)
#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({'message': 'Item deleted successfully'})

# @app.route('/employees', methods=['GET'])
# def get_employees():
#     query = "SELECT * FROM employees"
#     df = fetch_data(query)
#     return jsonify(df.to_dict(orient='records'))
#json is a collection of keys and values, connect routes to frontend
if __name__ == '__main__':
    app.run(debug=True)
