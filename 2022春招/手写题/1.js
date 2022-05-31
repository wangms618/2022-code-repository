function testAsy(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 3000)
    })
}

function testaa() {
    return '123'
}
async function testAwt() {
    // 这testaa里面没有异步，但是还是会阻塞，先让cug输出
    let result = await testaa();
    console.log(result); // 3秒钟之后出现hello world
    console.log('cuger') // 3秒钟之后出现cug
}
testAwt();
console.log('cug') //立即输出cug