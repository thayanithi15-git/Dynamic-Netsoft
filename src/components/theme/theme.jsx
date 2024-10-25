import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    backcolor: {
      main: '#f5f5f5', 
    },
    header: {
      main: '',
    },
    sidebar: {
      main: '3D3F4E',
      color: '3D3F4E',
    },
    bodyheader:{
      bgcolor: '373B48',
      color: '#071741',
      selector: '#F5F7FA',
      unit: '',
      prospect: '',
      trash: "yellow",
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#dddddd',
    },
    backcolor: { 
      main: '#212331',
    },
    header: {
      main: '#212331',
    },
    sidebar: {
      main: '#3D3F4E',
      color: 'white',
    },
    bodyheader:{
      bgcolor: '#373B48',
      color: 'white',
      selector: 'black',
      unit: '#545B6D',
      prospect: 'grey',
      trash: "yellow",
    }

  },
});
