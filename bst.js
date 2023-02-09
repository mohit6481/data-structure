class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while(1) {
                if(value === currentNode.value) {
                    break;
                }
                if (value > currentNode.value) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode.right = node;
                        break;
                    }
                } else if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = node;
                        break;
                    }
                }
            }
        }
        return this;
    }

    find(value) {
        let currentNode = this.root;
        if (!this.root) return null;
        while (1) {
            console.log('in')
            if (value === currentNode.value) {
                return currentNode;
            } else if (value > currentNode.value) {
                if (!currentNode.right) return null;
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                if (!currentNode.left) return null;
                currentNode = currentNode.left;
            }
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(11)
console.log(bst.insert(19))
// console.log(bst.find(11))
// console.log(bst.find(19))