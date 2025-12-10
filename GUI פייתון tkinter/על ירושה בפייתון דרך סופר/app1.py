
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def treangle(self):
        print(self.username)
        print(self.password)

class Status(User):
    def __init__(self, username, password, high):
        super().__init__(username, password)
        self.high = high
    def printing(self):
        print(self.high, self.username, self.password)

u = User("lior", 12345)
f = Status("lior", 12345, 1.8)  # Correct constructor arguments
u.treangle()
f.printing()                     # Actually call the printing method to show the output

