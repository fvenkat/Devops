#!/bin/python
answer = 9
print("Please Guess the Number between 1 and 10: ")
guess = int(input())

if(guess != answer):
    if(guess > answer):
        print("Guess Lower value: ")
    else:
        print("Guess Higher value: ")
    guess=int(input())
    if(guess == answer):
        print("You are right")
    else:
        print("soryy try later")
else:
    print("Yes you are correct")
