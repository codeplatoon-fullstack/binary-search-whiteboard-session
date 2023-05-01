// first I will create a Tree data structure though this
// will generally be provided by the LeetCode problem

class Tree {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const Leaf = (value) => new Tree(value, null, null);

// recreate the tree from the markdown example
const exampleTree = new Tree(
    32,
    new Tree(
        16,
        new Tree(6, null, Leaf(8)),
        Leaf(28)
    ),
    new Tree(
        60,
        new Tree(48, Leaf(38), null)
    )
);

// takes a tree, returns the matching subtree if found, else null
function bstSearch(valToMatch, tree) {
    let currentNode = tree;
    let stepCount = 0;

    // will terminate when hits non-existent child, i.e. null
    while (currentNode) {
        stepCount++;

        // match case
        if (valToMatch === currentNode.value) {
            console.log(`search for ${valToMatch} succeeded in ${stepCount} steps`);
            return currentNode;
            // if less than reduce search set to left child of tree
        } else if (valToMatch < currentNode.value) {
            currentNode = currentNode.left;
            // if greater than reduce search set to right child of tree
        } else {
            currentNode = currentNode.right;
        }
    }

    console.log(`search for ${valToMatch} failed in ${stepCount} steps`);
    return null;
}

bstSearch(32, exampleTree);
bstSearch(6, exampleTree);
bstSearch(38, exampleTree);
bstSearch(7, exampleTree);

// I would do a 'limit breaker' example but it's difficult to make a large
// tree without creating some array => binary tree transformer
// creating an array => binary tree transformer is a great algorithms/coding challege