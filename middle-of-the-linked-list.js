/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// NOTE: top two functions and invocation of those functions at the top of the two solution functions below was not necessary in leetcode version.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mapArrayToNodes(array) {
  head = new ListNode(array[0])

  let lastNode = head
  for (let i = 1; i < array.length; i++) {
      let node = new ListNode(array[i])
      lastNode.next = node
      lastNode = node
  }

  return head
}

// Not 'proper' linkedlist solution, but faster because it doesn't save nodes to memory as it checks for length.

let middleNode = function(head) {
  head = mapArrayToNodes(head)
  let targetLen = Math.ceil(getLength(head)/2);
  return returnAtPosition(head, targetLen);
};

let getLength = function(node) {
  let length = 0;
  while(node.next) {
      length += 1;
      node = node.next;
  }
  return length;
};

let returnAtPosition = function(node, targetLen) {
  for(let i = 0; i < targetLen; i++) {
      node = node.next;
  }
  return node;
};

// // My original solution:

// var middleNode = function(head) {
//     let orig = head
//     head = mapArrayToNodes(head)

//     let slow = head;
//     let fast = head;
  
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     // return slow
// };

console.log(middleNode([1]))
console.log(middleNode([1,2,3,4,5]))
console.log(middleNode([1,2,3,4,5,6]))

