import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider, AppBar, createStyles } from '@material-ui/core';
import TopicDrawer from '../components/Drawer/TopicDrawer';
import Questionnaire from './Questionnaire';
import palette from '../styles/theme.json';


const theme = createMuiTheme({
  palette: { ...palette.palette, type: 'dark' },
  direction: 'ltr',
  spacing: {
    unit: 10,
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 10,
  },
});

const MainScreen = () => (
  <MuiThemeProvider theme={theme} >

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <TopicDrawer style={{ maxWidth: '15em', width: '200px' }} />
      <Questionnaire />
    </div>
  </MuiThemeProvider>
);

export default MainScreen;
