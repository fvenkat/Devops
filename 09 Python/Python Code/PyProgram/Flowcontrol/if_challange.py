#!/bin/python3
name = input("Please Enter you name: ")
age = int(input("How old are you ? : "))

if(age >=18 and age<=30):
    print("Hello {0}, You are eligible for holiday coupon".format(name))
else:
    print("Sorry Age criteria is not met")