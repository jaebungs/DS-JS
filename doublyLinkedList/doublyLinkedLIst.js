class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor () {
        this.head;
        this.tail;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return newNode;
    }

    pop() {
        if (!this.tail) return undefined
        let tail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }

        this.length--;
        return tail;
    }

    shift() { //removing node from the beginning.
        if (!this.head) return undefined;
        let node = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;

        return node;
    }

    unshift(val) { // add at the beginning
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return newNode
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let foundNode;
        if (index < Math.floor(this.length / 2)) {
            foundNode = this.head;

            for (let i = 0; i < index; i++) {
                foundNode = foundNode.next
            }
        } else {
            foundNode = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                foundNode = foundNode.prev
            }
        }

        return foundNode
    }

    set(index, val) { // replace value
        if (index < 0 || index >= this.length) return undefined;
        let changeNode = this.get(index)
        
        changeNode.val = val;

        return changeNode;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let NodeAtPrevIndex = this.get(index - 1)

        newNode.next = NodeAtPrevIndex.next
        NodeAtPrevIndex.next.prev = newNode
        newNode.prev = NodeAtPrevIndex
        NodeAtPrevIndex.next = newNode
        this.length++;

        return newNode
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return !!this.shift()
        if (index === this.length) return !!this.pop()

        const foundNode = this.get(index);
        const nextNode = foundNode.next;
        const prevNode = foundNode.prev;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        foundNode.next = null;
        foundNode.prev = null;
        this.length--;

        return foundNode;
    }

    print() {
        let array = [];
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            array.push(node);
            node = node.next;
        }

        return array;
    }
}
const doubleLinkedList = new doublyLinkedList();

doubleLinkedList.push('Hi')
doubleLinkedList.push('My name is Sasha')
doubleLinkedList.push(`I'm a cat`)
// doubleLinkedList.pop()
// doubleLinkedList.shift()
// doubleLinkedList.unshift('Meow!')

// console.log(doubleLinkedList.get(2))
// doubleLinkedList.insert(2, "lol")
doubleLinkedList.remove(2)

console.log(doubleLinkedList.print())
// console.log(doubleLinkedList.print())

/* Big O
Insertion - O(1)
Removal - O(1) unlike singly linked list
Search - O(N) typically O(N/2) but it's still O(N). Better than singly linked list.
Access - O(N)

They take up more memory compare to SLL
EX) Browser!
*/