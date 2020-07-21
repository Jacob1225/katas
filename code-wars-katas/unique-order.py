#  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

#  For example:

#  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
#  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
#  uniqueInOrder([1,2,2,3,3])       == [1,2,3]

def unique_in_order(iterable):
    result = []
    
    
    if isinstance(iterable, list):
        splitInput = iterable
    else :
        splitInput = list(iterable)
    
    
    
    for index, element in enumerate(splitInput):
        if index == 0:
            result.append(element)
        
        elif splitInput[index - 1] != element:
            result.append(element)
        
    return result

print(unique_in_order([1, 2, 2, 3, 3]))

