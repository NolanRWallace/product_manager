import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Form from './Form'
import { Link } from '@reach/router'


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })



    const getAllProducts = () => {
        Axios.get("http://localhost:8000/api/products/")
            .then(res => {
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("Failed", err))
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const submitData = e => {
        Axios.post("http://localhost:8000/api/products/create", product)
        .then( res => {
            if(res.data.message === 'success'){
                setProduct({
                    title: "",
                    price: "",
                    description: ""
                })
            }
    })
}

    return (
        <div>
            <Form data={product} setData={setProduct} submitData={submitData} />
            <br/>
            <h1>All Products</h1>
            <ul>
                {
                    allProducts.map((prod, i) => 
                    <Link to={`product/${prod._id}`} ><h4 key={i}>{prod.title}</h4></Link>
                    )
                }
            </ul>
        </div>
    )
}

export default AllProducts
