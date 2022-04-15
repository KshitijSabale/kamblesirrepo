import json
import sys 
import csv

num = sys.argv[1]
num = int(num)

if(num%2):
    lst = "ODD"
    print(lst)
else:
    lst = "EVEN"
    print(lst)


