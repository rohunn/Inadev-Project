from flask import Flask, request, jsonify
from app.models import db, Item
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config = Config['SQLALCHEMY_DATABASE_URI']
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/items', methods=['POST'])
def add_item():
    data = request.get_json()
    new_item = Item(
        name=data['name'],
        quantity=data['quantity'],
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'message': 'Item added successfully'}), 201

@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = Item.query.get_or_404(item_id)
    return jsonify({
        'id': item.id,
        'name': item.name,
        'quantity': item.quantity,
    })

@app.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    return jsonify([{
        'id': item.id,
        'name': item.name,
        'quantity': item.quantity,
    } for item in items])

@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    item = Item.query.get_or_404(item_id)
    item.name = data['name']
    item.quantity = data['quantity']
    db.session.commit()
    return jsonify({'message': 'Item updated successfully'})

@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = Item.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item deleted successfully'})

@app.route('/employees', methods=['GET'])
def get_employees():
    query = "SELECT * FROM employees"
    df = fetch_data(query)
    return jsonify(df.to_dict(orient='records'))
#json is a collection of keys and values, connect routes to frontend
if __name__ == '__main__':
    app.run(debug=True)
