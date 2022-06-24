import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pagination } from './Pagination'
import { Loading } from './Loading'

export const HomeProduct = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")   
            .then(res => {
                const { data } = res
                // console.log(data);
                setProducts(data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {loading ? <Loading/> : ""}
            <Pagination data={ products }/>
        </div>
    )
}
