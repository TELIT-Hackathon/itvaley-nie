import * as React from 'react';
import { Typography } from '@mui/material';
import { Context } from '../api';
import { Button } from '@mui/material';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {
        return <Context.Consumer>
            {api => <>
                <Typography>{JSON.stringify(api.user)}</Typography>
                <Button onClick={api.logout}>LOGOUT</Button>
            </>}
        </Context.Consumer>;
    }
}