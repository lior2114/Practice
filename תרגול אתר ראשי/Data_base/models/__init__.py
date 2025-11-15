# Models package 
from .user_model import UserModel

def init_database():
    """Initialize all database tables"""
    UserModel.init_db() 
    # Ensure at least one admin exists (role_id=1)
    UserModel.ensure_admin_user()
