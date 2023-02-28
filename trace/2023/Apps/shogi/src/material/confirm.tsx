import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

interface IConfirmProps {
  title: string,
  message: string,
  open: boolean,
  handleYes: () => void,
  handleNo: () => void,
}

export default function Confirm(props: IConfirmProps) {
  return (
    <div>
      <Dialog
        disableEscapeKeyDown
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleYes} color="primary">はい</Button>
          <Button onClick={props.handleNo} color="primary">いいえ</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}