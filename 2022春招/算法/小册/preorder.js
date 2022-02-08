//  根、左、右
var preorderTraversal = function(root) {
    const res = []
    function preorder(root) {
        if(!root) return
        res.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return res
};