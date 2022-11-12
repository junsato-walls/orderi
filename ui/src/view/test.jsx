import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function test() {
  const baseURL = 'http://localhost:8000'
  const [UserData, setUserData] = useState([])

  useEffect(() => {
    GetUser()
  }, [])
  //勤怠データ取得
  const GetUser = () => {
    axios.get(baseURL + '/users').then(res => {
      setUserData(res.data)
      console.log(res.data)
    })
  }
  return (
  <>
    <Container maxWidth="xls">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">年齢</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UserData.map((data) => (
                <TableRow>
                  <TableCell align="center">{data.id}</TableCell>
                  <TableCell align="center">{data.name}</TableCell>
                  <TableCell align="center">{data.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  </>
  )
  }
export default test;

