from typing import List, Optional

class Students:
  def __init__(self, name:str, grades: Optional[List[int]] = None): #כדי שלכל תלמיד יראה את התוצאה שלו ולא את התוצאה של התלמיד הקודם שהכנסנו
    #           כדי לא להגדיר אותו למשהוא ספציפי משווים ל none                     אופציונלי להכניס ציון (לא חובה)
    self.name = name
    self.grades = grades or [] # או לליסט ריק אם אין ציון וכדי להחליף לליסט אחר

  def take_exam(self, result:int):
    self.grades.append(result)

bob = Students("BOB")
bob.take_exam(90)
print(bob.grades)

bogg = Students("BOgg")
bogg.take_exam(940)
print(bogg.grades)