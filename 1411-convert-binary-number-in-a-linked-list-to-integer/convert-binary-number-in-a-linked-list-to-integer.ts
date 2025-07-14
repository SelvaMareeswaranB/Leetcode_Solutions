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

function getDecimalValue(head: ListNode | null): number {
    let curr = head
    let answer = 0
    while (curr!==null) {
        answer = answer * 2 + curr.val;
        console.log(curr.val);
        curr = curr.next;
    }

    return answer
};