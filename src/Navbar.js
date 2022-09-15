import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';

const Navbar = () => {
  return (
    <>
      <AppBar style={{ backgroundColor: '#545454' }} position='static'>
        <Toolbar>
          <span
            style={{
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              fontSize: '18px',
            }}
          >
            The Twilight Zone API Test Page
          </span>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

// WITH A THEME: https://mui.com/material-ui/customization/palette/#adding-new-colors
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

// // const Navbar = () => {
// //   return (
// //     <>
// //       <ThemeProvider theme={theme}>
// //         <AppBar position='static' color='secondary'>
// //           <Toolbar>
// //             <span
// //               style={{
// //                 fontWeight: 'bold',
// //                 letterSpacing: '1.0px',
// //                 fontSize: '18px',
// //                 color: '#ffffff',
// //               }}
// //             >
// //               The Twilight Zone API Test Page
// //             </span>
// //           </Toolbar>
// //         </AppBar>
// //         <Toolbar />
// //       </ThemeProvider>
// //     </>
// //   );
// // };

// // export default Navbar;
