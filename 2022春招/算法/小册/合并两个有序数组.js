var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while( i >= 0 && j >= 0 ){
        if( nums1[i] < nums2[j] ){
            nums1[k--] = nums2[j--]
        }else{
            nums1[k--] = nums1[i--]
        }
    }
    // 因为是nums1更长，所以不可能出现nums1多余的情况，只需要考虑nums2多余的情况
    while(j>=0){
        nums1[k--] = nums2[j--]
    }
    return nums1
};