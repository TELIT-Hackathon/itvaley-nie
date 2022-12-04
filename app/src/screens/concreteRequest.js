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

export default class concReq extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            request: 
                {
                  title: "random title",
                  description: "random desc",
                  tags: ["javascript", "typescript"],
                  type: "student",
                  amount: 2,
                  id: "kdashzufgaszfiasgifasgu"
            }
            
        }
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                {/* <Typography component="h1" variant="h3">
                    df{this.props.match.params.id}
                </Typography> */}
                <Typography component="h1" variant="h3">
                    {this.state.request.title}
                </Typography>
                <Typography component="h2" variant="h5">
                    {   
                        JSON.stringify(this.state.request)
                    }
                </Typography>
            </List>
        )
    }
}
concReq.contextType = Context