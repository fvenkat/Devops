#!/bin/python
shopping_list = ["milk", "pasta", "eggs", "spam", "bread", "rice"]
item_to_find = "spam"
found_at  = None

for i in range(len(shopping_list)):
    if shopping_list[i] == item_to_find:
        found_at = i
        print("Item is found")
        break

if found_at is not None:
    print("Item {} is found at position {}".format(item_to_find,i))
else:
    print("{} is not found".format(item_to_find))

