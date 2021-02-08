#!/bin/python3
import random
highest = 10
answer = random.randint(1, highest)
print(answer)
print("Please Guess the number between 1 & {} : ".format(highest))
guess = int(input())

if guess == answer:
    print("Thats perfect guess!!")
else:
    if guess < answer:
        print("Guess little higher: ")
    guess = int(input())
    if guess == answer:
        print("you are lucky!!")
    else:
        print("sorry")