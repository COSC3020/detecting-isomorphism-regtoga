//start of the priorityQueue
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const qElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (qElement.priority >= this.items[i].priority) {
                this.items.splice(i, 0, qElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length == 0) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    inside(element) {
        for (let i = 0; i < this.items.length; i++) {
            if (element == this.items[i].element) {
                return [true, this.items[i].priority];
            }
        }
        return [false, 0];
    }

    getlength() {
        return this.items.length;
    }
}
//end of the priority queue

//start of the tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function construct_tree(adjMatrix, nodeQueue) {
    const n = adjMatrix.length;
    const visited = new Array(n).fill(false);
    let trees = [];

    while (nodeQueue.getlength() > 0) {
        const { element: node } = nodeQueue.dequeue();
        if (!visited[node]) {
            const rootNode = buildTreeFromNode(adjMatrix, node, visited);
            trees.push(rootNode);
        }
    }

    return trees;
}

function buildTreeFromNode(adjMatrix, startNode, visited) {
    const queue = [];
    const root = new TreeNode(startNode);
    queue.push(root);
    visited[startNode] = true;

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const unvisitedNeighbors = getUnvisitedNeighbors(adjMatrix, currentNode.value, visited);

        for (let neighbor of unvisitedNeighbors) {
            const newChild = new TreeNode(neighbor);
            currentNode.children.push(newChild);
            queue.push(newChild);
            visited[neighbor] = true;
        }
    }

    return root;
}

function getUnvisitedNeighbors(adjMatrix, node, visited) {
    const neighbors = [];
    for (let i = 0; i < adjMatrix[node].length; i++) {
        if (adjMatrix[node][i] === 1 && !visited[i]) {
            neighbors.push(i);
        }
    }
    return neighbors;
}
//end of the tree

function compare_trees(graph1, graph2) {
    //this function literally just looks to see if the trees i have constructed are exactly the same in structure
    diditwork = true;
    if (diditwork == false){
        return diditwork;
    }

    if (graph1.length == graph2.length){
        for (var child = 0; child < graph1.length; child++){
            var num_children1 = graph1[child].children.length;
            var num_children2 = graph2[child].children.length;
            if (num_children1 != 0 && num_children2 != 0){
                if(num_children1 == num_children2){
                    for (var i = 0; i < num_children1; i++){
                        diditwork = compare_trees(graph1[child].children, graph2[child].children)
                    }
                }else{
                    return false;
                }
            }
        }
    }else{
        return false;
    }

    return diditwork;
}

function are_isomorphic(graph1, graph2) {
    //Isomorphism need to:
    //must have same count of verticies of same degree
    //must have same number of verticies and edges
    if (graph1.length != graph2.length && graph1[0].length != graph2[0].length){
        return false;
    }

    const graph1_node_Queue = new PriorityQueue();
    const graph2_node_Queue = new PriorityQueue();
    //assemble a priority que containing number of connections per node
    for (var i = 0; i < graph1.length; i++){
        var num_connections1 = 0;
        var num_connections2 = 0;
        for (var j = 0; j < graph1.length; j++){
            if (graph1[i][j] > 0){
                num_connections1++;
            }
            if (graph2[i][j] > 0){
                num_connections2++;
            }
        }
        graph1_node_Queue.enqueue(i, num_connections1);
        graph2_node_Queue.enqueue(i, num_connections2);
    }

    var trees_graph1 = construct_tree(graph1, graph1_node_Queue);
    var trees_graph2 = construct_tree(graph2, graph2_node_Queue);
    
    return compare_trees(trees_graph1, trees_graph2);;
}