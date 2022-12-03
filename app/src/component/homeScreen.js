import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import api from "../api"
import axios from 'axios'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

export default function SignUp() {
  
  return (
      <Container component="main" maxWidth="xs" sx={{height: '100%'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
                WELCOME
            </Typography>
            <Stack direction="row" spacing={2}>
            <Link to="/register" relative="path">
                <Button
                variant="contained">Sign Up</Button>
            </Link>
            <Link to="/login" relative="path">
                <Button variant="contained">Sign In</Button>
            </Link>
        </Stack>
        </Box>
      </Container>
  );
}
