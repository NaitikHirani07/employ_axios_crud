import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import EmployInfo from './EmployInfo';


export default function Employ({ employs, showAddUserForm, onEdit, DeleteEmploy }) {
    return (
        <>
            <Container>
                <Button variant='contained' sx={{ margin: "10px 0" }} onClick={showAddUserForm}>Add Employ</Button>
                <TableContainer>
                    <Typography variant='h4' align='center' sx={{ margin: "10px 0" }}>Employ Information</Typography>
                    <Table>
                        <TableHead sx={{ backgroundColor: "black" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white" }}>ID</TableCell>
                                <TableCell sx={{ color: "white" }}>Employ Name</TableCell>
                                <TableCell sx={{ color: "white" }}>Employ Email</TableCell>
                                <TableCell sx={{ color: "white" }}>Employ Phone</TableCell>
                                <TableCell sx={{ color: "white" }}>Employ Company</TableCell>
                                <TableCell sx={{ color: "white" }}>Employ City</TableCell>
                                <TableCell sx={{ color: "white" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employs.length > 0 ? (
                                employs.map((employ) => (
                                    <EmployInfo employ={employ} key={employ.id} onEdit={onEdit} DeleteEmploy={DeleteEmploy} />
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <Typography variant='h6' align='center' sx={{ width: '100%', backgroundColor: 'red', padding: "10px 0"}}>
                                            No Employ Register
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}
