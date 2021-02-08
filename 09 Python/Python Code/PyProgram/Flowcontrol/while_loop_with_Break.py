#!/bin/python3
available = ["north", "south", "east", "west"]

chosen_exit = ""
while chosen_exit not in available:
    chosen = input("Please enter the direction: ")
    if chosen.casefold() == "north":
        print("Game over")
        break
        print("Yes you are in right direction")
