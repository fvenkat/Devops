#!/bin/python
answer = 9
print("Please guess the number ber 1 & 10: ")
guess=int(input())

if(guess < answer):
    print("Please guess higher number: ");guess = int(input())
    if(guess == answer):
        print("Yes its right!!")
    else:
        print("sorry try nxt time")
elif(guess > answer):
    print("Please guess lower")
    guess=int(input())
    if(guess == answer):
        print("yes your right!!")
    else:
        print("Sorry gud luck nxt time!!")
else:
    print("RIght @ first attempt")


