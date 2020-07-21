import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Form from './Form'
import { navigate } from '@reach/router'

const EditProduct = (props) => {
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            setProduct(res.data.results)
        })
        .catch(err => console.log("failed", err))
    }, [])

    const updateProduct = e => {
        Axios.put(`http://localhost:8000/api/products/${product._id}`)
        .then(res => {

            setProduct({
                title: "",
                price: "",
                description: ""
            })
            navigate("/")
        })
        .catch(err => console.log("failed", err))
    }

    return (
        <div>
            <Form data={product} setData={setProduct} submitData={updateProduct} />
        </div>
    )
}

export default EditProduct
