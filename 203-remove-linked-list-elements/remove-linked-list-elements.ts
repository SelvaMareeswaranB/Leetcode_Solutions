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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null
    let newHead= head
    let curr = head;
    let prev = head;

    while (curr) {
      if (curr.val === val) {
        if (newHead === curr) newHead = curr.next;
        if (prev) prev.next = curr.next;
        
      } else {
        prev = curr;
      }

      curr = curr.next;
    }
    return newHead
}