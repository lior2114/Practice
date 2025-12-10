import functools

details = {"username": "admin", "password":123456}
def make_secure(func):
  @functools.wraps(func)
  #הכוונה שלא אכפת לה מה היא מקבלת ככה שאפשר כל פונקציה לשלוח אליה שתבדוק אותו 
  def secure_func(*args, **kwargs): # כי אנחנו לא נדע מה הוא מקבל אז עשינו שיקבל גם טופלס וגם דיקשנרי וגם זה לא יגביל אותו להשתמש רק בפונקציה אחת 
    if details["username"] == "admin":
      return func(*args, **kwargs)
    else:
      return f"user {details['username']} not have access"
  return secure_func
  
@make_secure 
def show_password(panel): #העברנו עכשיו נתון 
  if panel == "admin": 
    return details["password"]
  elif panel == "billing":
    return "super_secure_password"


print(show_password("billing"))