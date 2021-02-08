#!/bin/python3
shopping_list = ["milk", "pasta", "eggs", "spam", "bread", "rice"]

for item in shopping_list:
    if item != "spam":
        print("Buy {0}".format(item))
print("*" *8)

for i in shopping_list:
    if i == "spam":
        continue
    print("Buy {}".format(i))