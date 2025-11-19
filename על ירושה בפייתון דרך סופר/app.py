from app1 import Status

class Result(Status):
    def __init__(self, username, password, high):
        super().__init__(username, password, high)
        print(username, password, high)

# Create an instance of Result instead of Status to utilize the Result class
Result("lior", "123456", 1.8)