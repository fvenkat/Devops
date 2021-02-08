#!/bin/python3
answer=10

print("Please guess the number between 1 and 100: ")
guess=int(input())
if(guess < answer):
    print("Guess higher number")
elif(guess > answer):
    print("Guess lesser number")
else:
    print("huray!! You are right!!  HeRE THE GIFT FOR YOU")