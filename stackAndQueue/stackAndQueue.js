// LIFO last in first out
// dishes, collection of book on a desk, anything you pile up. Call Stack in JS (managing function invocation).
// Undo / Redo, routing (history object).
// can use linked list. There is more than one way of implementing a stack.
// It's an abstract concept. Don't need code.

// Array Implementation
let stack = []
stack.push('google')
stack.push('stackOverFlow')
stack.push('youTube')
console.log(stack)
stack.pop()
console.log(stack)
 // or unshift and shift, However add/remove in front of array is not good bc of reindexing.
 stack.unshift('google')
stack.unshift('stackOverFlow')
stack.unshift('youTube')
console.log(stack)
stack.shift()
console.log(stack)

// LinkedList implementation
// stack.push('google');
// stack.push('youtube')
// stack.pop(); // !! No. In singly linked list, pop is not efficent bc it has to travel all the way to the tail
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return newNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }
}
const stackWList = new Stack();
stackWList.unshift('google') 
stackWList.unshift('youtube')
stackWList.shift()
console.log(stackWList)

// Big O of Stack
/* 
Remove - O(1)
Add - O(1)
Search - O(N)
Access - O(N)
*/

// QUEUE
// FIFO - first in first out.
// ex) line up in real life. background tasks, uploading, downloading resources.
// Printing/ task processing.

// Can use arry or linkedList.
// Instert at the end, remove the beginning or Insert at the beginning and remove the end (this is not efficent tho) O(N).
// Big O of Stack
/* 
Remove - O(1)
Add - O(1)
Search - O(N)
Access - O(N)
*/
