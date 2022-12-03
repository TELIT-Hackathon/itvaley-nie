import { List } from "@mui/material";
import React from "react";

export default class Requests extends React.Component {
    constructor(props){
        super(props)

        
        this.state = {
            requests: []
        }
    }

    render() {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            </List>
        );
    }
  }