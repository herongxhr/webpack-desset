import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render('helloWorld', document.getElementById('root'))

function readonly(target, key, descriptor) {
    descriptor.writable = false;
}

class Person {
    @readonly PI = 3.14;
}
let p1 = new Person();
p1.PI = 3.15;
console.log(p1)
