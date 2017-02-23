/**
 * @file 二叉树
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 二叉树class
 */
export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 节点
   * @param key 节点值
   * @return {{key: *, left: null, right: null}}
   * @private
   */
  _Node(key) {
    return {
      key,
      left : null,
      right: null
    }
  }

  /**
   * 插入节点
   * @param node 父节点
   * @param new_node 新节点
   * @private
   */
  _insertNode(node, new_node) {
    if (new_node.key < node.key) {
      if (node.left === null) {
        node.left = new_node;
      } else {
        this._insertNode(node.left, new_node);
      }
    } else {
      if (node.right === null) {
        node.right = new_node;
      } else {
        this._insertNode(node.right, new_node);
      }
    }
  }

  /**
   * 中序遍历
   * @param node 节点
   * @param {function} callback 回调函数
   * @private
   */
  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 前序遍历
   * @param node 节点
   * @param {function} callback 回调函数
   * @private
   */
  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后续遍历
   * @param node 节点
   * @param {function} callback 回调函数
   * @private
   */
  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /**
   * 返回节点最小值
   * @param node 节点
   * @return {*}
   * @private
   */
  _minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key
    }
    return null;
  }

  /**
   * 返回节点最小值
   * @param node 节点
   * @return {*}
   * @private
   */
  _findMinNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node
    }
    return null;
  }

  /**
   * 返回节点最大值
   * @param node 节点
   * @return {*}
   * @private
   */
  _maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  /**
   * 搜索节点
   * @param node 节点
   * @param key 节点值
   * @return {boolean}
   * @private
   */
  _searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else if (key > node.key) {
      return this._searchNode(node.right, key);
    } else {
      return true;
    }
  }

  /**
   * 移除节点
   * @param node 节点
   * @param key 节点值
   * @return {*}
   * @private
   */
  _removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
      return node;
    } else {
      // 第一种情况——一个叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 第二种情况——只有一个子节点的节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 第三种情况——有两个子节点的节点
      let aux    = this._findMinNode(node.right);
      node.key   = aux.key;
      node.right = this._removeNode(node.right, aux.key);
      return node;
    }
  }

  /**
   * 插入节点
   * @param key 节点值
   */
  insert(key) {
    let new_node = this._Node(key);

    if (this.root === null) {
      this.root = new_node;
    } else {
      this._insertNode(this.root, new_node);
    }
  }

  /**
   * 中序遍历
   * @param {function} callback 回调函数
   */
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  /**
   * 前序遍历
   * @param {function} callback 回调函数
   */
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback)
  }

  /**
   * 后序遍历
   * @param {function} callback 回调函数
   */
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  /**
   * 返回节点最小值
   * @return {*}
   */
  min() {
    return this._minNode(this.root);
  }

  /**
   * 返回节点最大值
   * @return {*}
   */
  max() {
    return this._maxNode(this.root);
  }

  /**
   * 搜索节点，返回节点是否存在
   * @param key 节点值
   * @return {boolean}
   */
  search(key) {
    return this._searchNode(this.root, key);
  }

  /**
   * 移除节点
   * @param key 节点值
   */
  remove(key) {
    this.root = this._removeNode(this.root, key);
  }
}