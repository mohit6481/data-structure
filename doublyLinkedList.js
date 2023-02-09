class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class  DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return null;
        let returnNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            returnNode.prev = null;
        }
        this.length--;
        return returnNode;
    }

    shift() {
        if (this.length === 0) return null;
        let returnNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            returnNode.next = null;
        }
        this.length--;
        return returnNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(position) {
        if (position < 0 || position >= this.length) return null;
        if (position < this.length / 2) {
            let counter = 0;
            let current = this.head;
            while (counter < position) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            let counter = this.length - 1;
            let current = this.tail;
            while (counter > position) {
                current = current.prev;
                counter--;
            }
            return current;
        }
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
        if (position < 0 || position > this.length) return false;
        if (position === 0) return this.unshift(val);
        else if (position === this.length) return this.push(val);
        else {
            let newNode = new Node(val);
            let previous = this.get(position - 1);
            let after = previous.next;
            previous.next = newNode;
            newNode.prev = previous;
            newNode.next = after;
            after.prev = newNode;
            this.length++;
        }
        return true;
    }

    remove(position) {
        if (position < 0 || position > this.length) return undefined;
        if (position === 0)  return this.shift();
        else if (position === this.length - 1) return this.pop();
        else {
            let removedNode = this.get(position);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
            return removedNode;
        }
    }

    reverse() {
        let counter = 0;
        let temp;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        while (counter < this.length) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            counter++;
            current = temp;
        }
        this.print();
        return this;
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

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);