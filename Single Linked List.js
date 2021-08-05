class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SingleLinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}


const node1 = new ListNode(2);
const node2 = new ListNode(5);
node1.next = node2;
const list = new SingleLinkedList(node1)
console.log(list.head.next.data) // 5
console.log(list.size()); // 2
console.log(list.getLast()); // { data: 5, next: null }
console.log(list.getFirst()); // { data: 2, next: ListNode { data: 5, next: null } }list.clear();
list.clear();
console.log(list); // { head: null }
