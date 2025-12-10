import functools

details = {"username": "lior", "user_access": "admin" ,"admin_password":123456} 

def make_secure(access_level): #מקבל סוג כניסה או שם שנעביר
  def decorator(func):
    @functools.wraps(func)
    def secure_func(*args, **kwargs): 
      if details["user_access"] == access_level: #מקבל את השמות ממה ששלחנו בפונקציה  בשורה 17 ו 21 ואז אם השם זה admin אז יעבוד 
        return func(*args, **kwargs) #מחזיר בעצם את הפונקציה ששלחנו כי הפונקציה ששלחנו מחזירה נתונים 
      else:
        return f"user {details['username']} not have access to admin password" # אם לא יחזיר את זה 
    return secure_func
  return decorator


@make_secure("admin") #מגדירים את השם כאן 
def get_admin_password():
  return details["admin_password"]

@make_secure("guest")  #מגדירים את השם כאן 
def get_dashboard_password():
  return "user: user_passwrod"


print(get_admin_password()) #אם שלחנו אדמין ב details יחזיר את הסיסמא שבתוך הפונקציה הזאת 
print(get_dashboard_password()) # אם שלחנו ב details guest יחזיר את המשפט שבתוך הפונקציה הזאת 