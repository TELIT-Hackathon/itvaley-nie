import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import api from "../api"
import axios from 'axios'


export default class AlignItemsList extends React.Component {
    constructor(props) {
        super(props)

        
        this.state  = {
            contacts: [
                {
                    name: 'name1',
                    location: 'dakde1',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Asd-web.jpg'
                },
                {
                    name: 'name2',
                    location: 'dakde2',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Asd-web.jpg'
                },
                {
                    name: 'name3',
                    location: 'dakde3',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Asd-web.jpg'
                }
            ]
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `${api.URL}/api/user/contacts`,
            headers: {"Authorization": ""}
          })
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    render() {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    this.state.contacts.map(contact => <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={contact.avatar} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={contact.name}
                            secondary={contact.location}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>)
                }
            </List>
        )
    }
}