/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (i < length - 1) {
        node.next = queue[0];
      }
      //下一层节点进队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root
};
// @lc code=end

