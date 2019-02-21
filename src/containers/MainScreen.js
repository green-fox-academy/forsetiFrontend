import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider, AppBar } from '@material-ui/core';
import * as materialColor from '@material-ui/core/colors';
import TopicDrawer from '../components/Drawer/TopicDrawer';
import Questionnaire from './Questionnaire';
import palette from '../styles/theme.json';

const theme = createMuiTheme({
  palette: { ...palette.palette, type: 'dark' },
  direction: 'ltr',
  spacing: {
    unit: 30,
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 10,

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
