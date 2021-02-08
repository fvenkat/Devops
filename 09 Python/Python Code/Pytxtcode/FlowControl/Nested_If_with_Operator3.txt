#!/bin/python3
age = int(input("How old are you ? "))

if 18 <= age <= 65:
    print("You are eligible to vote")
elif age < 16 or age > 65:
    print("You are not eligible to vote")
