/**
 * @file 栈
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 栈class
 */
export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * 添加新元素
   * @param element 元素
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * 移除栈顶元素
   * @return {*}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * 返回栈顶的元素
   * @return {*}
   */
  peek() {
    return this.items[this.items.length - 1]
  }

  /**
   * 判断栈里是否有元素
   * @return {boolean}
   */
  isEmpty(){
    return this.items.length === 0;
  }

  /**
   * 返回栈里的元素个数
   * @return {Number}
   */
  size(){
    return this.items.length;
  }

  /**
   * 移除栈里所有元素
   */
  clear(){
    this.items = [];
  }

  /**
   * 打印栈
   */
  print(){
    console.log(this.items);
  }
}