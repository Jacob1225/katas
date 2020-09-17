# Function description

# Complete the  function in the editor below.

# diagonalDifference takes the following parameter:

# int arr[n][m]: an array of integers
# Return

# int: the absolute diagonal difference

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

n = len(arr)

d1 = sum(arr[x][x] for x in range(n))
d2 = sum(arr[x][n - 1 - x] for x in range(n))

print(abs(d2-d1))