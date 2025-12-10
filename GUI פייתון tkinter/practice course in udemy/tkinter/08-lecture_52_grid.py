from pydoc import text
import tkinter as tk
from tkinter import ttk

root = tk.Tk()
# השורה הזו נותנת לעמודה הראשונה בחלון הראשי (root) "משקל" של 1, כלומר אם החלון משנה גודל, העמודה הזו תתרחב בהתאם לגודל החלון.
root.columnconfigure(0, weight=1)

def greet():
  print(f"Hello, {userName.get() or "world"}")

userName = tk.StringVar()
#------------------------

input_frame = ttk.Frame(root, padding=(10,10,10,10))
#                טור 0   שורה 0
input_frame.grid(row=0, column=0)

name_label = tk.Label(input_frame, text="UserName: ")
name_label.grid(row=0, column=0, padx=(0,10))
name_entry = tk.Entry(input_frame,width=15, textvariable=userName)
name_entry.grid(row=0, column=1)
name_entry.focus()
#---------------------------
buttons_frame = ttk.Frame(root, padding=(10,10,10,10))
buttons_frame.grid()

greet_button = ttk.Button(buttons_frame, text="click", command=greet)
greet_button.grid(row=0, column=0)
Quit_button = ttk.Button(buttons_frame, text="Quit", command=root.destroy)
Quit_button.grid(row=0, column=1)
#------------------------
root.mainloop()