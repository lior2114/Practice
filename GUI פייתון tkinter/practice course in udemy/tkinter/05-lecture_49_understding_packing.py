import tkinter as tk
from tkinter import StringVar, ttk


root  = tk.Tk()
root.geometry("600x400")

#         לשים לב שכאן משתמשים ב tk
rectangle1 = tk.Label(root, text="rectangle1", bg="green", fg="white")
rectangle1.pack(side="left", ipadx=10, ipady=10, fill="y", expand=True) #כאן 

rectangle2 = tk.Label(root, text="rectangle2", bg="red", fg="black")
rectangle2.pack(ipadx=10, ipady=10, fill="x")


root.mainloop()  