import React from 'react';




function Product({id, title, image}) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-body text-danger">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title">Codigo: {id}</h5>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus!</p>
        <a href="#" className="btn btn-outline-secondary" target="_blank">Go to the Store</a>
      </div>
    </div>
  )
}

export default Product
