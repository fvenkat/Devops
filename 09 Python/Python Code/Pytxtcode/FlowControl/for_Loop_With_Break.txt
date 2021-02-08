#!/bin/python3
shopping_list = ["milk", "pasta", "eggs", "spam", "bread", "rice"]
item_to_find = "spam"

for item in shopping_list:
    if item == "spam":
        break
    print("buy {0}".format(item))
print("**" * 10)
