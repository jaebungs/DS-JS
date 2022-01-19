class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hello, World');
// first.next = new Node('this is not good way')
// first.next.next = new Node('It works, but not good!')

/* Pseudocode
    - Function accpet a value
    - Create a new node using the passed value
    - If not head, set head and tail.
    - Otherwise set the next property on the tail to be the new node and 
    set the tail property on the list to be the newly created node.
    - increment the length
*/
class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;
        return this;
    }

    pop() { // remove the last node
        if (!this.head) return
        let current = this.head;
        let temp = this.head;

        while(current.next) {
            temp = current
            current = current.next
        }
        this.tail = temp
        this.tail.next = null;
        this.length--;
        
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() { // remove the beginning node
        if (!this.head) return

        this.head = this.head.next
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
    }

    unshift(value) { // add new node to the beginning.
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    get(position) {
        if (position < 0 || position > this.length) return null;
 
        let node = this.head;
        let loop = 0; 
        while (loop !== position) {
            node = node.next
            loop++;
        }

        return node;
    }

    set (index, value) {
        const foundNode = this.get(index)
        
        if (!foundNode) return undefined
        foundNode.val = value;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        const prevNode = this.get(index - 1);
        const newNode = new Node(value);
        const temp = prevNode.next;

        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.shift()
        if (index === this.length) return !!this.pop()

        const prevNode = this.get(index - 1)
        const nextNode = prevNode.next

        prevNode.next = nextNode.next
        return nextNode
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
//      [100, 200, 300, 400]
//       node next
//  prev      
//       prev node
//                 next
    }
}
let linkedList = new SinglyLinkedList()
linkedList.push("Hi")
linkedList.push("My name is")
linkedList.push("Sasha")
// linkedList.pop()
// linkedList.shift()
// linkedList.unshift('Hey!!')

// console.log(linkedList)
// console.log(linkedList.get(2)) //"My name is")
// linkedList.set(2, "UUUAAHHH")
// linkedList.insert(3, 'wer')
// linkedList.remove(1)
linkedList.reverse()
console.log(linkedList)