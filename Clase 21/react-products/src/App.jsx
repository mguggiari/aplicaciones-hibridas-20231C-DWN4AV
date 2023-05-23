import ProductListItem from "./ProductListItem"
import 'minireset.css'
import './App.css'
/**
 * PascalCase - Componentes - Clases
 * camelCase  - Variables - Funciones 
 * snake_case - Variables - Funciones
 * kabab-case - Clases css y etiquetas en html
 * 
 * 
 */
const PRODUCTOS = [
    {
        id: 1, 
        name: "Cafe Expreso",
        price: 450
    },
    {
        id: 2, 
        name: "Cafe Americano",
        price: 350
    },
    {
        id: 3, 
        name: "Cafe Moca",
        price: 480
    },
    {
        id: 4,
        name: "Cafe con leche",
        price: 350
    }
]


function App(){
    return (
        <div>
            <h1>Productos</h1>
            <p>El mejor caje a un click de distancia!</p>
            <ul>
                {PRODUCTOS.map(product => <ProductListItem key={product.id} product={product} />)}
            </ul>
        </div>
    )
}

export default App