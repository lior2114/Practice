import tkinter as tk
from tkinter import ttk

def greet():
    print(f"Hello, {user_name.get() or 'World'}")

root = tk.Tk()
root.title("Greeter")
user_name = tk.StringVar()
#------------------------
#מה המספרים מייצגים left top right bottom
input_frame = ttk.Frame(root, padding=(20,10,20,0))
#          מגידירים אותו על both  כדי שכל אחד יקח כמה גודל שהוא צריך 
input_frame.pack(fill="both")

name_label = tk.Label(input_frame, text="Name:")
name_label.pack(side="left", padx=(0, 10))
# width מבטל את fill 
name_entry = tk.Entry(input_frame, width=15, textvariable=user_name)
name_entry.pack(side="left")
name_entry.focus()
#------------------------
# left right, top and bottom
buttons = ttk.Frame(root, padding=(20,10))
#          מגידירים אותו על both  כדי שכל אחד יקח כמה גודל שהוא צריך 
buttons.pack(fill="both")

greet_button = tk.Button(buttons, text="Greet", command=greet)
greet_button.pack(side="left", fill="x",expand=True)

quit_button = tk.Button(buttons, text="Quit", command=root.destroy)
quit_button.pack(side="right", fill="x", expand=True)
#------------------------
root.mainloop()