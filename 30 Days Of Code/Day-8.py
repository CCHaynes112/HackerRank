amount = int(input())
phoneBook = {};
for i in range(0, amount):
    str = input()
    a,b = str.split(" ")
    phoneBook.update({a:b})
      
for i in range(0, amount):
    name = input()
    if name in phoneBook:
        print(name + "=" + phoneBook[name])
    else:
        print("Not found")