#!/bin/python3
available_exists = ["north", "south", "east", "west"]

chosen_exit = ""
while chosen_exit not in available_exists:
    chosen_exit = input("Please choose a right direction: ")

print("Yes you are right")

