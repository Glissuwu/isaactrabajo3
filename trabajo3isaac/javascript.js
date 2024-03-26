class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    removeFromHead() {
        if (!this.head) {
            throw new Error('La pila está vacia');
        }
        const data = this.head.data;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        return data;
    }

    addToTail(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeFromTail() {
        if (!this.head) {
            throw new Error('La cola está vacia');
        }
        const data = this.tail.data;
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        return data;
    }
}

const linkedList = new LinkedList()

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToTail(3);

console.log(linkedList.removeFromHead()); 
console.log(linkedList.removeFromTail()); 