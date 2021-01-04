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

    return (
        <div>
            <p>Product page renders here</p>
            <p>{productId}</p>
        </div>
    )

}

export default ProductPage;