import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import api from "../api"
import axios from 'axios'
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';
import {Link} from "react-router-dom";

import { Context } from '../api';

export default class AlignItemsList extends React.Component {
    constructor(props) {
        super(props)

        
        this.state  = {
            contacts: []
        }
    }

    componentDidMount () {
        this.context.request('/user/all', {
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
        console.log(this.state)
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    this.state.contacts.map(contact => <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={contact.username}
                            secondary={contact.location}
                            />
                            <ListItemIcon>
                                <Link to="/message">
                                    <Button variant="contained" endIcon={<SendIcon />}>
                                        
                                    </Button>
                                </Link>
                            </ListItemIcon>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>)
                }
            </List>
        )
    }
}
AlignItemsList.contextType = Context