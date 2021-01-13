/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

const bstFromPreorder = pre => {
  const fill = (root, val) => {
    if (val < root.val) {
      if (!!root.left) {
        fill(root.left, val);
      } else {
        root.left = new TreeNode(val);
      }
    } else {
      if (!!root.right) {
        fill(root.right, val);
      } else {
        root.right = new TreeNode(val);
      }
    }
  }

  let root = new TreeNode(pre[0]);
  for (let val of pre) {
    fill(root, val);
  }
  
  return root;
};

const test = (input, expected) => {
  console.log();
  console.log(input);
  let result = bstFromPreorder(input)
  console.log(result === expected ? "PASSED" : "FAILED", result)
};

test([8,5,1,7,10,12], [8,5,10,1,7,null,12])