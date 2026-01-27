/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function reverseList(head: ListNode | null): ListNode | null {
//     let tempCurr = null;
//     let tempPrev = null;
//     let curr = head;
//     let prev = null;

//     while (curr) {
//       tempCurr = curr.next;
//       tempPrev = curr;
//       curr.next = prev;
//       prev = tempPrev;
//       curr = tempCurr;
//     }

//     return prev;  
// };




function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr
      curr = next
    }

    return prev;  
};