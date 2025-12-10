import tkinter as tk
#לעיצוב
from tkinter import ttk

 #בדיפולט הכפתורים ששמנו יהיו אחד מעל השני באמצע המסך למעלה וכל כפתור שנוסיף יהיה מתחתיהם 
def greet():
  print("hello,world!")

#יצירת חלון
root = tk.Tk()
 #                              בלי סוגרים כי כרגע הפונקציה לא מחזירה כלום 
greet_button = ttk.Button(root, text="Greet", command=greet)
# ובנוסף האקספנד אומר שאם מגדילים את החלון הכפתור יגדל איתו | ממלא את חלל האיקס שכל הכפתור יכסה אותו| שם את הכפתור בתוך החלון בצד שמאל 
greet_button.pack(side="left", fill = "x", expand=True)


quit_button = ttk.Button(root, text ="Quit", command=root.destroy).pack(side="left")



#יעצור את הקוד כאן ויריץ את התוכנה
root.mainloop()
