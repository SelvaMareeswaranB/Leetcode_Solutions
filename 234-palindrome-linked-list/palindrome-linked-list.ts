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

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast?.next && fast) {
        slow = slow?.next ?? null;
        fast = fast.next.next;
    }

    if (fast) {
        slow = slow!.next;
    }


    let curr = slow;
    let prev = null;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }


    let left: ListNode | null = head;
    let right: ListNode | null = prev;

    while (right) {
        if (left!.val !== right.val) return false;
        left = left!.next;
        right = right.next;
    }

    return true;
}
