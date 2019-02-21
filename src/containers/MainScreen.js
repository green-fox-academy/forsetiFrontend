import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider, AppBar } from '@material-ui/core';
import * as materialColor from '@material-ui/core/colors';
import TopicDrawer from '../components/Drawer/TopicDrawer';
import Questionnaire from './Questionnaire';
import palette from '../styles/theme.json';

const theme = createMuiTheme({
  palette: { ...palette.palette },
  //   primary: materialColor.teal,
  //   secondary: materialColor.pink,
  //   background: {
  //     paper: materialColor.grey,
  //     default: materialColor.grey,
  //   },
  //   common: materialColor.grey,
  //   contrastThreshold: 3,
  // },
  direction: 'ltr',
  spacing: {
    unit: 30,
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 5,
  },

});

const MainScreen = () => (
  <MuiThemeProvider theme={theme}>
    <TopicDrawer />
    <div style={{ paddingLeft: 200 }}>
      <Questionnaire />
    </div>
  </MuiThemeProvider>
);

export default MainScreen;
