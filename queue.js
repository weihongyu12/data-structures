/**
 * @file 队列
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 队列class
 */
class Queue {
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

/**
 * 优先队列
 * @extends Queue
 */
class PriorityQueue extends Queue {

  /**
   * 返回元素和元素优先度
   * @param element 元素
   * @param {Number} priority 元素的优先度
   * @return {{element: *, priority: *}}
   * @private
   */
  _queueElement(element, priority) {
    return {
      element : element,
      priority: priority
    };
  }

  /**
   * 添加一个元素
   * @param element 元素
   * @param {Number} priority 元素的优先度
   */
  enqueue(element, priority) {
    const queueElement = this._queueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false;

      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}