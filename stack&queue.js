class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if(!this.size) return null;
        let current = this.first;
        this.first = current.next;
        this.size--;
        if(this.size === 0) {
            this.last = null;
        }
        return current.val;
    }
}



class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.size) return null;
        let current = this.first;
        this.first = current.next;
        this.length--;
        if(this.length === 0) {
            this.last = null;
        }
        return current.val;
    }
}