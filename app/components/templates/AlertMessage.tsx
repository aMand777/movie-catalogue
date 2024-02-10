import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

type AlertProps = {
  status: 'error' | 'success' | 'warning' | 'info'
  title: string
  description: string
}

const AlertMessage: React.FC<AlertProps> = ({status, title, description}) => {
  return (
    <>
      <Alert status={status}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </>
  )
}

export default AlertMessage