function TreeRecover(root) {
    // 边界条件
    if (!root) return

    function search(val, root) {
        if (!root) return
        let left = root.left ? search(root.left.val, root.left) : null
        let right = root.right ? search(root.right.val, root.right) : null
        // 如果当前节点不是正常的，把这个值拿到
        // 再去找另外一个节点
        if (left && right && left.val > val && right.val < val) {
            let temp = left.val
            left.val = right.val
            right.val = temp
            return root
        }
        if (left && left.val > val) {
            root.val = left.val
            left.val = val
        }
        if (right && right.val < val) {
            root.val = right.val
            right.val = val
        }
        return root
    }
    return search(root.val, root)

}