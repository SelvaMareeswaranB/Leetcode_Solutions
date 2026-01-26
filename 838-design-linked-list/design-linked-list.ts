// class ListNode {
//   val: number;
//   next: ListNode | null;

//   constructor(val: number, next: ListNode | null) {
//     this.val = val;
//     this.next = next;
//   }
// }

class MyLinkedList {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let trackIndex = 0;
    let curr = this.head;
    let foundedIndex = -1;
    while (curr) {
      if (trackIndex === index) {
        foundedIndex = curr.val;
        break
      }
      trackIndex++;
      curr = curr.next;
    }
   return foundedIndex;
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    const temp = this.head;
    newNode.next = temp;
    this.head = newNode;
  }

  addAtTail(val: number): void {
    const newNode = new ListNode(val, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;

    while (curr && curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

 addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let trackIndex = 0;
    let curr = this.head;
    const newNode = new ListNode(val, null);
    while (curr) {
      trackIndex++;
      if (trackIndex === index) {
        const temp = curr.next;
        newNode.next = temp;
        curr.next = newNode;
        return;
      }
      curr = curr.next;
    }
    //   this.addAtTail(val)
  }

  deleteAtIndex(index: number): void {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let curr = this.head?.next ?? null;
    let trackIndex = 1;

    while (curr) {
      if (trackIndex === index) {
        prev!.next = curr.next;
        return;
      }
      prev = curr;
      curr = curr.next;
      trackIndex++;
    }
  }
  findLength(): number {
    let head = this.head;
    let length = 0;
    while (head) {
      console.log(head.val);
      head = head?.next;
      length++;
    }
    console.log(length);
    return length;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */