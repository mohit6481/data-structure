class MaxBinaryHeap {
    constructor () {
        this.value = [];
    }

    insert (value) {
        this.value.push(value);
        this.bubbleUp(value);
        return this;
    }

    bubbleUp (value) {
        let index, parentIndex;
        index = this.value.indexOf(value);
        while(index > 0) {
            parentIndex = Math.floor((index - 1) / 2);
            if (this.value[index] > this.value[parentIndex]) {
                let temp = this.value[index];
                this.value[index] = this.value[parentIndex];
                this.value[parentIndex] = temp;
            } else break;
            index = parentIndex;
        }
    }

    remove () {
        let temp = this.value[0];
        this.value[0] = this.value[this.value.length - 1];
        this.value[this.value.length - 1] = temp;
        const max = this.value.pop();
        let index = 0;
        while (1) {
            let leftIndex = 2 * index + 1 <= this.value.length ? 2 * index + 1 : null; 
            let rightIndex = 2 * index + 2 <= this.value.length ? 2 * index + 2 : null;
            if (this.value[leftIndex] && this.value[rightIndex] && (this.value[index] < this.value[leftIndex] || this.value[index] < this.value[rightIndex])) {
                if (leftIndex !== null && this.value[leftIndex] >= this.value[rightIndex]) {
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

let heap = new MaxBinaryHeap();