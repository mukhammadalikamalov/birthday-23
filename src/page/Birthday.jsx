import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const CountDown = ({ countdownData, name }) => {
    const { days, hours, minutes, seconds, isItBday } = countdownData;

    if (isItBday) {
        return (
            <Typography variant="h2" sx={{ color: '#ffffff', mb: 3 }}>
                Happy Birthday, {name}!
            </Typography>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                mb: 3,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#282c34',
                    color: '#ffffff',
                    padding: 2,
                    borderRadius: 2,
                    minWidth: '60px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4">{days}</Typography>
                <Typography variant="body2">Days</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#282c34',
                    color: '#ffffff',
                    padding: 2,
                    borderRadius: 2,
                    minWidth: '60px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4">{hours}</Typography>
                <Typography variant="body2">Hours</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#282c34',
                    color: '#ffffff',
                    padding: 2,
                    borderRadius: 2,
                    minWidth: '60px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4">{minutes}</Typography>
                <Typography variant="body2">Minutes</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#282c34',
                    color: '#ffffff',
                    padding: 2,
                    borderRadius: 2,
                    minWidth: '60px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4">{seconds}</Typography>
                <Typography variant="body2">Seconds</Typography>
            </Box>
        </Box>
    );
};

const Birthday = ({ name, day, month }) => {
    const [state, setState] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        isItBday: false,
    });

    if (name === undefined || day === undefined || month === undefined) {
        name = 'Diyor';
        day = 8;
        month = 12;
    }

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    const isItBday = currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    useEffect(() => {
        const countdown = () => {
            const dateAtm = new Date();

            let birthdayDay = new Date(currentYear, month - 1, day);
            if (dateAtm > birthdayDay) {
                birthdayDay = new Date(currentYear + 1, month - 1, day);
            } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
                birthdayDay = new Date(currentYear, month - 1, day);
            }

            const currentTime = dateAtm.getTime();
            const birthdayTime = birthdayDay.getTime();

            const timeRemaining = birthdayDay - currentTime;

            let seconds = Math.floor(timeRemaining / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;

            setState((prevState) => ({
                ...prevState,
                seconds,
                minutes,
                hours,
                days,
                isItBday,
            }));
        };

        const intervalId = setInterval(() => {
            if (!isItBday) {
                countdown();
            } else {
                setState((prevState) => ({
                    ...prevState,
                    isItBday: true,
                }));
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentYear, day, month, isItBday]);

    const birth = new Date(currentYear, month - 1, day);

    const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let monthBday = monthName[birth.getMonth()];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                color: '#ffffff',
                textAlign: 'center',
                padding: 3,
                borderRadius: '20px',
                marginLeft: '450px',
            }}
        >
            <Box sx={{ display: 'flex', mb: 10 }}>
                <Typography variant="h3" sx={{ color: '#7F78D2', mr: 1 }}>
                    Diyor's
                </Typography>
                <Typography variant="h3" sx={{ color: '#7F78D2' }}>
                    Birthday
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                    fontFamily: 'sans-serif'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#413C69',
                        color: '#ffffff',
                        padding: 2,
                        borderRadius: 2,
                        minWidth: '60px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">{state.days}</Typography>
                    <Typography variant="body2">Days</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#413C69',
                        color: '#ffffff',
                        padding: 2,
                        borderRadius: 2,
                        minWidth: '60px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">{state.hours}</Typography>
                    <Typography variant="body2">Hours</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#413C69',
                        color: '#ffffff',
                        padding: 2,
                        borderRadius: 2,
                        minWidth: '60px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">{state.minutes}</Typography>
                    <Typography variant="body2">Minutes</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#413C69',
                        color: '#ffffff',
                        padding: 2,
                        borderRadius: 2,
                        minWidth: '60px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">{state.seconds}</Typography>
                    <Typography variant="body2">Seconds</Typography>
                </Box>
            </Box>
            {!state.isItBday && (
                <>
                    <Typography variant="h6" sx={{ mt: 3, color: '#7F78D2' }}>
                        Birth Date: {day} {monthBday} {currentYear}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            Github
                        </button>
                    </Box>
                    <Link to="/generate">
                        <Button
                            variant="contained"
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
                            Generate Here
                        </Button>
                    </Link>
                </>
            )}
        </Box>
    );
};

export default Birthday;
