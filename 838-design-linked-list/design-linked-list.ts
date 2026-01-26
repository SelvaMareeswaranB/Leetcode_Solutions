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
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    let i = 0;

    while (curr) {
      if (i === index) return curr.val;
      curr = curr.next;
      i++;
    }
    return -1;
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new ListNode(val, null);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

   if (index === 0) return this.addAtHead(val);
        if (index === this.size) return this.addAtTail(val);
    let curr = this.head;
    let i = 0;

    while (curr) {
      if (i === index - 1) {
        const newNode = new ListNode(val, curr.next);
        curr.next = newNode;
        this.size++;
        return;
      }
      curr = curr.next;
      i++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head?.next ?? null;
      this.size--;
      return;
    }

    let curr = this.head;
    let i = 0;

    while (curr) {
      if (i === index - 1) {
        curr.next = curr.next?.next ?? null;
        this.size--;
        return;
      }
      curr = curr.next;
      i++;
    }
  }

  print(): number {
    let head = this.head;
    let length = 0;
    while (head) {
      console.log(head.val);
      head = head.next;
      length++;
    }
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