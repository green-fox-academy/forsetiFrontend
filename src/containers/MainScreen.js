import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import TopicDrawer from '../components/Drawer/TopicDrawer';
import QusetionContainer from '../containers/QusetionContainer';
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
      <QusetionContainer />
    </div>
  </MuiThemeProvider>
);

export default MainScreen;
