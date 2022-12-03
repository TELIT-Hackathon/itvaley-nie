import { AddToHomeScreen } from '@mui/icons-material';
import './App.css';
import Dashboard from './component/homeScreen';
import LogIn from './component/signIn.js';
import SignUp from './component/signUp.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography } from '@mui/material';

	function App() {
	return (
		<BrowserRouter className="App">
		<Routes>
			<Route path="/">
				<Route index element={
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hello madafaka
					</a>
				} />
				<Route path="home" element={<Dashboard/>} />
				<Route path="register" element={<SignUp/>} />
				<Route path="login" element={<LogIn/>} />
				<Route path="*" element={<Typography>NENI TAKE</Typography>} />
			</Route>
		</Routes>
		</BrowserRouter>
	);
	}

export default App;
