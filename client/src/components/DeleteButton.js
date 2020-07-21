import React from 'react'
import Axios from 'axios'
import { navigate } from '@reach/router'

const DeleteButton = (props) => {
    const {id, getAllProducts, fromOneProduct, setFromOneProduct } = props

    const deleteProduct = (id) => {
        Axios.post(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            if(fromOneProduct){
                navigate("/")
                setFromOneProduct(false)
            }
            else{
                getAllProducts()
            }
        })

    }


    return (
        <div>
            <button onClick={ e => deleteProduct(id)}>Delete Product</button>
        </div>
    )
}

export default DeleteButton
