import React from 'react';

export default function Product(props){
    
    return(
        <div>
            <div>Product Name{props.name}</div>
            <div>product Price{props.price}</div>
            <div>Product Image{props.img}</div>
            
        </div>
    )
}