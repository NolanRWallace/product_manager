import React, {useState} from 'react'
import Axios from 'axios';

const Form = props => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const submitHandler = e => {
        e.preventDefault()
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

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={ submitHandler } >
                <label htmlFor="title"  >Title: </label>
                <input type="text" name="title" onChange={ e => changeHandler(e)} value={product.title} />
                <br/>
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={ e => changeHandler(e)} value={product.price} />
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={ e => changeHandler(e)} value={product.description}/>
                <br/>
                <input type="submit" value="Submit New Product"/>
            </form>
        </div>
    )
}

export default Form
