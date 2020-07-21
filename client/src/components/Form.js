import React, {useState} from 'react'
import Axios from 'axios';

const Form = props => {
    const {data, setData, submitData} = props
    

    const submitHandler = e => {
        e.preventDefault()
        submitData();
        }
        

    

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={ submitHandler } >
                <label htmlFor="title"  >Title: </label>
                <input type="text" name="title" onChange={ e => changeHandler(e)} value={data.title} />
                <br/>
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={ e => changeHandler(e)} value={data.price} />
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={ e => changeHandler(e)} value={data.description}/>
                <br/>
                <input type="submit" value="Submit New Product"/>
            </form>
        </div>
    )
}

export default Form
