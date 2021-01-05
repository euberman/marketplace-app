import React from 'react';
import { useSelector } from 'react-redux';

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
  const products = useSelector(state => state.products.allProducts)

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