import './App.css';
import * as React from 'react';
import Dashboard from './component/dashboard';
import Contacts from './component/contactList';
import DashboardContent from './component/dashboard';

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {
        return <>
            <DashboardContent/>
            <Switch>
                <Route path="/user/dashboard"><Dashboard/></Route>
                <Route path="/user/contacts"><Contacts/></Route>
                <Route path="*" element={<Typography>NENI TAKE</Typography>} />
            </Switch>
        </>;
    }
}