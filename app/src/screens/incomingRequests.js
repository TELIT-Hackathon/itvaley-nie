import { List } from "@mui/material";
import React from "react";
import { Context } from "../api";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default class userRequest extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            requests: [
                {
                  title: "random title",
                  description: "random desc",
                  tags: ["javascript", "typescript"],
                  type: "student",
                  amount: 2,
            },
            {
                title: "random titdsadle",
                description: "random dessdadasc",
                tags: ["javascript", "typescript"],
                type: "expert",
                amount: 3,
          }
        ]
        }
    }

    // componentDidMount = () => {
    //     this.context.request('/requests', {
    //         method: 'get',
    //       })
    //       .then(function (response) {
    //         // handle success
    //         console.log(response);
    //         this.setState({requests:response.data})
    //       }.bind(this))
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       })
    // }

    render() {
        console.log(this.state)
        return (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Typography component="h1" variant="h3">
                        Incoming requests
                    </Typography>
                {
                    this.state.requests.map(request => <>
                    <Link to={`/user/incomingRequests/${request.id}`} relative="path">
                        <ListItem requestItem="flex-start">
                            <ListItemText
                            primary={request.title}
                            secondary={request.description}
                            />
                        </ListItem>
                    </Link>
                        <Divider variant="inset" component="li" />
                    </>)
                }
            </List>
        )
    }
}
userRequest.contextType = Context