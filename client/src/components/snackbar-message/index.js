import React, { useEffect, useState } from 'react'
import { Alert, Snackbar } from '@mui/material';

const SnackbarMessage = ({ durationInMs, open, message, severity, onErrorClosed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    onErrorClosed();
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(open);
  }, [open])

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={durationInMs}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <Alert sx={{ paddingInline: '1rem' }} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarMessage