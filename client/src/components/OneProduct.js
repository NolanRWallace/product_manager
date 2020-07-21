import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

const OneProduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })
    const [fromOneProduct, setFromOneProduct] = useState(true)

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
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
                <li>
                    <DeleteButton id={product._id} fromOneProduct={fromOneProduct} setFromOneProduct={setFromOneProduct} />
                </li>
            </ul>
        </div>
    )
}

export default OneProduct
