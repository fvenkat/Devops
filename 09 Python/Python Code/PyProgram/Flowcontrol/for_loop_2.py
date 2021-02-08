#!/bin/python3
number = input("Please enter a series of number using any separator like:, : ")

separators = ""
for i in number:
    if not i.isnumeric():
        separators = separators + i
    print(separators)
print("The value of separator is :", separators)
