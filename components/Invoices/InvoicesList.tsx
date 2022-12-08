import { Stack } from '@mui/material'
import React from 'react'
import { Invoice } from '../../lib/interfaces'
import InvoiceCard from './InvoiceCard'

type Props = {
  invoices: Invoice[]
}

const InvoicesList = ({invoices}: Props) => {
  return (
    <Stack gap={2}>
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice._id.toString()} invoice={invoice}/>
      ))}
    </Stack>
  )
}

export default InvoicesList
