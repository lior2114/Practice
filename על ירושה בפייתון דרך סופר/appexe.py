number_List = []

def numbers_exe_1():
    for i in range(3):
        n = int(input(f"enter number{i}: "))
        number_List.append(n)
    print("-------1-------")
    print(number_List)
    print(number_List[2])
    print(number_List[1:-1])
    
    print("-------2-------")
    number_to_delete = int(input("enter number to delete: "))
    if number_to_delete in number_List:
        number_List.remove(number_to_delete)
    else:
        print("no such number in the list")
    print(number_List)
        
    print("-------3-------")
    split_list = []
    for num in number_List:
        if num %2 == 0: 
            split_list.append(num)
        else:
            continue
    print(split_list)
    
            
    print("-------4-------")
    unsplit_list = []
    for num in number_List:
        if num %2 != 0: 
            unsplit_list.append(num)
        else:
            continue
    print(unsplit_list)
            

def numbers_exe_2():
    fruit_list = []
    for i in range(3):
        n = input("enter fruit names: ")
        fruit_list.append(n)
    print("-------1-------")
    print(fruit_list)
    
    print("-------2-------")
    counter = 0 
    for fruit in fruit_list:
        print(len(fruit))
        counter += len(fruit)
    print(counter)


import random 
def numbers_exe_3():
    number_list_random = []
    for i in range(10):
        n = random.randint(-50,50)
        number_list_random.append(n)
    print("-------1-------")
    print(number_list_random)
    
    print("-------2-------")
    counter = 0 
    for number in number_list_random:
        counter += number
    print(counter)
    print(f"avg is: {counter/(len(number_list_random))}")

        
    
        
