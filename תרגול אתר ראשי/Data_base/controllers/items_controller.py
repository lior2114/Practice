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
        success = ItemsModel.create_item(**data)
        return jsonify({
            'success': True,
            'message': 'Item created successfully',
            'data': success
        })
        
    @staticmethod
    def get_item_byId(item_id):
        result = ItemsModel.get_item_byId(item_id)
        if not result:
            return jsonify({"Error":"Not item with that id"})
        return jsonify({"Item:":f"{result}"})
    
    @staticmethod
    def update_item(item_id):
        data = request.get_json()
        if not data:
            return jsonify({"Error": "No fields provided to update"})

        # Allow partial updates: validate only the fields that were sent
        allowed_fields = [
            "item_name",
            "item_description",
            "item_quantity",
            "item_branch",
            "item_price",
            "item_category",
            "item_imageFileName"
        ]

        for key, value in data.items():
            if key not in allowed_fields:
                return jsonify({
                    "success": False,
                    "ERORR": f"Unknown field {key}"
                })
            if value is None or value == "":
                return jsonify({
                    "success": False,
                    "ERORR": f"Wrong value for {key}"
                })

        result = ItemsModel.update_item(item_id, data)
        if not result:
            return jsonify({"Error": "cant update product"})
        return jsonify({
            "success": True,
            "data": result
        })
    
    @staticmethod
    def delete_item_by_id(item_id):
        result = ItemsModel.delete_item_by_id(item_id)

        # If the model returned an error dict, pass it through
        if isinstance(result, dict) and result.get("Error"):
            return jsonify(result), 404

        # Otherwise, deletion succeeded
        return jsonify({
            "Success": result.get("Message")
        })
    
    
    @staticmethod
    def get_all_items():
        result = ItemsModel.get_all_items()
        if not result:
            return jsonify({"Error":"No products yet"})
        return jsonify(result)