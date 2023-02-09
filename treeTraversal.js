class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    bfs() {
        let queue = [];
        let variable = [];
        let current = this.root;
        queue.push(this.root);
        while(queue.length) {
            current = queue.shift();
            variable.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return variable;
    }

    dfsPreO() {
        let variable = [];
        const traverse = (node) => {
            variable.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return variable;
    }

    dfsPostO() {
        let variable = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            variable.push(node);
        }
        traverse(this.root);
        return variable;
    }

    dfsInO() {
        let variable = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            variable.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return variable;
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)

const tree = new Tree();
tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.right = node4;
tree.root.right.left = node5;
tree.root.right.right = node6;
console.log(tree.dfsPreO());
