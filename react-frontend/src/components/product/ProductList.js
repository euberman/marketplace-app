import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ProductCard from './ProductCard'


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


function ProductList() {
  const classes = useStyles();
  const products = useSelector(state => state.products.allProducts)

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Grid container spacing={3}>
        {
          products.map(item => <ProductCard product={item} key={item.id} />)
        }
      </Grid>
    </React.Fragment>
  );
}
export default ProductList