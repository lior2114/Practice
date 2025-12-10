


# details = {"username": "admin", "password":123456}

# def make_secure(func):
#   def secure_func():
#     if details["username"] == "admin":
#       return func()
#     else:
#       return f"user {details['username']} not have access"
#   return secure_func
  
# @make_secure #קראנו לשם של הפונקציה שעושה את התהליך 
# def show_password():
#   return details["password"]


# print(show_password.__name__) # ידפיס secure_func כי זה מה שהפונקציה הראשית מחזירה זה לא יהיה טוב כי זה לא השם הנכון שלה 
#תראה שורה 42 איך מתקנים ושורה 29
# print(show_password())


#פיתרון 
import functools

details = {"username": "admin", "password":123456}
def make_secure(func):
  @functools.wraps(func) #אומר לו שהוא רק עוטף וישאיר את השם של show_password הפונקציה 
  def secure_func():
    if details["username"] == "admin":
      return func()
    else:
      return f"user {details['username']} not have access"
  return secure_func
  
@make_secure #קראנו לשם של הפונקציה שעושה את התהליך 
def show_password():
  return details["password"]


print(show_password.__name__) #עכשיו זה ידפיס את השם הנכון של show_password 
print(show_password())