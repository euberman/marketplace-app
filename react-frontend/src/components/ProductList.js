import React from 'react';
import { useSelector } from 'react-redux';


import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from './ProductCard';
import Title from '../components/Title';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


function ProductList() {


  const products = useSelector(state => state.products.allProducts)
  
  return (
    <React.Fragment>
      <Title>Products</Title>
      {/* <CssBaseline /> */}
      {
        products.map(item => <ProductCard product={item} key={item.id} />)
      }
      
    </React.Fragment>
  );
}
export default ProductList