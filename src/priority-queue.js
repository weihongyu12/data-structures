/**
 * @file 优先队列
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

import Queue from './queue';

/**
 * 优先队列
 * @extends Queue
 */
export default class PriorityQueue extends Queue {

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
      priority: priority,
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
      this.items.push(queueElement);
    } else {
      let added = false;

      for (let [index, element] of this.items) {
        if (queueElement.priority < element.priority) {
          this.items.splice(index, 0, queueElement);
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