class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SignlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = this.head;
        }
        return current;
    }

    shift() {
        if(!this.length) return;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(position) {
        let current = this.head;
        if (position < 0 || position >= this.length) return null;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    set(position, val) {
        let current = this.get(position);
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }

    insert(position, val) {
        if (position < 0 || position >= this.length) return false;
        if (position === 0) return !!this.unshift(val);
        if (position === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let previous = this.get(position - 1);
        let current = previous.next;
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return true;
    }

    remove(position) {
        if (position < 0 || position >= this.length) return null;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();
        let previous = this.get(position - 1);
        let current = previous.next;
        previous.next = current.next;
        this.length--;
        return current;
    }

    reverse() {
        let previous = this.head;
        let current = previous.next;
        let nextNode;
        for (let i = 1; i < this.length; i ++) {
            nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        this.tail = this.head;
        this.tail.next = null;
        this.head = previous;
        this.print();
        return list;
    }

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
