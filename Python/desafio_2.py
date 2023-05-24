def FirstReverse(strParam):
    reverseWord = ""
    for letter in range(len(strParam)-1, -1, -1):
        reverseWord += (strParam[letter])

    strParam = reverseWord
  
    return strParam

# keep this function call here 
print(FirstReverse(input()))