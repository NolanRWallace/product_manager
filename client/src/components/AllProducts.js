import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Form from './Form'
import { Link } from '@reach/router'
import DeleteButton from './DeleteButton'


const AllProducts = (props) => {
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
                getAllProducts()
            }
        })
    }


    return (
        <div>
            <Form data={product} setData={setProduct} submitData={submitData} />
            <br/>
            <h1>All Products</h1>
            <div style={{textAlign: "Center"}}>
            <table style={{textAlign: "Center", margin: "auto"}}>
                <thead>
                    <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {
                    allProducts.map((prod, i) => 
                    <tr key={i}>
                    <td>
                        <Link to={`product/${prod._id}`}><h4 key={i}>{prod.title}</h4></Link>
                    </td>
                        <p>${prod.price}</p>
                    <td>
                        <p>{prod.description}</p>
                    </td>
                    <td>
                        <Link to={`product/edit/${prod._id}`}><button >Edit Product</button></Link>
                        <DeleteButton id={prod._id} getAllProducts={ getAllProducts } />
                    </td>
                    </tr>
                    )
                }
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default AllProducts
