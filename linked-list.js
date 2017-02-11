/**
 * @file 队列
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 链表class
 */
class LinkedList {
  constructor() {
    this.length = 0;
    this.head   = null;
  }

  /**
   * 节点
   * @param element 节点元素
   * @return {{element: *, next: null}}
   * @private
   */
  _Node(element) {
    return {
      element,
      next: null
    }
  }

  /**
   * 向链表尾部添加一个项
   * @param element 元素
   */
  append(element) {
    const node = this._Node(element);
    let current;

    if (this.head === null) { // 列表中的第一个节点
      this.head = node;
    } else {
      current = this.head;
      while (current.next) { // 循环列表，直到找到最后一项
        current = current.next;
      }

      current.next = node; // 找到最后一项，将其next赋值为node，建立链接
    }

    this.length++; // 更新列表的长度
  }

  /**
   * 向链表特定位置插入一个新的项
   * @param position 位置
   * @param element 元素
   * @return {boolean}
   */
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let node    = this._Node(element);
      let current = this.head;
      let previous;
      let index   = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current  = current.next;
        }

        node.next     = current;
        previous.next = node;
      }

      this.length++;

      return true;
    } else {

      return false;
    }
  }

  /**
   * 从链表特定位置移除
   * @param position 位置
   * @return {*}
   */
  removeAt(position) {
    if (position > -1 && position < this.length) { // 检查越界值
      let current = this.head;
      let previous;
      let index   = 0;

      if (position === 0) { // 移除第一项
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current  = current.next;
        }

        previous.next = current.next; // 将previous与current的下一项链接起来：跳过current，从而移除它
      }

      this.length--;

      return current.element;
    } else {

      return null;
    }
  }

  /**
   * 从链表中移除一项
   * @param element 元素
   * @return {*}
   */
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * 返回元素在链表中的位置
   * @param element 元素
   * @return {number} 如果没有元素返回-1
   */
  indexOf(element) {
    let current = this.head;
    let index = -1;

    while (current){
      if (element === current.element){
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  /**
   * 返回链表是否为空
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 返回链表的元素个数
   * @return {number}
   */
  size(){
    return this.length;
  }

  /**
   * 返回链表的头
   * @return {null|*|{element: *, next: null}}
   */
  getHead(){
    return this.head;
  }

  /**
   * 返回链表
   * @return {string}
   */
  toString() {
    let current = this.head;
    let string = '';

    while (current){
      string = current.element;
      current = current.next;
    }

    return string;
  }

  /**
   * 打印链表
   */
  print(){
    console.log(this.toString());
  }
}