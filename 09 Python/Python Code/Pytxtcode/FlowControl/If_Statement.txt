#!/bin/python3
name = input("Could you please Enter your Name Here? : ")
age = int(input("How old are you {0}: ".format(name)))
print(age)

if(age >= 18):
    print("You are old enough to vote")
    print("Please put the vote in the box")
else:
    print("Come back to vote after {} years".format(18 - age))