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

  console.log('-/-/-/-')  
  let slow = head;
  let fast = head;
  if (!slow || !slow.next) return null;
    
  // check if there is a loop
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (!fast || !fast.next) return null;
    if (slow === fast && slow) break;
    console.log('slow ' + slow.val);
    console.log('fast ' + fast.val);
    console.log('- - -');
  }
  console.log('uscito');
  slow = head;
  console.log('slow ' + slow.val);
  console.log('- - -');
  
  // checks which node the loop starts again from
  while (fast) {
    if (slow === fast) return slow;
    slow = slow.next;
    fast = fast.next;
    console.log('slow ' + slow.val);
    console.log('fast ' + fast.val);
    console.log('- - -');
  }
  
};