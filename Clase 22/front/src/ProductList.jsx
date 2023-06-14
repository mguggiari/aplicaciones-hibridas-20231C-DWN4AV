import PropTypes from 'prop-types'
import ProductListItem from "./ProductListItem"
import './ProductList.css'
import { useCallback, useState, useMemo } from 'react'


function ProductList({list}){
    const [filter, setFilter] = useState('')

    const listFilter = useMemo(()=>{
        return list.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
    }, [list, filter] ) 

    const onChangeFilter = useCallback((event) =>{
        setFilter(event.target.value)
    }, [setFilter])

    return (
        <div className='product-list'>
            <form className='product-list__form'>
                Filtro: <input id='filtro' className='product-list__filter' type='text' onChange={onChangeFilter} value={filter} />
            </form>
            <ul className='product-list__list'>
                {listFilter.map(product => <ProductListItem key={product._id} product={product}/>)}
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ProductList