
# def user():
#     x = 1
#     y = 5
#     for x in range(1, y, 2):
#         print(x)
#     # The function does not return anything, so it returns None by default
   
# user()


class User():
    @staticmethod
    def down():
        n = int(input("input number: "))
        for i in range(10, 0, -1):
            print(n - i)

    @staticmethod
    def up():
        n = int(input("enter number: "))
        for i in range(0,10,1):
            print(n + i)

            
User.up()

