def movezeroes(arr):
    c=0
    i=0
    while(i<len(arr)):
        if(arr[i]!=0):
            arr[c]=arr[i]
            c+=1
        i+=1
    while(c<len(arr)):
        arr[c]=0
        c+=1
arr=[0,1,0,3,12]
movezeroes(arr)
print(arr)
        
