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
    - Otherwise set the next property on the tail to be the new node and set the tail property on the list
    to be the newly created node.
    - increment the length
*/
class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

}

let linkedList = new SinglyLinkedList()
SinglyLinkedList("Hi")
SinglyLinkedList("My name is")
SinglyLinkedList("Sasha")

