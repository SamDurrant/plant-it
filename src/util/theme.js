export default {
  palette: {
    primary: {
      light: '#f27573',
      main: '#ef5350',
      dark: '#a73a38',
      contrastText: '#eee'
    },
    secondary: {
      light: '#6a52b3',
      main: '#4527a0',
      dark: '#301b70',
      contrastText: '#eee'
    }
  },
  spreadThis: {
    typography: {
      useNextVariants: true
    },
    capsHeading: {
      color: '#f27573',
      fontWeight: 700,
      marginBottom: 15,
      textTransform: 'uppercase',
      letterSpacing: 3
    },
    navLink: {
      textDecoration: 'none',
      color:  'inherit',
      padding: '0 20px'
    },
    cardLink: {
      textDecoration: 'none',
      color: 'inherit'
    },
    boldRuler: {
      height: 3,
      border: 'none',
      backgroundColor: '#4527a0'
    },
    basicForm: {
      backgroundColor: '#eee',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 0',
      borderRadius: 25,
      margin: '25px auto 75px auto'
    },
    textField: {
      display: 'block',
      margin: '15px auto'
    },
    submitBtn : {
      marginTop: 25
    }
  }
}