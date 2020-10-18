//------------REMOVE DUPLICATES FROM SORTED LINKED LIST LEETCODE KATA------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    //If the linked list is empty return the list
    if (head === null){
      return head;
    }

    //Create two pointers that will be 1 node apart to compare the values
    let pointer = head.next;
    let prev = head;
    
    //Loop until the first pointer reaches the end of the list
    while (pointer !== null){

    //If the pointers are pointing to equivalent values then we remove the duplicate node
      if (pointer.val === prev.val){
        let temp = prev.next.next;
        pointer = null;
        prev.next = temp;
        pointer = prev.next;

    //If values are not equal we increment the pointers to point the the next nodes
      } else {
        prev = prev.next;
        pointer = pointer.next;
      }
    }

    //return the modified list
    return head;
  };