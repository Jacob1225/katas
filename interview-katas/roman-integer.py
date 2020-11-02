# ------------- ROMAN TO INTEGER INTERVIEW KATA LEETCODE -----------------

# Input: s = "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

def romanToInt(s):

    roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    s = s.replace('CM', 'CDD').replace('CD', 'CCCC').replace('XC', 'XLL').replace('XL', 'XXXX').replace('IX', 'IVV').replace('IV', 'IIII')
    return sum([roman[i] for i in s])

print(romanToInt('MCMXCIV'))


    

        