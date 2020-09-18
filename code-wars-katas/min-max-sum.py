# Function Description

# Complete the miniMaxSum function in the editor below.

# miniMaxSum has the following parameter(s):

# arr: an array of  integers
# Print

# Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

def minMaxSum(arr):
    n = len(arr)
    min = 0
    max = 0

    for index, num in enumerate(arr):
        if index > 0:
            max += num
        if index < n - 1:
            min += num
    print(min, max)

minMaxSum([1,3,5,7,9])