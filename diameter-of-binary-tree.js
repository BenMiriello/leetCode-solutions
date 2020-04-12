//   Diameter of Binary Tree
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

//  Definition for a binary tree node.
function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countDiameter = root => {
  if (!root) return 0;

  return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
};

const diameterOfBinaryTree = root => {
  if (!root) return 0;

  const center = countDiameter(root.left) + countDiameter(root.right);
  const left = diameterOfBinaryTree(root.left);
  const right = diameterOfBinaryTree(root.right);
  console.log(root.val, 'center', center, 'left', left, 'right', right)

  return Math.max(center, left, right);
};

let root = new TreeNode(1)
level1Left = new TreeNode(2)
root.left = level1Left
root.right = new TreeNode(3)
level1Left.left = new TreeNode(4)
level1Left.right = new TreeNode(5)

//           1
//          / \
//         2   3
//        / \     
//       4   5   

// diameterOfBinaryTree(root)

root = new TreeNode(1)

level1Left = new TreeNode(2)
root.left = level1Left
root.right = new TreeNode(3)

let level1aLeft = new TreeNode(4)
let level1aRight = new TreeNode(5)
level1Left.left = level1aLeft
level1Left.right = level1aRight

let level2aLeft = new TreeNode(6)
let level2bLeft = new TreeNode(7)
let level2bRight = new TreeNode(8)
level1aLeft.left = level2aLeft
level1aRight.left = level2bLeft
level1aRight.right = level2bRight

let level3bLeft = new TreeNode(9)
level2bLeft.left = level3bLeft

//           1
//          / \ 
//         2   3
//        / \     
//       4   5   
//      /   / \
//     6   7   8
//        /
//       9

diameterOfBinaryTree(root)

