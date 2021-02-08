#!/bin/python3
name=input("Please Enter you name : ")
age=int(input("How old are you {0} : " .format(name)))
print(age)

if(age<18):
    print("please come back after {} years ".format(18 - age))
elif(age>=200):
    print(input("Sorry Only humans are eligible to vote"))
else:
    print("You are old enough to vote")
    print("Please put the vote in the box")