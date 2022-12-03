import * as React from 'react';
import { Typography } from '@mui/material';
import { Context } from '../api';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {
        return <Context.Consumer>
            {api => (
                <Typography>{JSON.stringify(api.user)}</Typography>
            )}
        </Context.Consumer>;
    }
}