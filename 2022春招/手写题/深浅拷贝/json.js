function Person(name) {
    this.name = 20
}

const lili = new Person('lili')

let a = {
    data0: '1',
    date1: [new Date('2020-03-01'), new Date('2020-03-05')],
    data2: new RegExp('\\w+'),
    data3: new Error('1'),
    data4: undefined,
    data5: function () {
        console.log(1)
    },
    data6: NaN,
    data7: lili
}

let b = JSON.parse(JSON.stringify(a))
console.log(b);