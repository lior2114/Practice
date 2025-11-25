import sqlite3
import os 
from datetime import datetime

db_path = "./MySql/db.db"
if not os.path.exists("MySql"):
    os.makedirs("MySql")
    
class ItemsModel:
    @staticmethod
    def get_db_connection():
        return sqlite3.connect(db_path)
    
    @staticmethod
    def init_Items_db():
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
        
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS items(
                    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    item_name TEXT NOT NULL,
                    item_description TEXT NOT NULL,
                    item_quantity INTEGER NOT NULL,
                    item_branch TEXT NOT NULL,
                    item_price REAL NOT NULL,
                    item_category TEXT NOT NULL,
                    item_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    item_imageFileName TEXT NOT NULL
                )
                ''')
            connection.commit()
            cursor.close()

    @staticmethod
    def create_item(item_name,
            item_description, item_quantity, item_branch, item_price, item_category,
            item_imageFileName):
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
            cursor.execute('''
                INSERT INTO items (
                    item_name,
                    item_description,
                    item_quantity,
                    item_branch,
                    item_price,
                    item_category,
                    item_imageFileName
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (
                item_name,
                item_description,
                item_quantity,
                item_branch,
                item_price,
                item_category,
                item_imageFileName
            ))
            connection.commit()
            item_id = cursor.lastrowid
            cursor.close()
            return {
                "item_id": item_id,
                "item_name": item_name,
                "item_description": item_description,
                "item_quantity": item_quantity,
                "item_branch": item_branch,
                "item_price": item_price,
                "item_category": item_category,
                "item_created": None,  # can be updated later if needed
                "item_imageFileName": item_imageFileName
            }
        
        
    @staticmethod
    def get_item_byId(item_id):
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM items WHERE item_id = ?
            ''', (item_id,))
            item = cursor.fetchone()
            if not item:
                cursor.close()
                return {"Error": "There is not an item with that id"}
            cursor.close()
            return {
                "item_id": item[0],
                "item_name": item[1],
                "item_description": item[2],
                "item_quantity": item[3],
                "item_branch": item[4],
                "item_price": item[5],
                "item_category": item[6],
                "item_created": item[7],
                "item_imageFileName": item[8]
            }
            
    @staticmethod    
    def update_item(item_id, data):
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM items WHERE item_id = ?
            ''', (item_id,))
            item = cursor.fetchone()
            if not item:
                cursor.close()
                return {"Error": "There is not an item with that id"}
            


            pair = ""
            for key, value in data.items():
                if isinstance(value, int) or isinstance(value, float):
                    pair = f"{key}={value},"
                else:
                    pair = f"{key}='{value}',"
            pair = pair[:-1]   # remove last comma
            
            cursor.execute(f'''
                UPDATE items SET {pair} WHERE item_id = {item_id}
            ''')
            
            connection.commit()
            cursor.close()
            return {"Succefull": f"Update item {item_id} Succefully: {pair}"}
        
    @staticmethod
    def delete_item_by_id(item_id):
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM items WHERE item_id = ?
            ''', (item_id,))
            item = cursor.fetchone()
            if not item:
                cursor.close()
                return {"Error": "There is not an item with that id"}
            cursor.execute('''
                DELETE FROM items WHERE item_id = ?
            ''', (item_id,))
            connection.commit()
            cursor.close()
            return {"Message": f"item {item[1]} deleted Successfully"}
            
    @staticmethod
    def get_all_items():
        with ItemsModel.get_db_connection() as connection:
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM items
            ''') 
            items = cursor.fetchall()
            if not items:
                cursor.close()
                return {"Message": "No items yet"}  
            cursor.close()
            return [
                {
                    "item_id": row[0],
                    "item_name": row[1],
                    "item_description": row[2],
                    "item_quantity": row[3],
                    "item_branch": row[4],
                    "item_price": row[5],
                    "item_category": row[6],
                    "item_created": row[7],
                    "item_imageFileName": row[8]
                }
                for row in items
            ]
