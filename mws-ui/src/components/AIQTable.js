import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, parameter) {
  return { name, parameter };
}

const rows = [
  createData('Very Good', "0 - 13"),
  createData("Good", "13.1 - 35"),
  createData("Moderate", "35.1 - 55"),
  createData("Sufficent", "55.1 - 75"),
  createData('Bad', "75.1 - 110"),
  createData('Very Bad', ">= 110.1")
];

export default function AIQTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quality</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.parameter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}