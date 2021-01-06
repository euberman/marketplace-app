import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../components/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

let rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function OrdersList() {
  const classes = useStyles();
  const currentUser = useSelector(state => state.user.currentUser)
  const data = useSelector(state => state.order.allOrders)

  rows = []

  data.forEach(order => {
    let name = [order.user.firstname, order.user.lastname].join(' ')

    let amount = 0

    const date = order.created_at.split("T")
    order.products.forEach(prod => amount += parseFloat(prod.price))
    amount = Math.round(amount * 100) / 100

    rows.push(createData(order.id, date[0], name, order.address, order.payment, amount))
  })

  rows = rows.filter(row => row.name === [currentUser.firstname, currentUser.lastname].join(' '))

  let rowsBackup = rows
  var d = new Date()
  rows = rows.filter(row => row.date.split("-")[2] === d.toString().split(" ")[2])

  const showMoreRows = (event) => {
    event.preventDefault()
    rows = rowsBackup
  }

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={(event) => showMoreRows(event)}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
export default OrdersList