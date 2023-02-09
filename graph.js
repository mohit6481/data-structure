class Graph {
    constructor () {
        this.adjacenceyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacenceyList[vertex]) this.adjacenceyList[vertex] = [];
    }

    removeVertex (vertex) {
        this.adjacenceyList[vertex].forEach(v => this.removeEdges(vertex, v));
        delete this.adjacenceyList[vertex];
    }

    addEdges (vertex1, vertex2) {
        this.adjacenceyList[vertex1] && this.adjacenceyList[vertex1].push(vertex2);
        this.adjacenceyList[vertex2] && this.adjacenceyList[vertex2].push(vertex1);
    }

    removeEdges (vertex1, vertex2) {
        this.adjacenceyList[vertex1] = this.adjacenceyList[vertex1].filter(v => v != vertex2);
        this.adjacenceyList[vertex2] = this.adjacenceyList[vertex2].filter(v => v != vertex1);
    }

    dfsRecursive (vertex) {
        let result = [];
        let visited = {};
        const helper = (vertex) => {
            if (!vertex) {
                return;
            }  
            visited[vertex] = true;
            result.push(vertex);
            this.adjacenceyList[vertex].forEach(el => {
                if (!visited[el]) {
                    helper(el)
                }
            })
        }
        helper(vertex);
        return result;
    }

    dfsIterative (vertex) {
        let stack = [vertex];
        let result = [];
        let visited = {};
        let current;
        visited[vertex] = true;
        while (stack.length) {
            current = stack.pop();
            result.push(current);
            this.adjacenceyList[current].forEach(el => {
                if (!visited[el]) {
                    visited[el] = true;
                    stack.push(el)
                }
            })
        }
        return result;
    }

    bfs (vertex) {
        let visited = {};
        let result = [];
        let queue = [vertex];
        let current;
        visited[vertex] = true;
        while (queue.length) {
            current = queue.shift();
            result.push(current);
            this.adjacenceyList[current].forEach(el => {
                if (!visited[el]) {
                    visited[el] = true;
                    queue.push(el)
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdges("A", "B")
g.addEdges("A", "C")
g.addEdges("B", "D")
g.addEdges("C", "E")
g.addEdges("D", "E")
g.addEdges("D", "F")
g.addEdges("E", "F")

