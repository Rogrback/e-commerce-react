import React from 'react'
import { axios } from 'axios'
import { useState, useEffect } from 'react'

export const BtnDetailProduct = (sendIdProduct) => {

    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${id}`)
            .then(res => {
                const { data } = res
                console.log(data);
                setId(data)
                // data.map((dat, i) => (
                //     dat[i] <= 120 
                // ))
                // console.log(data[0]._id);
                // console.log(data[0].product_name);
                // console.log(data[0].description);
                // console.log(data[0].price);
                // console.log(data[0].category);
                // setProducts(data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    // const handleChange = (e) => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({id});
    }


    return (
        <form onSubmit={handleSubmit}>
            <button value={id} onChange={(e) => sendIdProduct(id)} >Buscar</button>
        </form>
  )
}
