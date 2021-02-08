#!/bin/python3
number = "9,223;372:036 854,775:805"
separators = ""     #separators = ",;"  on first 2 iteration
print(number[1::4])

# This method rely on 3 digit number if its changes then out gets changed , then every 4th digit

for char in number:
    if not char.isnumeric():
        separators = separators + char
print(separators)
