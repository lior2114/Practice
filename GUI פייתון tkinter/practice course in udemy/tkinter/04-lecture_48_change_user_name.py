import tkinter as tk
#לעיצוב
from tkinter import ttk

def greet():
  print(f"hello, {user_name.get() or "world"}")

#יצירת חלון
root = tk.Tk() #לשים לב שכל מה שצריך שיהיה מתחת לאותו רוט יהיה מתחת לאותו רוט ולא בטעות מעליו

#יצירת משתנה 
user_name = tk.StringVar() 

# padx זה בעצם ריווח אופקי מסביב לווידג'ט (padding x - ריווח בציר האיקס, ימין ושמאל)
name_label = ttk.Label(root, text="Name: ")
name_label.pack(side="left" , padx=(0,10))
name_entry = ttk.Entry(root, width=15, textvariable=user_name)#מגדיר איזה משתנה זה ישנה
name_entry.pack(side="left", padx=(10,10)) 

#שישר שנפתח אז זה כבר יפנה אותנו לרשום ולא נצטרך ללחוץ כדי להתחיל לרשום 
name_entry.focus()

greet_button = ttk.Button(root, text="Greet", command=greet)
greet_button.pack(side="left")

quit_button = ttk.Button(root, text ="Quit", command=root.destroy).pack(side="right")



#יעצור את הקוד כאן ויריץ את התוכנה
root.mainloop()
