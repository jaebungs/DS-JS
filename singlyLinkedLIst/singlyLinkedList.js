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

    pop() {
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
}

let linkedList = new SinglyLinkedList()
linkedList.push("Hi")
linkedList.push("My name is")
linkedList.push("Sasha")
linkedList.pop()

console.log(linkedList)