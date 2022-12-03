import { List } from "@mui/material";
import React from "react";
import { Context } from "../api";
import RequestCard from "../components/requestCard";

export default class Requests extends React.Component {
    constructor(props){
        super(props)

        
        this.state = {
            requests: []
        }
    }

    componentDidMount = () => {
        this.context.request('/requests', {
            method: 'get',
          })
          .then(function (response) {
            // handle success
            console.log(response);
            this.setState({requests:response.data})
          }.bind(this))
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    render() {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    this.state.requests.map((request,i) => <RequestCard sx={{ maxHeight: 150, }} key={i} request={request}/>)
                }
            </List>
        );
    }
}
Requests.contextType = Context