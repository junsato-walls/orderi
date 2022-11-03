import React from 'react'
import { useState, useImperativeHandle, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const AlertDialog = (props) => {
    const {open,setOpen,ymd,empNum,name} = props
    const [title, setTitle] = useState('2022年9月 神谷太郎');

    const dialogclose = () => {
        setOpen(false);
    }

    return (
        <div>
          <Dialog
            open={open}
            onClose={dialogclose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            {ymd}{name}          
            </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <div><TextField id="outlined-basic" label="出勤日" variant="outlined"/></div>
            <div><TextField id="outlined-basic" label="出勤ステータス" variant="outlined"/></div>
            <div><TextField id="outlined-basic" label="出勤時間" variant="outlined"/></div>
            <div><TextField id="outlined-basic" label="休憩時間" variant="outlined"/></div>
            <div><TextField id="outlined-basic" label="退勤時間" variant="outlined"/></div>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={dialogclose}>登録</Button>
            <Button onClick={dialogclose} autoFocus>キャンセル</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}
export default forwardRef(AlertDialog)