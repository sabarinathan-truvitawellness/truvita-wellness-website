import React, { useState } from "react";
import {
    FormControl,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './dynamicDateField.scss'

interface InputProps {
    type?: string;
    placeholder?: string;
    onChange?: (value: string, name: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    name?: string;
    label?: string;
    helperText?: string;
    required?: boolean;
    variant?: "outlined" | "filled" | "standard"; 
    externalClassName?: string;
    error?: boolean;
    value?: null | undefined;
    isShrunk?: boolean;
}

const DynamicDateField: React.FC<InputProps> = ({
    type = "date", // Default type set to "date"
    placeholder = "",
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    name = "",
    label = "",
    helperText = "",
    required = false,
    variant = "outlined", // Default variant
    externalClassName = "",
    error = false,
    value = null,
    isShrunk = false
}) => {

    const handlingChangeEvent = ((newValue:any)=>{
        onChange(newValue,name)
    })
    
    return (
        <FormControl variant={variant} fullWidth margin="normal" error={error}   className={`date-picker ${externalClassName}`} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
  label={label}
  value={value}
  onChange={handlingChangeEvent}    
  slotProps={{
    textField: {
      InputLabelProps: {
        shrink: isShrunk,
        required: required,
      },
      error: error,
    },
  }}

/>
</LocalizationProvider>
            {helperText && <span className={`mt-1 pl-2 helper-text`}>{helperText}</span>}
        </FormControl>
    );
};

export default DynamicDateField;




