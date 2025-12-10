import tkinter as tk
#לעיצוב
from tkinter import ttk


#יצירת חלון
root = tk.Tk()

#יצירת לבל חדש בתוך האפליקציה
#שולחים לתוכה את ההורה שלה במקרה שלנו יש לנו רק אחד 
ttk.Label(root, text = "hello world!", padding= (30,50)).pack() #שם את האלמנט בתוך החלון 
#                                        למעלה למטה   ימין שמאל  

#יעצור את הקוד כאן ויריץ את התוכנה
root.mainloop()
