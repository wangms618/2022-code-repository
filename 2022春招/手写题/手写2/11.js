let arr = [0, 1, 2, 3, 4, 5, 6, 1, 1, 2, 2, 3, 3, 7]

function uniqueArray(array) {
    return array.filter((item, index) => array.indexOf(item) === index)
}

console.log(uniqueArray(arr));

console.log([...new Set(arr)]);