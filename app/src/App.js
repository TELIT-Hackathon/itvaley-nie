import './App.css';
import * as React from 'react';
import LogIn from './component/signIn.js';
import SignUp from './component/signUp.js';
import HomeScreen from './component/homeScreen.js';
import User from './User';

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {
		return (
			<ThemeProvider theme={theme}>
				<BrowserRouter className="App">
					<Switch>
						<Route path="/home"><HomeScreen/></Route>
						<Route path="/register"><SignUp/></Route>
						<Route path="/login"><LogIn/></Route>
						<Route path="/user"><User/></Route>
						<Route path="*" element={<Typography>NENI TAKE</Typography>} />
						<Route path="/">
							<a
								className="App-link"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hello madafaka
							</a>
						</Route>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		);
	}
}
