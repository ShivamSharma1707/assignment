import {
  Checkbox,
  FormControlLabel,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const FormDisplay = ({ userData, deleteUserData }) => {
  const [value, setValue] = React.useState("");
  const [dataSource, setDataSource] = React.useState(userData);
  const [tableFilter, setTableFilter] = React.useState([]);

  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = userData.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  return (
    <Paper>
      <TextField
        type="text"
        placeholder="Search"
        value={value}
        onChange={filterData}
      />
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Mobile No</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.length > 0
            ? tableFilter
                .sort((a, b) => {
                  return a.mobNo - b.mobNo;
                })
                .map((userData) => (
                  <TableRow key={userData.mobNo}>
                    <TableCell align="center">{userData.name}</TableCell>
                    <TableCell align="center">{userData.email}</TableCell>
                    <TableCell align="center">{userData.mobNo}</TableCell>
                    <TableCell align="center">{userData.city}</TableCell>
                    <TableCell align="center">
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="remember"
                            color="primary"
                            onClick={() => deleteUserData(userData.name)}
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))
            : dataSource
                .sort((a, b) => {
                  return a.mobNo - b.mobNo;
                })
                .map((userData) => (
                  <TableRow key={userData.mobNo}>
                    <TableCell align="center">{userData.name}</TableCell>
                    <TableCell align="center">{userData.email}</TableCell>
                    <TableCell align="center">{userData.mobNo}</TableCell>
                    <TableCell align="center">{userData.city}</TableCell>
                    <TableCell align="center">
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="remember"
                            color="primary"
                            onClick={() => deleteUserData(userData.name)}
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
        </TableBody>
      </TableContainer>
    </Paper>
  );
};

export default FormDisplay;
