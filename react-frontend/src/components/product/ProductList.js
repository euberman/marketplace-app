import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from './ProductCard'


const useStyles = makeStyles((theme) => ({
  pList: {
    height: '100%',
    width:'100%',
    display: 'flex',
    flexFlow: 'row wrap',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}));


function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let products = useSelector(state => state.products.allProducts)
  // let [products, setProducts] = useState(prods)
  const prodSortChar = useSelector(state => state.products.sortChar)
  const searchBar = useSelector(state => state.products.searchBarInput)

  if (prodSortChar === 'price'){
    products.sort((a, b) => (a.price > b.price) ? 1 : -1)
  } else if (prodSortChar === 'customer_rating'){
    products.sort((a, b) => (a.customer_rating > b.customer_rating) ? 1 : -1)
  } else if (prodSortChar === 'in_stock'){
    products = products.filter(prod => prod.in_stock)
  } else if (prodSortChar === ''){
    products.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }
  if (searchBar !== ''){
    products = products.filter(prod => prod.title.includes(searchBar))
  }

  return (
    <React.Fragment>
      <Grid container className={classes.pList} spacing={2}>
        {
          products.map(item => <ProductCard product={item} key={item.id} />)
        }
      </Grid>
    </React.Fragment>
  );
}
export default ProductList