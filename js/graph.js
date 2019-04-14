// 字典 Dirctionary

class Dirctionary {
    constructor(){
        this.items = new Map();
    }
    set(key,value){
        this.items.set(key,value);
    }
    get(key){
        return this.items.get(key);
    }
    remove(key){
        this.items.delete(key);
    }
    has(key){
        return this.items.has(key);
    }
    size(){
        return this.items.size();
    }
    clear(){
        this.items = new Map();
    }
    values(){
        const arr = []
        for(let key of this.items.keys()){
          arr.push(this.items.get(key));
        }
        return arr;
    }

}
// -------------------------Graph--------------------------
// 数据结构 图
class Graph {
  constructor() {
  	this.vertices = [];
  	this.adjList = new Dirctionary();
  }
  addVertex(v){
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v,w){
  	this.adjList.get(v).push(w);
  	this.adjList.get(w).push(v);
  }
  toString() {
  	  let s = '';
    for (let i=0; i<this.vertices.length; i++){
        s += this.vertices[i] + ' -> ';
        let neighbors = this.adjList.get(this.vertices[i]);
        for (let j=0; j<neighbors.length; j++){
            s += neighbors[j] + ' ';
        }
        s += '\n';
    }
    return s;
  }
}

// 添加测试图的数据
let graph = new Graph();
let myVertices = ['A','B','C','D','E','F','G','H','I'];
for (let i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString()); // 邻接表

