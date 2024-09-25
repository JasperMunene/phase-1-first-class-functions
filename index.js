function receivesAFunction(callback) {
    callback()
}

function sayHello() {
    console.log('Hello')
}

const returnsANamedFunction = function () {
    return function greeting () {
        console.log('Hi guys')
    }
}

const returnsAnAnonymousFunction = function () {
    return () => {
        console.log('Bye')
    }
}