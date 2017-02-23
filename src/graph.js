/**
 * @file 图
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

import Queue from './queue';

/**
 * 图class
 */
class Graph {
  constructor() {
    this.vertices = [];
    this.adjList  = new Map();
  }

  /**
   * 创建顶点
   * @param v
   */
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  /**
   * 添加边
   * @param v
   * @param w
   */
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  _initializeColor() {
    let color = [];

    for (let i = 0; i < this.vertices.length; i++) {
      color[vertices[i]] = 'white';
    }

    return color;
  }

  /**
   * 广度优先搜索
   * @param v
   * @param callback
   */
  bfs(v, callback) {

    let queue = new Queue();
    let color = this._initializeColor();

    queue.enqueue(v);

    while (!queue.isEmpty()) {
      const neighbors = this.adjList.get(u);
      let u           = queue.dequeue();

      color[u] = 'grey';

      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];

        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';

      if (callback) {
        callback(u);
      }
    }
  }

  /**
   * 输出图
   * @return {string}
   */
  toString() {
    let s = '';

    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + '->';
      const neighbors = this.adjList.get(this.vertices[i]);

      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }

    return s;
  }
}

const graph    = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
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

console.log(graph.toString());

const print = function printNode(value) {
  console.log(value)
};
graph.bfs(vertices[0], print());