/**
 * @file 队列
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 队列class
 */
export default class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * 向队列尾部添加一个元素
   * @param element 元素
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * 移除队列最前面的元素，并返回被移除的元素
   * @return {*}
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * 返回队列中第一个元素
   * @return {*}
   */
  front() {
    return this.items[0];
  }

  /**
   * 判断队列中是否有元素
   * @return {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 移除队列所有元素
   */
  clear() {
    this.items = [];
  }

  /**
   * 返回队列里的元素个数
   * @return {Number}
   */
  size() {
    return this.items.length;
  }

  /**
   * 打印队列
   */
  print() {
    console.log(this.items);
  }
}