import React, { useState } from 'react';
import './style/Input.css';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';

const CustomJoyInput = ({ ...props }) => {
  return (
    <div className='input_wrapp_joy'>
      <Input
        startDecorator={props.startDecorator}
        endDecorator={props.endDecorator}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        size={props.size}
        sx={{
          bgcolor: '#D6D9DA',
          boxShadow: 1,
          borderRadius: 2,
          p: 1.5,
          fontSize: 17,
          boxShadow: 0,
          borderRadius: 14,
          width: '100%',
          height: '100%',
          color: 'black',
          '--Input-focusedThickness': '0px',
        }}
      />
      <FormHelperText sx={props.sx == true ? {} : { color: '#F47921' }}>
        {props.formHelperText}
      </FormHelperText>
    </div>
  );
};

export default CustomJoyInput;
