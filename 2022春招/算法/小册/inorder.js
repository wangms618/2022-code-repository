//  左、根、右
var inorderTraversal = function(root) {
    const res = []

    function inorder(root){
        if(!root) return 
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }

    inorder(root)

    return res
};