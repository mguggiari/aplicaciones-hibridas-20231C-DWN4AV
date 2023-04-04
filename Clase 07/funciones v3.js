// una funcion asincronica, al ser llamada retorna una promesa
async function A() {
    console.log("A")
    return 5
}

async function B() {
    console.log("B")
    return 6
}

async function C() {
    console.log("C")
    return 7
}

async function D() {
    console.log("D")
    return 8
}

async function Sum() {
    let suma = 0
    return A()
        .then(function (data) {
            suma += data
            return B()
        })
        .then(function (data) {
            suma += data
            return C()
        })
        .then(function (data) {
            suma += data
            return D()
        })
        .then(function (data) {
            suma += data
            return suma
        })
}


async function Sum2() {
    let suma = 0
    suma += await A()
    suma += await B()
    suma += await C()
    suma += await D()
    return suma
}

