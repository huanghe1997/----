/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let subResult = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      subResult.push(node.val);
      //下一层加入队列
      for (let item of node.children) {
        item && queue.push(item);
      }
    }
    result.push(subResult);
  }
  return result;
};
// @lc code=end

