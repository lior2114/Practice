from flask import Blueprint
from controllers.items_controller import ItemsController
from auth_decorator import require_admin, require_auth

items_bp = Blueprint('items', __name__)

@items_bp.route("/createItems",methods=['POST'])
def created_item():
    return ItemsController.created_item()

@items_bp.route("/getItemsById/<int:item_id>", methods = ["GET"])
def get_item_byId(item_id):
    return ItemsController.get_item_byId(item_id)
    
@items_bp.route("/UpdateItem/<int:item_id>", methods = ["PUT"])

def update_item(item_id):
    return ItemsController.update_item(item_id)
    
@items_bp.route("/deleteItemById/<int:item_id>", methods = ["DELETE"])
def delete_item_by_id(item_id):
    return ItemsController.delete_item_by_id(item_id)

@items_bp.route("/getAllItems", methods=["GET"])
def get_all_items():
    return ItemsController.get_all_items()