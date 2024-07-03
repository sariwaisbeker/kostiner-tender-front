import { createTheme } from '@mui/material/styles';
import backgroundPicture from './image/backgroundPicture.png';  

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(10, 63, 61)',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    background: {
      default: '#242424',
      paper: '#1a1a1a',
    },
    text: {
      primary: 'rgb(10, 63, 61)',
    },
  },
  typography: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      titleFont:'EFT_Asaf Heavy',
      backgroundImage:`url(${backgroundPicture})`,
    h1: {
      fontSize: '3.2em',
      lineHeight: 1.1,
    },
    button: {
      textTransform: 'none',
      fontSize: '1em',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
          '&:hover': {
            borderColor: '#646cff',
          },
          '&:focus, &:focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
        },
        a: {
          fontWeight: 500,
          color: '#646cff',
          textDecoration: 'inherit',
          '&:hover': {
            color: '#535bf2',
          },
        },
      },
    },
  },
});

export default theme;
