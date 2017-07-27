/**
 * @file 散列表
 * @author weihongyu <weihongyu12@126.com>
 * @version 1.0.0
 */

/**
 * 散列表class
 */
export default class HashTable {
  constructor() {
    this.table = [];
  }

  /**
   * 散列函数
   * @param {string} key 键值
   * @return {number}
   * @private
   */
  _loseloseHashCode(key) {
    let hash = 5381;
    for (let s of key) {
      hash = hash * 33 + s.charCodeAt(0);
    }

    return hash % 1013;
  }

  /**
   * 返回键值对
   * @param {string} key 键值
   * @param value 值
   * @return {{key: *, value: *}}
   * @private
   */
  _valuePair(key, value) {
    return {
      key,
      value,
    };
  }

  /**
   * 向散列表增加一个新的向
   * @param {string} key 键值
   * @param value 值
   */
  put(key, value) {
    let position = this._loseloseHashCode(key);

    if (typeof this.table[position] === 'undefined') {
      this.table[position] = this._valuePair(key, value);
    } else {
      let index = position + 1;
      while (typeof this.table[index] !== 'undefined') {
        index++;
      }
      this.table[index] = this._valuePair(key, value);
    }

  }

  /**
   * 返回根据键值检索到的特定的值
   * @param {string} key 键值
   * @return {*}
   */
  get(key) {
    let position = this._loseloseHashCode(key);

    if (typeof this.table[position] !== 'undefined') {
      if (this.table[position].key === key) {

        return this.table[position].value;
      } else {
        let index = position + 1;

        while (typeof this.table[index] === 'undefined' || this.table[index].key !== key) {
          index++;
        }

        if (this.table[index].key === key) {

          return this.table[index].value;
        }
      }
    } else {

      return undefined;
    }
  }

  /**
   * 根据键值从删列表中移除值
   * @param {string} key 键值
   */
  remove(key) {
    let position = this._loseloseHashCode(key);

    if (typeof this.table[position] !== 'undefined') {
      if (this.table[position].key === key) {
        this.table[position] = undefined;
      } else {
        let index = position + 1;

        while (typeof this.table[index] === 'undefined' || this.table[index].key !== key) {
          index++;
        }

        if (this.table[index].key === key) {
          this.table[index] = undefined;
        }
      }
    }
  }

  /**
   * 打印散列表
   */
  print() {
    for (let [index, element] of this.table.entries()) {
      if (typeof element !== 'undefined') {
        console.log(`${index}-${element.key}:${element.value}`);
      }
    }
  }
}
