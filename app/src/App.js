import './App.css';
import * as React from 'react';
import LogIn from './components/signIn.js';
import SignUp from './components/signUp.js';
import HomeScreen from './components/homeScreen.js';
import User from './User';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ApiProvider, Context } from './api'

const theme = createTheme()

class Sw extends React.Component {
	render() {
		// return !this.context.loggedIn() ? (
		// 	<Switch>
		// 		<Route path="/home"><HomeScreen/></Route>
		// 		<Route path="/register"><SignUp/></Route>
		// 		<Route path="/login"><LogIn/></Route>
		// 		<Route path="/user"><User/></Route>
		// 		<Route path="*"><HomeScreen/></Route>
		// 	</Switch>
		// ) : <Redirect to='/user/profile'/>
		return (
			<Switch>
				<Route path="/home"><HomeScreen/></Route>
				<Route path="/register"><SignUp/></Route>
				<Route path="/login">{!this.context.loggedIn() ? <LogIn/> : <Redirect to='/user/dashboard'/>}</Route>
				<Route path="/user"><User/></Route>
				<Route path="*"><HomeScreen/></Route>
			</Switch>
		)
	}
}
Sw.contextType = Context

export default class App extends React.Component {
    render() {
		return (
			<ThemeProvider theme={theme}>
				<BrowserRouter className="App">
					<ApiProvider>
						<Sw/>
					</ApiProvider>
				</BrowserRouter>
			</ThemeProvider>
		)
	}
}