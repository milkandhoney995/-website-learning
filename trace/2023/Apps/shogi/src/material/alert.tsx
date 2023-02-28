import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

interface IConfirmProps {
  title: string,
  message: string,
  open: boolean,
  handleClose: () => void,
}

export default function Alert(props: IConfirmProps) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClick={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-line'}}>
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}