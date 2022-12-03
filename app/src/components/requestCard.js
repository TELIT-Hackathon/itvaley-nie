import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import { Box } from "@mui/system"
import React from "react"

export default class RequestCard extends React.Component {
    render(){
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="requester">
                            R
                        </Avatar>
                    }
                    title={this.props.request.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.request.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}