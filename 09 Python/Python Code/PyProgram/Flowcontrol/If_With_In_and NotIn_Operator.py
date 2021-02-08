#!/bin/python3
parrot = "Norwegian Blue"
letter = input("Enter the character here : ")

if(letter in parrot):
    print("Character \"{}\" presents in {}".format(letter, parrot))
elif(letter in parrot.casefold()):
    print("Yes you are right")
elif(letter not in parrot):
    print("No!! Wrong guess")



