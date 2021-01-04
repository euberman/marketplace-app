import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router"
// import { Link } from "react-router-dom";
// import {
//     BrowserRouter as useParams
//   } from "react-router-dom";


function ProductPage() {
    let { productId } = useParams();
    const products = useSelector(state => state.products.allProducts)
    // let currentProduct = products.find(prod => prod.id === productId)
    debugger

    return (
        <div>
            <p>Product page renders here</p>
            <p>{productId}</p>
            {/* <p>{currentProduct.title}</p> */}
        </div>
    )

}

export default ProductPage;