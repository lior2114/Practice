import tkinter as tk
from tkinter import ttk

def print_message():
  print(f"hello {user_name.get() or "world"}")

root = tk.Tk()
user_name = tk.StringVar()

name_label = ttk.Label(root, text="Name: ", padding=10)
name_label.pack(side="left")

name_input = ttk.Entry(root, width=10, textvariable=user_name)
name_input.pack(side="left")
name_input.focus()

apply_message = ttk.Button(root, text="click", command=print_message)
apply_message.pack(side="left")

quit = ttk.Button(root, text="Quit", command=root.destroy).pack(side="left")
root.mainloop()