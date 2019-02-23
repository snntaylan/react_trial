import React from 'react';

class Product extends React.Component{
    render(){
        return <li>
            <h2>Product Name :{this.props.item.name}</h2>
            <p>Product Description : {this.props.item.description} </p>
        </li>
    }

}
export default Product;