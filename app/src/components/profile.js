import * as React from 'react';
import { Typography } from '@mui/material';
import { Context } from '../api';
import { Button } from '@mui/material';

import Avatar from '@mui/material/Avatar';
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
import Container from '@mui/material/Container';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {

        const handleSubmit = event => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const jsondata = {
              username: data.get('username'),
              password: data.get('password'),
              title: data.get("title"),
              picture: data.get("picture"),
              firstName: data.get("firstName"),
              lastName: data.get("lastName"),
              location: data.get('location'),
              role: data.get('role'),
            };
      
            const { redirect } = this.context
      
            this.context.register(jsondata)
            .then(function (response) {
              // handle success
              console.log(response);
              redirect("/user/profile")
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
          };

        return <Context.Consumer>
            {api => <>
                <Typography>{JSON.stringify(api.user)}</Typography>
                <Button onClick={api.logout}>LOGOUT</Button>
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
                        <Avatar 
                        sx={{ m: 1, bgcolor: 'secondary.main' }} 
                        src={api.user.picture.thumbnail}>
                        </Avatar>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="title"
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                        defaultValue={api.user.name.title}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                      autoComplete="given-name"
                                      name="firstName"
                                      fullWidth
                                      id="firstName"
                                      label="First Name"
                                      defaultValue={api.user.name.first}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                      fullWidth
                                      id="lastName"
                                      label="Last Name"
                                      name="lastName"
                                      autoComplete="family-name"
                                      defaultValue={api.user.name.last}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                      fullWidth
                                      id="location"
                                      label="Location"
                                      name="location"
                                      defaultValue={api.user.location}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                      fullWidth
                                      id="picture"
                                      label="Avatar"
                                      name="picture"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    fullWidth
                                    disabled
                                    id="role"
                                    name="name"
                                    defaultValue={api.user.role}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    fullWidth
                                    disabled
                                    id="username"
                                    label="Username"
                                    name="username"
                                    defaultValue={api.user.username}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    fullWidth
                                    name="password"
                                    label="New password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                </>}
        </Context.Consumer>;
    }
}
Profile.contextType = Context