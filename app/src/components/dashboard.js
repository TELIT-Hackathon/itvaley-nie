import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import LabelBottomNavigation from './bottomNavigationPanel';


export default class DashboardContent extends React.Component {
  render() {
      return (
          <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
            <LabelBottomNavigation/>
          </Box>
      );
  }
}
