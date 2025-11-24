import handle_numbers as han
import handle_big_digits as big
import handle_list as li
try:
    #1 handle_numbers
    print(han.sum_digits(-47)) # 11
    print(han.sum_digits(0)) # 0
    print(han.sum_digits(7865)) #26
    # print(han.sum_digits(2.6)) index err

    #2 handle_big_digits
    print(big.big_digits(999))#true
    print(big.big_digits(959))#false
    print(big.big_digits(991))#false
    # print(big.big_digits(1.99)) index err

    #3 handle_list
    print(li.high_numbers([2,300,4]))#(300)
    # print(li.high_numbers([2,'r',4])) index err
    # print(li.high_numbers([2.4,300,4])) index err
    
except ValueError as err:
    print(err)
except ZeroDivisionError as err:
    print(err)
except Exception as err:
    print(err)