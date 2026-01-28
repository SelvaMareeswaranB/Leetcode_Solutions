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

function hasCycle(head: ListNode | null): boolean {
        let slow: ListNode | null = head;
    let fast: ListNode | null = head?.next;
    while (fast) {
      if (slow === fast) {
    return true
      }
      slow = slow?.next ?? null;
      fast = fast?.next?.next ?? null;
    }
    return false;
};