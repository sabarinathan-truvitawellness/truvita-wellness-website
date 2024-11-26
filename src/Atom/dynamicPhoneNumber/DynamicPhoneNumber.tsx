// import React from "react";
// import { FormControl, FormHelperText, InputLabel } from "@mui/material";
// import { MuiTelInput } from "mui-tel-input"; // Importing as a named export
// import './dynamicPhoneNumber.scss'; // Import your stylesheet here


// interface InputProps {
//     externalClassName?: string;
//     required?: boolean;
//     value?: string; // To control the input value
//     defaultCountry?: any; // Specify allowed country codes
//     disabled?: boolean; // To enable/disable the input
//     error?: boolean; // To indicate error state
//     helperText?: string; // For displaying error or helper text
//     variant?: "outlined" | "filled" | "standard"; // Variant prop for styling
//     onChange?: (value: string, name: string) => void; // Update the onChange signature
//     label?: string;
//     name?: string; // Add name prop
// }

// const DynamicPhoneNumber: React.FC<InputProps> = ({
//     externalClassName = "",
//     required = false,
//     value = "",
//     defaultCountry = "US", // Default to US if no country is provided
//     disabled = false,
//     error = false,
//     helperText = "", // Add helperText prop
//     variant = "outlined", // Default variant
//     onChange = () => {},
//     label = "",
//     name = "phoneNumber", // Default name
// }) => {
//     const handlePhoneChange = (newValue: string) => {
//         onChange(newValue, name); // Pass value and name to the onChange prop
//     };

//     return (
//         <FormControl className={`phone-input-container ${externalClassName} w-[100%] `} error={error}  variant={variant}>
//             <MuiTelInput
//                 id="phone-input"
//                 className="pl-0"
//                 value={value} // Control the input value
//                 onChange={handlePhoneChange} // Use the local handler 
//                 defaultCountry={defaultCountry} // Set the default country
//                 disabled={disabled} // Enable/disable input
//                 error={error} // Pass the error state
//                 inputProps={{
//                     required:required, // Pass the required attribute
//                     style: { borderColor: error ? 'red' : undefined }, // Optional styling for error
//                 }}
//                 label={label}
//             />
//             {error && <FormHelperText>{helperText}</FormHelperText>} {/* Display helper text if there's an error */}
//         </FormControl>
//     );
// };

// export default DynamicPhoneNumber;

import React, { useState } from "react";
import { FormControl, FormHelperText } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import parsePhoneNumber from 'libphonenumber-js';
import './dynamicPhoneNumber.scss'; 

interface InputProps {
    externalClassName?: string;
    required?: boolean;
    value?: string; // To control the input value
    defaultCountry?: any; // Specify allowed country codes
    disabled?: boolean; // To enable/disable the input
    error?: boolean; // To indicate error state
    helperText?: string; // For displaying error or helper text
    variant?: "outlined" | "filled" | "standard"; // Variant prop for styling
    onChange?: (value: string, name: string) => void; // Update the onChange signature
    getFieldDirty?: (isValid:boolean) => void;
    label?: string;
    name?: string; // Add name prop
}

const DynamicPhoneNumber: React.FC<InputProps> = ({
    externalClassName = "",
    required = false,
    value = "",
    defaultCountry = "US", // Default to US if no country is provided
    disabled = false,
    error = false,
    helperText = "", // Add helperText prop
    variant = "outlined", // Default variant
    onChange = () => {},
    getFieldDirty = () => {},
    label = "",
    name = "phoneNumber", // Default name
}) => {
    const [isValidPhone, setIsValidPhone] = useState(true); // Track if phone number is valid
    const [countryCode,setCountryCode] = useState("")

    // Function to validate phone number and country
    const validatePhoneNumber = (phoneNumber: string, country: any) => {
        console.log("ppppppppppppppppppppppppppppppp", phoneNumber,country )
        try {
            const parsedPhoneNumber = parsePhoneNumber(phoneNumber, country);
            return parsedPhoneNumber ? parsedPhoneNumber.isValid() : false; // Return validity
        } catch (error) {
            return false; // Return false if parsing fails
        }
    };
    // console.log("ppppppppppppppppppppppppppppppp", info.countryCode === null ? defaultCountry : info.countryCode )

    const handleChange = (value: string,info:any) => {
        
        const isValid = validatePhoneNumber(value,info.countryCode === null ? defaultCountry : info.countryCode); // Validate phone number
        setCountryCode(info.countryCode)
        setIsValidPhone(isValid); // Update validation state
        onChange(value, name); // Pass value and name to the onChange prop
        getFieldDirty(isValid);
    };

   

    return (
        <FormControl className={`phone-input-container ${externalClassName} w-[100%]`} error={!isValidPhone || error} variant={variant}>
            <MuiTelInput
                id="phone-input"
                className="pl-0"
                value={value} // Control the input value
                onChange={handleChange} // Validate phone number on change
                defaultCountry={defaultCountry} // Set the default country
                disabled={disabled} // Enable/disable input
                inputProps={{
                    required: required, // Pass the required attribute
                    style: { borderColor: !isValidPhone || error ? 'red' : undefined }, // Optional styling for error
                   
                }}
                label={label}
                error={!isValidPhone}
            />
            {!isValidPhone && <FormHelperText error>{`Invalid phone number for ${countryCode === null ? defaultCountry : countryCode}`}</FormHelperText>} 
            {error && <FormHelperText error>{helperText}</FormHelperText>} {/* Display helper text if there's an error */}
        </FormControl>
    );
};

export default DynamicPhoneNumber;
