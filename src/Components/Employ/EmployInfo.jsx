import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function EmployInfo({ employ, onEdit, DeleteEmploy }) {
    return (
        <>
            <TableRow>
                <TableCell>{employ.id}</TableCell>
                <TableCell>{employ.name}</TableCell>
                <TableCell>{employ.email}</TableCell>
                <TableCell>{employ.phone}</TableCell>
                <TableCell>{employ.company.name}</TableCell>
                <TableCell>{employ.address.city}</TableCell>
                <TableCell>
                    <Button variant='contained' color='success' sx={{ margin: "0 5px" }} onClick={() => onEdit(employ)}>Edit</Button>
                    <Button variant='contained' color='error' sx={{ margin: "0 5px" }} onClick={() => DeleteEmploy(employ.id)}>Delete</Button>
                </TableCell>
            </TableRow>
        </>
    )
}
