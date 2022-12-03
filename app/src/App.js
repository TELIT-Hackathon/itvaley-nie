import './App.css';
import * as React from 'react';
import LogIn from './components/signIn.js';
import SignUp from './components/signUp.js';
import HomeScreen from './components/homeScreen.js';
import User from './User';

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ApiConsumer, {ApiProvider} from './api';

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
						<ApiProvider>
							<Switch>
								<Route path="/home"><HomeScreen/></Route>
								<Route path="/register"><SignUp/></Route>
								<Route path="/login"><LogIn/></Route>
								<Route path="/user"><User/></Route>
								<Route path="*">
									<HomeScreen/>
								</Route>
							</Switch>
						</ApiProvider>
					</BrowserRouter>
				</ThemeProvider>
		
		);
	}
}
