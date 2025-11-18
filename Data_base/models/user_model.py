import sqlite3
import hashlib
import os
from datetime import datetime

class UserModel:
    DATABASE = 'users.db'
    
    @staticmethod
    def init_db():
        """Initialize the database and create tables"""
        conn = sqlite3.connect(UserModel.DATABASE)
        cursor = conn.cursor()
        
        # Create users table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role_id INTEGER NOT NULL DEFAULT 2 CHECK(role_id IN (1,2)),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')

        # Migration: add role_id if the column is missing in an existing DB
        cursor.execute("PRAGMA table_info(users)")
        existing_columns = [row[1] for row in cursor.fetchall()]
        if 'role_id' not in existing_columns:
            # Add column with default 2 for existing rows
            cursor.execute("ALTER TABLE users ADD COLUMN role_id INTEGER DEFAULT 2")
            cursor.execute("UPDATE users SET role_id = 2 WHERE role_id IS NULL")
        
        conn.commit()
        conn.close()
    
    @staticmethod
    def hash_password(password):
        """Hash password using SHA-256"""
        return hashlib.sha256(password.encode()).hexdigest()
    
    @staticmethod
    def get_db_connection():
        """Get database connection"""
        conn = sqlite3.connect(UserModel.DATABASE)
        conn.row_factory = sqlite3.Row  # This enables column access by name
        return conn
    
    @staticmethod
    def create_user(username, email, password):
        """Create a new user"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            hashed_password = UserModel.hash_password(password)
            
            cursor.execute('''
                INSERT INTO users (username, email, password, role_id)
                VALUES (?, ?, ?,2)
            ''', (username, email, hashed_password))
            
            user_id = cursor.lastrowid
            conn.commit()
            conn.close()
            
            return user_id
        except sqlite3.IntegrityError:
            conn.close()
            raise Exception("Username or email already exists")
        except Exception as e:
            conn.close()
            raise e

    @staticmethod
    def ensure_admin_user():
        """Ensure at least one admin (role_id=1) exists; create from env if missing"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()

            cursor.execute('SELECT 1 FROM users WHERE role_id = 1 LIMIT 1')
            exists = cursor.fetchone() is not None

            if exists:
                conn.close()
                return

            admin_username = "lior"
            admin_email = "khtur@gmail.com"
            admin_password = "123456"

            if not (admin_username and admin_email and admin_password):
                # No env provided; skip creation gracefully
                conn.close()
                return

            hashed_password = UserModel.hash_password(admin_password)

            cursor.execute('''
                INSERT OR IGNORE INTO users (username, email, password, role_id)
                VALUES (?, ?, ?, 1)
            ''', (admin_username, admin_email, hashed_password))

            conn.commit()
            conn.close()
        except Exception as e:
            try:
                conn.close()
            except Exception:
                pass
            raise e
    
    @staticmethod
    def get_all_users():
        """Get all users"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM users ORDER BY created_at DESC')
            users = cursor.fetchall()
            
            conn.close()
            
            return [dict(user) for user in users]
        except Exception as e:
            conn.close()
            raise e
    
    @staticmethod
    def get_user_by_id(user_id):
        """Get user by ID"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
            user = cursor.fetchone()
            
            conn.close()
            
            return dict(user) if user else None
        except Exception as e:
            conn.close()
            raise e
    
    @staticmethod
    def get_user_by_username(username):
        """Get user by username"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
            user = cursor.fetchone()
            
            conn.close()
            
            return dict(user) if user else None
        except Exception as e:
            conn.close()
            raise e
    
    @staticmethod
    def get_user_by_email(email):
        """Get user by email"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
            user = cursor.fetchone()
            
            conn.close()
            
            return dict(user) if user else None
        except Exception as e:
            conn.close()
            raise e
    
    @staticmethod
    #מקבל את כל סוגי האלמנטים שמכניסים אליו יכול לצפות ל 1 או ל 2 ואפילו יותר 
    def update_user(user_id, **kwargs):
        """Update user by ID"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            # Build update query dynamically
            update_fields = []
            values = []
            
            for field, value in kwargs.items():
                if field in ['username', 'email', 'password']:
                    update_fields.append(f"{field} = ?") #[first_name, password]
                    if field == 'password':
                        values.append(UserModel.hash_password(value))
                    else:
                        values.append(value) #["david", "123456"]
            
            if not update_fields:
                conn.close()
                return False
            # יכנס בסוף כי בסוף זה הוליו האחרון של ה SQL
            values.append(user_id)
            #     והפסיק אומר שים לכל מה שמצטרף בסוף פסיק \ פסיק בינהם || יש סימן שאלה והווליום יכנסו לתוכו
            query = f"UPDATE users SET {', '.join(update_fields)} WHERE id = ?"
            
            cursor.execute(query, values)

            # השורה הזאת בודקת אם לא התעדכן אף רשומה בטבלה אחרי פקודת ה-UPDATE,
            # כלומר לא היה משתמש עם ה-id המבוקש או שהנתונים שנשלחו זהים לקודמים ולכן לא קרה שינוי. 
            # אם לא שונתה אף שורה, תנאי זה יתקיים.
            if cursor.rowcount == 0:
                conn.close()
                return False
            conn.commit()
            conn.close()    
            return True
        
        
        #אם יש נתונים שהם אותו דבר אז זה יחזיר את זה כמו אותו שם 
        except sqlite3.IntegrityError:
            conn.close()
            raise Exception("Username or email already exists")
        except Exception as e:
            conn.close()
            raise e
    
    @staticmethod
    def delete_user(user_id):
        """Delete user by ID"""
        try:
            conn = UserModel.get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute('DELETE FROM users WHERE id = ?', (user_id,))
            
            if cursor.rowcount == 0:
                conn.close()
                return False
            
            conn.commit()
            conn.close()
            
            return True
        except Exception as e:
            conn.close()
            raise e
