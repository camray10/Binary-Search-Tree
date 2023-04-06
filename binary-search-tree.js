class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
  const newNode = new Node(val);

  if (!this.root) {
    this.root = newNode;
    return this;
  }

  let currentNode = this.root;

  while (currentNode) {
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      }
      currentNode = currentNode.left;
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      }
      currentNode = currentNode.right;
    }
  }
}


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

insertRecursively(val) {
  const newNode = new Node(val);

  if (!this.root) {
    this.root = newNode;
    return this;
  }

  const insertNode = (node, val) => {
    if (val < node.val) {
      if (!node.left) {
        node.left = newNode;
        return this;
      }
      return insertNode(node.left, val);
    } else {
      if (!node.right) {
        node.right = newNode;
        return this;
      }
      return insertNode(node.right, val);
    }
  };

  insertNode(this.root, val);
  return this;
}


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

find(val) {
  let currentNode = this.root;

  while (currentNode) {
    if (currentNode.val === val) {
      return currentNode;
    } else if (val < currentNode.val) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return undefined;
}


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

findRecursively(val) {
  const search = (node, val) => {
    if (!node || node.val === val) {
      return node;
    } else if (val < node.val) {
      return search(node.left, val);
    } else {
      return search(node.right, val);
    }
  };

  const result = search(this.root, val);
  return result ? result : undefined;
}




  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

dfsPreOrder() {
  const visited = [];

  const traverse = (node, visited) => {
    visited.push(node.val);

    if (node.left) {
      traverse(node.left, visited);
    }
    if (node.right) {
      traverse(node.right, visited);
    }
  };

  traverse(this.root, visited);
  return visited;
}


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

dfsInOrder() {
  const visited = [];

  const traverse = (node, visited) => {
    if (node.left) {
      traverse(node.left, visited);
    }

    visited.push(node.val);

    if (node.right) {
      traverse(node.right, visited);
    }
  };

  traverse(this.root, visited);
  return visited;
}


  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

dfsPostOrder() {
  const visited = [];

  const traverse = (node, visited) => {
    if (node.left) {
      traverse(node.left, visited);
    }
    if (node.right) {
      traverse(node.right, visited);
    }

    visited.push(node.val);
  };

  traverse(this.root, visited);
  return visited;
}


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

bfs() {
  const visited = [];
  const queue = [];

  if (this.root) {
    queue.push(this.root);
  }

  while (queue.length > 0) {
    const node = queue.shift();
    visited.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return visited;
}

}

module.exports = BinarySearchTree;
