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


// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// function PCard(props) {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <Grid item key={props.product.id} xs={12} sm={6} md={4}>
//         <Card className={classes.card}>
//           <CardMedia
//             className={classes.cardMedia}
//             image={props.product.image_url}
//             title={props.product.name}
//           />
//           <CardContent className={classes.cardContent}>
//             {/* <Typography gutterBottom variant="h5" component="h4">
//               {props.product.title}
//             </Typography> */}
//             <Typography variant="h5" gutterBottom>
//               {props.product.title}
//             </Typography>
//             <Typography>
//               {props.product.brand}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small" color="primary">
//               View
//             </Button>
//             <Button size="small" color="primary">
//               Edit
//             </Button>
//           </CardActions>
//         </Card>
//       </Grid>
//     </React.Fragment>
//   )
// }
// export default PCard

const useStyles = makeStyles((theme) => ({
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: {width: 300, height: 300, marginBottom: 10},
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
}));

function PCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item key={props.product.id} xs={12} sm={6} md={4}>
        <Card className={classes.container}>
          <CardMedia
            className={classes.image}
            image={props.product.image_url}
            title={props.product.name}
          />
          <CardContent className={classes.cardContent}>
            {/* <Typography gutterBottom variant="h5" component="h4">
              {props.product.title}
            </Typography> */}
            <Typography variant="h5" gutterBottom>
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
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
export default PCard