export const staticStyles = {
  loginPage: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPagePaper: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
  },
};

export const responsiveStyles = (theme) => {
  return {
    boxStyle: {
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
      [theme.breakpoints.between("md", "lg")]: {
        width: "70%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "50%",
      },
    },
    loginFormFooter: {
      width: '90%',
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
  };
};