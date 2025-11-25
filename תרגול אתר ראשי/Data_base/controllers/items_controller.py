from flask import request,jsonify
from models.items_model import ItemsModel


class ItemsController:
    @staticmethod
    def created_item():
        data = request.get_json()
        if not data:
            return jsonify({
                'success': False,
                "ERORR":"Cant collect data for create item"})
        # Define required fields for creating an item
        requirements = [
            "item_name",
            "item_description",
            "item_quantity",
            "item_branch",
            "item_price",
            "item_category",
            "item_imageFileName"
        ]
        for row in requirements:
            if row not in data or not data[row]:
                return jsonify({
                    'success': False,
                    "ERORR": f"missing value for {row}"
                })
        success = ItemsModel.create_item(data)
        return jsonify({
            'success': True,
            'message': 'Item created successfully',
            'data': success
        })