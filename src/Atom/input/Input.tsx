import React, { useState } from "react";
import {
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './input.scss'; // Import your styles

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
  value?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text", // Default type to "text"
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
  value = ""
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormControl variant={variant} fullWidth margin="normal" className={`${error ? "form-control-register-dirty" : "form-control-register"}`}>
      <InputLabel htmlFor={name} required={required}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={name}
        type={type === "password" && !showPassword ? "password" : "text"} // Fix type handling for password
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, name)}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        className={`inputField ${externalClassName}`}
        value={value}
        endAdornment={
          type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
        required={required}
        error={error}
      />
      {helperText && <span className={`mt-1 pl-2 helper-text`}>{helperText}</span>}
    </FormControl>
  );
};

export default Input;
