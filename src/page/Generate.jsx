import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Box, Select, FormControl, InputLabel } from '@mui/material';

const Generate = () => {
    const [name, setName] = useState('');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [link, setLink] = useState('');

    const generateLink = () => {
        setLink(`https:/birthday-chrono.netlify.app/birthday/${name}/${day}/${month}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                backgroundColor: '#35063e',
                color: '#ffffff',
                textAlign: 'center',
                padding: 5,
                borderRadius: "20px",
                marginLeft: "560px"
            }}
        >
            <Typography variant="h4" component="h1" sx={{ color: '#ffffff', mb: 3 }}>
                Generate Here
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    width: '300px',
                }}
            >
                <TextField
                    label="Enter Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    InputLabelProps={{ style: { color: '#ffffff' } }}
                    InputProps={{
                        style: { color: '#ffffff' },
                        notchedOutline: { borderColor: '#ffffff' },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ffffff',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ffffff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ffffff',
                            },
                        },
                    }}
                />
                <TextField
                    label="Enter Day"
                    type="number"
                    variant="outlined"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    InputLabelProps={{ style: { color: '#ffffff' } }}
                    InputProps={{
                        style: { color: '#ffffff' },
                        inputProps: { min: 1, max: 31 },
                    }}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ffffff',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ffffff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ffffff',
                            },
                        },
                    }}
                />
                <FormControl fullWidth sx={{ borderColor: '#ffffff' }}>
                    <InputLabel id="month-label" sx={{ color: '#ffffff' }}>
                        Select Month
                    </InputLabel>
                    <Select
                        labelId="month-label"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        label="Select Month"
                        sx={{
                            color: '#ffffff',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffffff',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffffff',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffffff',
                            },
                        }}
                    >
                        <MenuItem value={1}>January</MenuItem>
                        <MenuItem value={2}>February</MenuItem>
                        <MenuItem value={3}>March</MenuItem>
                        <MenuItem value={4}>April</MenuItem>
                        <MenuItem value={5}>May</MenuItem>
                        <MenuItem value={6}>June</MenuItem>
                        <MenuItem value={7}>July</MenuItem>
                        <MenuItem value={8}>August</MenuItem>
                        <MenuItem value={9}>September</MenuItem>
                        <MenuItem value={10}>October</MenuItem>
                        <MenuItem value={11}>November</MenuItem>
                        <MenuItem value={12}>December</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={generateLink}
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#282c34',
                        marginTop: "10px",
                        '&:hover': {
                            backgroundColor: '#ffffff',
                            color: '#282c34',
                        },
                    }}
                >
                    Generate Link
                </Button>
                {link && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" component="p" sx={{ color: '#ffffff' }}>
                            {link}
                        </Typography>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    mt: 2.5,
                                    backgroundColor: '#ffffff',
                                    color: '#282c34',
                                    '&:hover': {
                                        backgroundColor: '#ffffff',
                                        color: '#282c34',
                                    },
                                }}
                            >
                                Visit Link
                            </Button>
                        </a>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Generate;
