import './App.css';
import * as React from 'react';
import LogIn from './component/signIn.js';
import SignUp from './component/signUp.js';
import HomeScreen from './component/homeScreen.js';
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
			<ApiProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter className="App">
						<Switch>
							<Route path="/home"><HomeScreen/></Route>
							<Route path="/register"><SignUp/></Route>
							<Route path="/login"><LogIn/></Route>
							<Route path="/user"><User/></Route>
							{/* <Route path="*" element={<Typography>NENI TAKE</Typography>} /> */}
							<Route path="*">
                <HomeScreen/>
							</Route>
						</Switch>
					</BrowserRouter>
				</ThemeProvider>

				{/* NECHAJ MI TO JE MOJE */}
				{/* <ApiConsumer>
					{api => <button onClick={() => api.login('Pepperino1', 'abcd')}>LOGIN</button>}
				</ApiConsumer>

				<ApiConsumer>
					{api => <button onClick={() => api.logout()}>LOGOUT</button>}
				</ApiConsumer>
				
				<ApiConsumer>
					{api => <p>{JSON.stringify(api.user)}</p>}
				</ApiConsumer> */}
		</ApiProvider>
		);
	}
}
