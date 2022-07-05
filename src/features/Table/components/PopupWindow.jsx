import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { popupData } from '../data-table';

const PopupWindow = () => {
  const [rowData, setRowData] = useState({
    value: 1,
    date: new Date(),
    user: 'default user',
    comment: 'new comment',
  });
  const [tableData, setTableData] = useState(popupData);

  const inputsHandler = e => {
    const { value, name } = e.target;

    setRowData({
      ...rowData,
      [name]: name === 'date' ? new Date(value) : value,
    });
  };

  const addRowData = () => {
    setTableData([...tableData, rowData]);
    window.opener.postMessage(rowData.value);
  };

  const { value, date, user, comment } = rowData;

  return (
    <>
      <Typography variant="h4" align="center" sx={{ padding: '20px 0px' }}>
        Popup table
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(({ value, date, user, comment }, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value}</TableCell>
                  <TableCell>{date.toLocaleDateString()}</TableCell>
                  <TableCell>{user}</TableCell>
                  <TableCell>{comment}</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>
                <TextField
                  value={value}
                  name="value"
                  size="small"
                  onChange={inputsHandler}
                  variant="standard"
                  type="number"
                />
              </TableCell>
              <TableCell>
                <input
                  value={date}
                  onChange={inputsHandler}
                  name="date"
                  type="date"
                />
              </TableCell>
              <TableCell>
                <Select
                  variant="standard"
                  value={user}
                  name="user"
                  onChange={inputsHandler}
                >
                  <MenuItem value="max">max</MenuItem>
                  <MenuItem value="rom">rom</MenuItem>
                  <MenuItem value="alex">alex</MenuItem>
                  <MenuItem value="sam">sam</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <TextField
                  value={comment}
                  name="comment"
                  size="small"
                  onChange={inputsHandler}
                  variant="standard"
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <Button
                  sx={{ marginRight: '20px' }}
                  size="small"
                  variant="contained"
                  onClick={addRowData}
                >
                  add
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => window.close()}
                >
                  close
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default PopupWindow;
