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
import Chip from '@mui/material/Chip';
import { Context } from '../api';

class RequestForm extends React.Component {
  constructor(props) {
    super(props)

    
    this.state  = {
        contacts: []
    }
}

componentDidMount () {
    this.context.request('/tags', {
        method: 'get',
      })
      .then(function (response) {
        // handle success
        console.log(response);
        this.setState({contacts:response.data})
      }.bind(this))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
  render() {
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
                <Typography component="h1" variant="h5">
                  Request Title
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Request title"
                    name="title"
                    autoFocus
                  />
                <Typography component="h1" variant="h5">
                  Description
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="description"
                  />
                <Typography component="h1" variant="h5">
                  Skills
                </Typography>

                {chipData.map((data) => {
                let icon;

                return (
                  <ListItem key={data.key}>
                    <Chip
                      icon={icon}
                      label={data.label}
                    />
                  </ListItem>
                  );
                })}

              </Box>
            </Container>
          )}
        </Context.Consumer>
    );
  }
}

export default withRouter(RequestForm)