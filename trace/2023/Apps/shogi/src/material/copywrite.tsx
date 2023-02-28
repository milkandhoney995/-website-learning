import React from 'react';
import { Typography } from '@mui/material';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

      {2020}
      {'.'}
    </Typography>
  )
}