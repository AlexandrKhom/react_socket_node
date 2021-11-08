import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  '@media all': {
    maxHeight: 26,
    fontSize: '0.7rem'
  },
}));


export function BasicTable({ financeData }) {


  const [plus, setPlus] = useState(true);

  const isPlus = ()=> {
    setPlus(!plus)
  }

  return (
    <>
      {plus ?
        <Button variant="contained" size="small" onClick={isPlus}>➕</Button> :
        <Button variant="contained" size="small" onClick={isPlus}>➖</Button>}
      {!plus && <TableContainer
        component={ Paper } size={ 'small' }>
        <Table
          sx={ { minWidth: 350 } } aria-label="simple table">
          <TableHead>
            <TableRow
              selected={true}>
              <TableCell><Item>Ticker</Item></TableCell>
              <TableCell align="right"> <Item>Price</Item></TableCell>
              <TableCell align="right"><Item>Change</Item></TableCell>
              <TableCell align="right"><Item>Percent</Item></TableCell>
              <TableCell align="right"><Item>Dividend</Item></TableCell>
              <TableCell align="right"><Item>Yield</Item></TableCell>
              <TableCell align="right"><Item>Time</Item></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { financeData.map((row) => (
              <TableRow
                hover={ true }
                key={ row.ticker }
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }>
                <TableCell
                  component="th" scope="row">
                  <Item>{ row.ticker }</Item>
                </TableCell>
                <TableCell align="right"><Item>{ row.price }</Item></TableCell>
                <TableCell align="right"><Item>{ row.change }</Item></TableCell>
                <TableCell align="right"><Item>{ row.change_percent }</Item></TableCell>
                <TableCell align="right"><Item>{ row.dividend }</Item></TableCell>
                <TableCell align="right"><Item>{ row.yield }</Item></TableCell>
                <TableCell align="right"><Item>{ new Date().toLocaleTimeString() }</Item></TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>}
    </>);
}
