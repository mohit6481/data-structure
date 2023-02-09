class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.value = [];
    }

    enqueue (value, priority) {
        let newNode = new Node(value, priority)
        this.value.push(newNode);
        this.bubbleUp(value);
        return this;
    }

    bubbleUp (value) {
        let index, parentIndex;
        index = this.value.length - 1;
        while(index > 0) {
            parentIndex = Math.floor((index - 1) / 2);
            if (this.value[index].priority > this.value[parentIndex].priority) {
                let temp = this.value[index];
                this.value[index] = this.value[parentIndex];
                this.value[parentIndex] = temp;
            } else break;
            index = parentIndex;
        }
    }

    dequeue () {
        let temp = this.value[0];
        this.value[0] = this.value[this.value.length - 1];
        this.value[this.value.length - 1] = temp;
        const max = this.value.pop();
        let index = 0;
        while (1) {
            let leftIndex = 2 * index + 1 <= this.value.length ? 2 * index + 1 : null; 
            let rightIndex = 2 * index + 2 <= this.value.length ? 2 * index + 2 : null;
            if (this.value[leftIndex] && this.value[rightIndex] && (this.value[index].priority < this.value[leftIndex].priority || this.value[index].priority < this.value[rightIndex].priority)) {
                if (leftIndex !== null && this.value[leftIndex].priority >= this.value[rightIndex].priority) {
                    let temp = this.value[index];
                    this.value[index] = this.value[leftIndex];
                    this.value[leftIndex] = temp;
                    index = leftIndex;
                } else {
                    if (rightIndex !== null)  {
                        let temp = this.value[index];
                        this.value[index] = this.value[rightIndex];
                        this.value[rightIndex] = temp;
                        index = rightIndex;
                    }
                }
            } else {
                break;
            }
        }
        return max;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);