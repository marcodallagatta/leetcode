/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

  let slow = head;
  let fast = head;
  if (!slow || !slow.next) return null;
    
  // check if there is a loop
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (!fast || !fast.next) return null;
    if (slow === fast && slow) break;
  }
  slow = head;
  
  // checks which node the loop starts again from
  while (fast) {
    if (slow === fast) return slow;
    slow = slow.next;
    fast = fast.next;
  }
  
};