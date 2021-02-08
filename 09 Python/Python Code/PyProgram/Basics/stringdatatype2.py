#/bin/python3
#Slicing
      #012345678910111213141516171819
var = "Lets Begin or End this world!!"
print(var[0:8])      # 0 to 7 not 8
print(var[:8])       # 0 to 7 not 8
print(var[0:])       # 0 to All
print(var[:])        #All to All
print(var[1:5])
print()
#Negative Slicing
var = "Lets begins or End"
print(var[-3])
print(var[-3:-5])
print(var[-3:-1])
print(var[-7:16])
#Step in a slice
num = "01234567891011112"
make = num[0:12:3]
print()
print(make)   #0 to 11 then step it as 3 >> 0 3 6 9
print(num[16:-1])   # NULL include last digit but deletes last so null
print(num[::-1])    #reverse
print()
#Negative step
print(num[16:0])
print(num[16:0:-1])
print(num[16:5:-1])
print(num[4::-1])