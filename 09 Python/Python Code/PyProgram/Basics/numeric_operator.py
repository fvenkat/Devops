#!/bin/python3
a = 50
b = 10
c = 10.5
print(a + b)
print(a * b)
print(a / b)        #5.0 >> float value
print(a // b)       #5   >> int value
print(a % b)
print(a + b + c)
print(type(print(a/b)))
#for i in range(1, a/b):                ##TypeError: 'float' object cannot be interpreted as an integer
 #    print(i)
for i in range(1, a // b ):
     print(i)


