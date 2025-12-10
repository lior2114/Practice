details = {"username": "guest", "password":123456}

def make_secure(func):
  def secure_password():
    if details['username'] == "admin":
      return func()
    else:
      return f"no access to user {details['username']}"
  return secure_password

def get_password():
  return details["password"]

check_secutrity = make_secure(get_password)
print(check_secutrity())