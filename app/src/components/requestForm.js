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
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Context } from '../api';


export default class RequestForm extends React.Component {
  constructor(props) {
    super(props)

    
    this.state  = {
        tags: []
    }
}


componentDidMount () {
    this.context.request('/tags/categories', {
        method: 'get',
      })
      .then(function (response) {
        // handle success
        console.log(response);
        this.setState({tags:response.data})
      }.bind(this))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
  render() {
    const handleSubmit = event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const jsondata = {
        title: data.get('title'),
        description: data.get('description'),
        tags: data.get("tags"),
      };

      const { redirect } = this.context

      this.context.request('/requests',{
        method: 'post',
        data: jsondata
      })
      .then(function (response) {
        // handle success
        console.log(response);
        redirect("/user/requests")
      })
      .catch(function (error) {
        // handle error
        console.log(error);
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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                      multiline
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
                      multiline
                      name="description"
                      label="Description"
                      id="description"
                    />
                  <Typography component="h1" variant="h5">
                    Skills
                  </Typography>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={this.state.tags}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Tags"
                        name="tags"
                        id="tags"
                      />
                      )}
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
RequestForm.contextType = Context