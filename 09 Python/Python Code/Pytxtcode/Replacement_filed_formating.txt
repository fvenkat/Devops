#!/bin/pyhton
for i in range(1,11):
    print("No. {} squared is {} and cubed is {}".format(i, i**2, i**3))
print()
##formating
for i in range(1, 11):
    print("No. {0:2} squared is {1:4} and cubed is {2:4}".format(i, i**2, i**3))
