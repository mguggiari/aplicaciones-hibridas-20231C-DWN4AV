// una funcion asincronica, al ser llamada retorna una promesa
async function A() {
    console.log("A")
    return 5
}

async function B() {
    console.log("B")

    k.a;

    return A()
        .then(function (data) {
            return data * 2
        })
        .catch(function () {
            return 0
        })
}


B()
    .then(function (data) {
        console.log("Termino B con exito", data)
        return data * 2
    })
    .catch(function (data) {
        console.log("Termino B con error", data.message)
        return 1000
    })
    .then(function (data) {
        console.log("Termino B con exito", data)
        return data * 2
    })
