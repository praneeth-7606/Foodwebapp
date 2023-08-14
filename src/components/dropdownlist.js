// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' },
// ];

// const Dropdownlist = () => {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField
//         id="dropdown"
//         select
//         label="Select an option"
//         variant="outlined"
//       >
//         {options.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>
//     </form>
//   );
// };

// export default Dropdownlist;