import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function EmployAdd({ employAdd, UpdateEmploys, editEmploy }) {
    const [employData, setEmployData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: ''
    });

    useEffect(() => {
        if (editEmploy) {
            setEmployData({
                name: editEmploy.name,
                email: editEmploy.email,
                phone: editEmploy.phone,
                company: editEmploy.company.name,
                city: editEmploy.address.city
            });
        } else {
            setEmployData({
                name: '',
                email: '',
                phone: '',
                company: '',
                city: ''
            });
        }
    }, [editEmploy]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployData(prevEmployData => ({
            ...prevEmployData,
            [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        const { name, email, phone, company, city } = employData;
        if (!name || !email || !phone || !company || !city) {
            alert('Please fill all fields');
            return;
        }
        const newUser = {
            name,
            email,
            phone,
            company: { name: company },
            address: { city }
        };
        if (editEmploy) {
            UpdateEmploys({ ...newUser, id: editEmploy.id });
        } else {
            employAdd(newUser);
        }
    };

    return (
        <>
            <Typography variant='h4' align='center' sx={{ margin: "15px 0" }}>
                {editEmploy ? 'Edit Employ' : 'Add Employ'}
            </Typography>
            <Container maxWidth="md">
                <form onSubmit={submit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Employ Name"
                                variant='outlined'
                                name="name"
                                value={employData.name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Employ Email"
                                variant='outlined'
                                name="email"
                                value={employData.email}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Employ Phone"
                                variant='outlined'
                                name="phone"
                                value={employData.phone}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Employ Company"
                                variant='outlined'
                                name="company"
                                value={employData.company}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Employ City"
                                variant='outlined'
                                name="city"
                                value={employData.city}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant='contained' fullWidth>
                                {editEmploy ? 'Update' : 'Submit'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}

