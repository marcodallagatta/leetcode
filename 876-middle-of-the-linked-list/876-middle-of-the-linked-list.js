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

var middleNode = function(head) {
  
  let arr = [head];
  
  while (head.next) {
    arr.push(head.next);
    head = head.next;
  }
    
  const middle = Math.floor(arr.length / 2);
    
  return arr[middle];
};