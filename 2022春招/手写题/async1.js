function getSomething() {
    return "something";
}
async function testAsync() {
    return Promise.resolve("hello async");
}
async function test() {
    const v2 = await testAsync();
    console.log(v2);
    const v1 = await getSomething();
    console.log(v1);
    console.log(v1, v2);
}

test();
console.log(1);