var tmp = new Date();

function fn() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
fn(); // undefined