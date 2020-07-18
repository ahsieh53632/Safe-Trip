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
  })
  
  // To use responsive font sizes, include the following line
//   theme = responsiveFontSizes(theme)
  
  export default theme