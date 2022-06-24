import React from 'react'
import { HomeProduct } from '../components/HomeProduct'
import { Header } from '../static/Header';

export const Home = () => {
  return (
    <div className="container">
      <Header/>
      <div className="row">
        <HomeProduct/>
      </div>
    </div>
  )
}
