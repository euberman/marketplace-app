import React from 'react';

// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: 150, height: 150, margin: 'auto', padding:5
  },
  cardContent: {
    flexGrow: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  description: {color: '#b1b1b1', marginBottom: 10},
  price: {
    color: '#7de3bb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notInStock: {textAlign: 'center'},
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function ProductCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item key={props.product.id} xs={12} sm={6} md={2}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.product.image_url}
            title={props.product.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle1" component="h4">
              {props.product.title}
            </Typography>
            <Typography>
              {props.product.brand}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
export default ProductCard;