import React from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import Icon from '@mui/material/Icon';
import TextField from "@mui/material/TextField"






const IconTextField = ({ iconStart, iconEnd, ...props }) => {
    return (
      <TextField
        {...props}
        InputProps={{
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null
        }}
      />
    );
  };


export default IconTextField;