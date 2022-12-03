import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from "../api"
import axios from 'axios'
import { Link, withRouter } from "react-router-dom"

import { Context } from '../api';

class RequestForm extends React.Component {
  render() {
    const handleSubmit = (api, event) => {
      event.preventDefault()

      const data = new FormData(event.currentTarget)
      
      const history = this.props.history

      api.login(data.get('username'), data.get('password'))
        .then(() => {
          history.push('/user/dashboard')
        })
    };

    return (
        <Context.Consumer>
          {api => (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                
                <Typography component="h1" variant="h3">
                  Create Request
                </Typography>
                <Box component="form" onSubmit={evt => handleSubmit(api, evt)} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Request title"
                    name="title"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="description"
                  />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Create
                    </Button>
                </Box>
              </Box>
            </Container>
          )}
        </Context.Consumer>
    );
  }
}

export default withRouter(RequestForm)