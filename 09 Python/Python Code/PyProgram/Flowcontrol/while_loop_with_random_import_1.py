#!/bin/python
#Guess the number corectly
import random
highest = 10
answer = random.randint(1, highest)
print(answer)
guess = 0
print("Please Guess the number between 1 and 10: ")

while guess != answer:
    guess = int(input())
    if guess == answer:
        print("Winner")
        break
    else:
        if guess < answer:
            print("Guess higher")
        else:
            print("guess lower")






