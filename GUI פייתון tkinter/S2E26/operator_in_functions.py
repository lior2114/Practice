def devide(num1,num2):
  return num1/num2

def func(*values, operator): # * מקבל את כל הערכים כטופל
  return operator(*values) # שולח את כל הערכים כארגומנטים נפרדים לפונקציה operator

print(func(10,2, operator=devide))