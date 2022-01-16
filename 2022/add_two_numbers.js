/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2, carry) {
  if (!(l1 || l2 || carry)) return null;

  var sum = (l1?.val || 0) + (l2?.val || 0) + (carry ? 1 : 0);
  var next = addTwoNumbers(l1?.next, l2?.next, sum > 9);

  return new ListNode(sum % 10, next);
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var newNodeList = arr => [null, ...arr.reverse()].reduce((prev, x) => new ListNode(x, prev));

const tests = [
  {
    input: [newNodeList([2,4,3]), newNodeList([5,6,4])],
    expected: newNodeList([7,0,8]),
  },
  {
    input: [newNodeList([0]), newNodeList([0])],
    expected: newNodeList([0]),
  },
  {
    input: [newNodeList([9,9,9,9,9,9,9]), newNodeList([9,9,9,9])],
    expected: newNodeList([8,9,9,9,0,0,0,1]),
  },
  {
    input: [newNodeList([0]), newNodeList([7,3])],
    expected: newNodeList([7,3]),
  },
];

module.exports = {
  name: 'Add two numbers as linked lists given in reverse order',
  method: addTwoNumbers,
  tests
};
