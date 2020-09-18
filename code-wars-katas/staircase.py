# Function Description

# Complete the staircase function in the editor below.

# staircase has the following parameter(s):

# int n: an integer
# Print

# Print a staircase as described above.
import sys
def staircase(n):
    for row in range(n):
        a = n - 1 - row
        for col in range(n):
            if a <= col:
                sys.stdout.write('#')
            else:
                sys.stdout.write(' ')
        print()
          
staircase(4)