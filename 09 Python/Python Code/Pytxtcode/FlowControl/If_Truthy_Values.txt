#!/bin/python3
if 0:
    print("Zero")
else:
    print("Other than zero")

name= input("Enter the name please: ")
if name:
    print("Hello {}".format(name))
else:
    print("Are you have the name or not???")

if(name != ""):
    print("Hello {0}!! Welcome back".format(name))
else:
    print("END")