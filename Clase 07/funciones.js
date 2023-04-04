// una funcion asincronica, al ser llamada retorna una promesa
async function A() {
    console.log("A")

    let j;

    j = b.j // genera un error porque b no esta definido

    return 5
}
// A()
// console.log("Despues de A")
//console.log(A())

A()
    .then(function (data) {
        console.log("Termino A con exito", data)
    })
    .catch(function (data) {
        console.log("Termino A con error", data.message)
    })
    .finally(function () {
        console.log("Termino A")
    })

console.log("Despues de A")