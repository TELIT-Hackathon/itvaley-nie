import './App.css';
import Dashboard from './component/dashboard';
import LogIn from './component/signIn.js';
import SignUp from './component/signUp.js';
import HomeScreen from './component/homeScreen.js';
import Contacts from './component/contactList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
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
					<Route path="home" element={<HomeScreen/>} />
					<Route path="contacts" element={<Contacts/>} />
					<Route path="dashboard" element={<Dashboard/>} />
					<Route path="register" element={<SignUp/>} />
					<Route path="login" element={<LogIn/>} />
					<Route path="*" element={<Typography>NENI TAKE</Typography>} />
				</Route>
			</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
