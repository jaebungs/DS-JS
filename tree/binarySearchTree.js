// Tree is Used for
/* 
HTML DOM
folder system
JSON
*/

/*
1. Maximum number of 2 child.
2. Every node left to a parent node is always smaller than the parent node.
3. Every node right to a parent node is always bigger than the parent node.
*/

// Big O
// Insertion O(logN)
// Searching O(logN)
// log based 2, 1 -> 2 -> 4 -> 8, but steps are incresed by 1
// but not guaranteed, Why?
// let's say there is a binary tree. but all node have only 1 child with bigger numbers all the way down.
// this is O(N)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) return this.root = newNode;
        
        let current = this.root;
        while(true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return
                } else {
                    current = current.left;
                }
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return
                } else {
                    current = current.right;
                }
            } 
        }
    }

    // find(val) {
    //     if (!this.root) return false
    //     if (this.root.val === val) return true
    //     let currentNode = this.root;

    //     while (true) {
    //         if (val < currentNode.val) {
    //             currentNode = currentNode.left;
    //         } else {
    //             currentNode = currentNode.right;
    //         }

    //         if (currentNode.val === val) return true;
    //         if (!currentNode.right && !currentNode.left) return false
    //     }
    // }

    find(val) {
        if (!this.root) return false
        let found = false;
        let currentNode = this.root;

        while (currentNode && !found) {
            if (val < currentNode.val) {
                currentNode = currentNode.left
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                found = true;
                return true;
            }
        }
        return false;
    }


}

const BinarySearchTree = new BST();
BinarySearchTree.insert(10)
BinarySearchTree.insert(5)
BinarySearchTree.insert(13)
BinarySearchTree.insert(11)
BinarySearchTree.insert(16)
console.log(BinarySearchTree.find(16))
console.log(BinarySearchTree.find(100))

// console.log(BinarySearchTree)

