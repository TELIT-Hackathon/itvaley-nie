import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';

export default class LabelBottomNavigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    }

    render() {
        return (
            <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} value={this.state.recents} onChange={(evt, value) => {
                console.log(value)
                this.setState({recents: value})
            }}>
              <Link to="/user/dashboard">
                <BottomNavigationAction
                  label="Home"
                  value="home"
                  icon={<HomeIcon />}
                />
              </Link>
              
              <Link to="/user/requests">
                <BottomNavigationAction
                  label="Requests"
                  value="requests"
                  icon={<ReceiptIcon />}
                />
              </Link>
              <BottomNavigationAction
                label="Search"
                value="search"
                icon={<SearchIcon />}
              />
              <Link to="/user/contacts">
                <BottomNavigationAction 
                  label="Contacts" 
                  value="contacts" 
                  icon={<PeopleAltIcon />} 
                />
              </Link>
              <Link to="/user/profile">
                <BottomNavigationAction 
                  label="Profile" 
                  value="profile" 
                  icon={<PersonIcon />} 
                />
              </Link>
              
            </BottomNavigation>
          );
    }
}