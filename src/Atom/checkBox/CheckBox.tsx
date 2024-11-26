import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

interface InputProps {
    error?: boolean; // Prop to indicate error state
    externalClassName?: string;
    checked?: boolean;
    name?: string;
    onChange?: (checked: boolean, name: string) => void;
}

const CheckBox: React.FC<InputProps> = ({
    error = false,
    externalClassName = "",
    checked = false,
    name = "",
    onChange = () => {}
}) => {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        className={`check-box-style ${externalClassName}`}
                        checked={checked}
                        name={name}
                        onChange={(e) => onChange(e.target.checked, name)}
                    />
                }
                // Omit the label to match your requirements
                label="" 
            />
        </div>
    );
};

export default CheckBox;
