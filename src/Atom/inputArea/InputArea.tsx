import React from "react";
import { TextField } from "@mui/material";
import './inputArea.scss'

interface TextAreaProps {
    maxRows?: number; // Maximum number of rows for the TextField
    externalClassName?: string; // Custom class name for additional styles
    placeHolder?: string; // Placeholder text for the TextField
    onChange?: (value: string,name:string) => void; // Function to handle value changes
    value?: string; // Controlled value for the TextField
    label?: string; // Label for the TextField
    error?: boolean; // Error state
    helperText?: string; // Helper text for the TextField
    name?:string;
}

const TextArea: React.FC<TextAreaProps> = ({
    maxRows = 4, // Default maximum rows
    externalClassName = "",
    placeHolder = "",
    onChange = () => {},
    value = "",
    label = "Text Area", // Default label
    error = false, // Default error state
    helperText = "", // Default helper text
    name = ""
}) => {
    return (
        <div className={`textarea-container`}>
            <TextField
                id="outlined-multiline-static"
                name={name}
                label={label}
                multiline
                rows={maxRows} // Use maxRows as the number of rows
                placeholder={placeHolder}
                variant="outlined" // Use outlined variant
                onChange={(e) => onChange(e.target.value,name)} // Handle value change
                value={value} // Controlled component
                error={error} // Show error state
                helperText={helperText} // Display helper text
                fullWidth // Make the TextField full width
                margin="normal" // Add margin
                className={`internal-input-field ${externalClassName} `}
                InputProps={{
                    style: {
                        borderRadius: '25px' // Apply border radius
                    }
                }}
            />
        </div>
    );
};

export default TextArea;
