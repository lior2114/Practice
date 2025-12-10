def unpack(**kwards): # הפונקציה מקבלת כמות לא מוגבלת של ארגומנטים שמועברים בצורה של מילות מפתח (key=value), והיא מאחדת אותם למילון בשם kwards
  for k in kwards:
    print(k)

details={"name":"lior" ,"lastname":"mamo"}

unpack(**details) # כאן אנחנו פותחים את המילון details ומעבירים את כל המפתחות והערכים שלו כארגומנטים בשם לפונקציה unpack