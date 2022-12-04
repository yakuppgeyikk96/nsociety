
import React, { useContext, useEffect, useState } from 'react'
import { AlertContext } from '../../context/alertContext'
import SnackbarMessage from '../snackbar-message'

const AppWrapper = ({ children }) => {
  const { alert, setAlert } = useContext(AlertContext)
  const [open, setOpen] = useState(false)

  const onClosed = () => {
    setAlert(null);
  }

  useEffect(() => {
    if (alert !== null) {
      setOpen(true);
    }
  }, [alert])

  return (
    <>
      {children}
      {
        alert && (
          <SnackbarMessage
            durationInMs={alert.durationInMs}
            severity={alert.severity}
            open={open}
            message={alert.message}
            onErrorClosed={onClosed}
          />
        )
      }
    </>
  )
}

export default AppWrapper