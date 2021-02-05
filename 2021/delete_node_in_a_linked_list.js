/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
*/

// NOTE: There is no straightforward way to write working tests here and still have it work on leetCode, so no tests will be run for this problem. The solution works on the site though.

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

// listNode1 = ListNode(3);
// listNode1.next = [4];

// listNode2 = ListNode(0);
// listNode2.next = [1];

// listNode3 = ListNode(-3);
// listNode3.next = [5,-99];

const tests = [
  // {
  //   input: [listNode1],
  //   expected: null
  // },
  // {
  //   input: [listNode2],
  //   expected: null
  // },
  // {
  //   input: [listNode3],
  //   expected: null
  // }
]

module.exports = {
  name: 'delete node in a linked list',
  method: deleteNode,
  tests
};
