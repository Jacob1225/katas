# Function description

# Complete the  function in the editor below.

# diagonalDifference takes the following parameter:

# int arr[n][m]: an array of integers
# Return

# int: the absolute diagonal difference

def diagonal_difference(arr):
    n = len(arr)

    d1 = sum(arr[x][x] for x in range(n))
    d2 = sum(arr[x][n - 1 - x] for x in range(n))

    return (abs(d2-d1))