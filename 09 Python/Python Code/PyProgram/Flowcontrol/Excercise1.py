#!/bin/python

#Stop the code When i greater than 0 and exactly divisible by 11. in first 100 numbers dicisible by 7

for i in range(0, 101, 7):
    if i>0 and i % 11 == 0:
        break
    print(i)
