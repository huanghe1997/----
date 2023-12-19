/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let maxArr = [];
  let queue = [root];
  while (queue.length) {
    let length = queue.length;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (node.val >= max) {
        max = node.val;
      }
      //下一层节点入栈
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    maxArr.push(max);
  }
  return maxArr;
};
// @lc code=end

