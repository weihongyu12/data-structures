/**
 * @file 图
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

import Queue from './queue';

/**
 * 图class
 */
export default class Graph {
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

  /**
   * 初始化节点颜色
   * @return {Array}
   * @private
   */
  _initializeColor() {
    let color = [];

    for (let i = 0; i < this.vertices.length; i++) {
      color[vertices[i]] = 'white';
    }

    return color;
  }

  /**
   * 遍历未访问的节点
   * @param u 节点
   * @param color 颜色
   * @param {function} callback 回调函数
   * @private
   */
  _dfsVisit(u, color, callback) {
    color[u] = 'grey';

    if (callback) {
      callback(u);
    }

    const neighbors = this.adjList.get(u);

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];

      if (color[w] === 'white') {
        this._dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
  }

  /**
   * 广度优先搜索
   * @param v 开始遍历的顶点
   * @param {function} callback 回调函数
   */
  bfs(v, callback) {

    let queue = new Queue();
    let color = this._initializeColor();

    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u           = queue.dequeue();
      const neighbors = this.adjList.get(u);

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
   * 深度优先算法
   * @param {function} callback 回调函数
   */
  dfs(callback) {
    let color = this._initializeColor();

    for (let i = 0; i < this.vertices.length; i++) {

      if (color[vertices[i]] === 'white') {
        this._dfsVisit(vertices[i], color, callback);
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