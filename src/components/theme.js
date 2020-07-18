import {
    createMuiTheme,
    responsiveFontSizes
  } from "@material-ui/core/styles"
  
  let theme = createMuiTheme({
    typography: {
      fontFamily: [ "Roboto",
                    "Montserrat",
                    "Work Sans",
                    "serif"
                  ].join(","),
      fontSize:   18,
    //   color: '#ffff'
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
      }
  })
  
  // To use responsive font sizes, include the following line
//   theme = responsiveFontSizes(theme)
  
  export default theme