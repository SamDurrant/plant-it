export default {
  palette: {
    primary: {
      light: '#e34e6d',
      main: '#dc2249',
      dark: '#9a1733',
      contrastText: '#eee'
    },
    secondary: {
      light: '#90d5c2',
      main: '#75cbb3',
      dark: '#518e7d',
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
    centeredGridItems: {
      textAlign: 'center'
    },
    navLink: {
      textDecoration: 'none',
      color:  'inherit',
      padding: '0 20px'
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
      padding: '50px 25px',
      borderRadius: 25,
      margin: '25px auto 75px auto'
    },
    formHeadings: {
      margin: '0 15px 25px 15px',
      textAlign: 'center'
    },
    textField: {
      display: 'block',
      margin: '15px auto',
      width: 'fit-content'
    },
    searchField: {
      margin: '5px 0'
    },
    selectField: {
      minWidth: 175,
      margin: '25px auto'
    },
    selectFieldLabel: {
      marginTop: 10
    },
    submitBtn : {
      marginTop: 25
    }
  }
}