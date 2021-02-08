day = "friday"
Temp = 30
raining = True
visit = input("Did U travelled forign say yes or no : ")
temp = int(input("Value of temp? :  "))
covid = input("Do u have Covid ? say True or False ")

if((visit == ("no" or "No" or "NO") and temp <= 98) or not covid ):
    print("You can come to the office for work")
else:
    print("Do Work form home")


if ((day == "saturday" and Temp > 27) or not raining ):
    print("You can play cricket")
else:
    print("Its Raining so be at Home")
