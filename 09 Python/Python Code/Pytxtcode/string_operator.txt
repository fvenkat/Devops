#!/bin/pyhton38
var1 = "sachin"
var2 = "Brett"
var3 = "warne"
var4 = "Its a legend list"
print(var1 + var2 + var3)
print(var1,var2,var3)
print(var1 * 5)
print("Hello " * 5 + "4")

#IN operator evalutes true if first thing exist on second
today = "friday"
print("day" in today)   #true
print("fri" in today)
print("thur" in today)
print("parr" in today)  #false