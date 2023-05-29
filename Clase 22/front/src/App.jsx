import ProductList from './ProductList'
import 'minireset.css'
import './App.css'
import { useEffect, useState } from 'react'
/**
 * PascalCase - Componentes - Clases
 * camelCase  - Variables - Funciones 
 * snake_case - Variables - Funciones
 * kabab-case - Clases css y etiquetas en html
 * 
 * 
 */

function App(){
    const [products, setProducts] = useState([])

    
    // se ejecuta cuando se monta el componente
    useEffect(()=>{
        fetch('http://localhost:2023/api/products')
            .then(response => response.json())
            .then(data =>{
                setProducts(data) // forzar el render
            })
    }, [])

    // se ejecuta cuando modifican la lista de productos
    useEffect(()=>{

    }, [products])

    


    return (
        <div>
            <h1>Productos</h1>
            <p>El mejor caje a un click de distancia!</p>
            <ProductList list={products} />
        </div>
    )
}

export default App