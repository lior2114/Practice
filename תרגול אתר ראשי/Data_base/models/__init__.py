# Models package 
from .user_model import UserModel
from .items_model import ItemsModel
def init_database():
    """Initialize all database tables"""
    UserModel.init_Users_db() 
    ItemsModel.init_Items_db()
    
    # Ensure at least one admin exists (role_id=1)
    UserModel.ensure_admin_user()
