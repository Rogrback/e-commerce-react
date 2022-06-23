import React from 'react'
import Product from '../components/Product'
import {Header} from '../components/Header'
import image1 from '../images/image2.jpg'


export default function Home() {

  const productCard = [
    {
      id: '1',
      title: 'Cafe Colombiano',
      image: image1
    },
    {
      id: '2',
      title: 'Cafe Peruano',
      image: image1
    },
    {
      id: '3',
      title: 'Cafe Brasileño',
      image: image1
    }
  ]
  


  return (
    
    <div className="container">
    <Header/>
      <div className="row">
        {
          productCard.map(card => (
            <div className="col-md-4" key={card.id}>
              <Product title={card.title} image={card.image} id={card.id}/>
           </div>
          ))
        }
      </div>
    </div>
  )
}
