import tkinter as tk  
from tkinter import ttk 

root = tk.Tk()

#יצירת קונטיינר שיכיל את הlabels שלנו
main = ttk.Frame(root)
main.pack(side='left', fill="both", expand=True)

root.geometry("600x400")
#      שמנו כאן את ה main כדי שיצור לו איזור משלו בתוך האפליקציה 
tk.Label(main, text="label top", bg="red").pack(side="top", expand=True, fill="both")
tk.Label(main, text="label top", bg="red").pack(side="top", expand=True, fill="both")
tk.Label(root, text="label left", bg="green").pack(side="left", expand=True, fill="both")
root.mainloop()