
def get_admin_password():
    return "1234"

def secure_function(func):
    if user["access_level"] == "admin":
        return func

# "user" dictionary should have "access_level" as the key
user = {"username": "bob", "access_level": "admin"}

# שים לב: כאן אנחנו מעבירים את הפונקציה עצמה, בלי סוגריים.
# כלומר, get_admin_password זה הפונקציה (ולא הערך המוחזר ממנה)
get_admin_password = secure_function(get_admin_password)

# כאן (בשורה הבאה) אנחנו חייבים לשים סוגריים כי אנחנו רוצים להריץ את הפונקציה החדשה,
# כלומר לקרוא לפונקציה שחזרה מ-secure_function (אם חזרה בכלל). 
# אם נשים רק print(get_admin_password) נקבל את האובייקט עצמו (פונקציה),
# אבל אם נשים print(get_admin_password()) נקבל את הערך שמחזירה הפונקציה.
print(get_admin_password())  # סוגריים לקריאה לפונקציה