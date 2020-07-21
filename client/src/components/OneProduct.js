import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const OneProduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => {
            if(res.data.message === "success"){
                setProduct(res.data.results)
            }
        })
            .catch(err => console.log("failed", err))
    }, []);




    return (
        <div>
            <h1>{product.title}</h1>
            <ul>
                <li>
                    <p>${product.price}</p>
                </li>
                <li>
                    <p>{product.description}</p>
                </li>
            </ul>
        </div>
    )
}

export default OneProduct
