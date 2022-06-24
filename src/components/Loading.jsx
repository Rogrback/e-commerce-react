import React from 'react';
// import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import '../css/Loading.css'

export const Loading = () => {
  return (
    <div className='divPadre'>
        <div className='divHijo'>
            <Spinner color='dark'/>
        </div>        
    </div>
)
      
}
