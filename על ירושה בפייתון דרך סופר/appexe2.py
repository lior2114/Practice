
# תרגיל 8
def user(sentence):
    freq_dict = {}
    for char in sentence:
        freq_dict[char] = freq_dict.get(char, 0) + 1
    max_freq = max(freq_dict.values())

    max_items = []
    for k, v in freq_dict.items():
        if v == max_freq:
            max_items.append(k)

    first_max_char = max_items[0]
    print({first_max_char: freq_dict[first_max_char]})

# דרך 2 
    max_char = max(freq_dict, key=freq_dict.get)
    print(max_char, freq_dict[max_char])
    


def user2(sen):
    char_list = {}
    for i in sen:
        char_list[i] = char_list.get(i,0) + 1
    max_char = max(char_list.values())
    max_list = []
    for k,v in char_list.items():
        if v == max_char:
            max_list.append(k)
    
    first_max = max_list[0]
    print({first_max:char_list[first_max]})
    
# דרך 2 
    max_char = max(char_list,  key = char_list.get)
    print(max_char, char_list[max_char])
    
# user2("eeeeffff")



# --------תרגיל 9--------
import random

def rand():
    numbers = []
    for _ in range(20):
        numbers.append(random.randint(1, 10))
    print(numbers)

    # ספירת הופעות כל מספר
    freq = {}
    for num in numbers:
        freq[num] = freq.get(num, 0) + 1
        
    max_count = max(freq.values())

    # מצא את כל המספרים שמופיעים הכי הרבה פעמים
    max_numbers = []
    for n in freq:
        if freq[n] == max_count:
            max_numbers.append(n)
    # הצג הודעה בהתאם
    if len(max_numbers) == 1:
        print(f"The number that appears most frequently is {max_numbers[0]}, it appears {max_count} times.")
    else:
        print("The numbers that appear most frequently are:", end=" ")
        # enumerate היא פונקציה שמחזירה גם את האינדקס (המיקום) וגם את הערך של כל איבר בלולאה
        for i, num in enumerate(max_numbers):
            #אם המספר נמצא אחרון 
            if i == len(max_numbers) - 1:
                print(num, end=". ")
            else:
                print(num, end=", ")
        print(f"Each appears {max_count} times.")

rand()