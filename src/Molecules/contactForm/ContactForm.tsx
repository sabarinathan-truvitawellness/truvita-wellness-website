    import React, { useState } from "react";
    import Button from "../../Atom/button/Button";
    import Input from "../../Atom/input/Input";
    import { REGEX_CONSTANT } from "../../utils/common/constant";
    import DynamicPhoneNumber from "../../Atom/dynamicPhoneNumber/DynamicPhoneNumber";
    import './contactForm.scss'
    import TextArea from "../../Atom/inputArea/InputArea";

    const ContactForm = (() => {


        const [formData, setFormData] = useState({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            countryCode: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            tandc: false

        });
        const [error, setError] = useState({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            countryCode: "",
            phoneNumber: "",
            password: {
                length: false,
                letterNumber: false,
                upperLower: false,
                specialChar: false,
            },
            confirmPassword: "",
            tandc: ""
        });

        console.log("formData", formData);

        const validateFirstName = ((value: any) => {
            const trimedValue = value.trim();
            if (trimedValue === "") {
                setError({
                    ...error,
                    firstName: "Enter Your Name"
                })
            }
            else if (!trimedValue.match(REGEX_CONSTANT.ONLY_CHARACTERS)) {
                setError({
                    ...error,
                    firstName: "Enter Valid Name"
                })
            }
            else {
                setError({
                    ...error,
                    firstName: ""
                })
            }

        });

        const validateLastName = ((value: any) => {
            const trimedValue = value.trim();
            if (trimedValue === "") {
                setError({
                    ...error,
                    lastName: "Enter Your Last Name"
                })
            }
            else if (!trimedValue.match(REGEX_CONSTANT.ONLY_CHARACTERS)) {
                setError({
                    ...error,
                    lastName: "Enter Valid Last Name"
                })
            }
            else {
                setError({
                    ...error,
                    lastName: ""
                })
            }
        });


        const validateEmail = ((value: any) => {
            const trimedValue = value.trim();

            if (trimedValue === "") {
                setError({
                    ...error,
                    email: "Enter Your Email"
                })
            }

            else if (!trimedValue.match(REGEX_CONSTANT.EMAIL)) {
                setError({
                    ...error,
                    email: "Enter Valid Email"
                })
            }

            else {
                setError({
                    ...error,
                    email: ""
                })
            }

        });

        const validphone = ((isValid: boolean) => {
            return isValid;
        })

        const validatePhoneNumber = ((value: any) => {
            if (value === "") {
                setError({
                    ...error,
                    phoneNumber: "Enter Your Email"
                })
            }
            else {
                setError({
                    ...error,
                    phoneNumber: ""
                })
            }
        })



        const changeHandler = (value: string | boolean, name: string): void => {

            if (name === "firstName") {
                validateFirstName(value);
            }
            else if (name === "lastName") {
                validateLastName(value);
            }

            else if (name === "email") {
                validateEmail(value);
            }

            else if (name === "phoneNumber") {
                validatePhoneNumber(value)
            }


            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleClick = () => {
            alert("Button clicked!");
        };

        return (
        
            <div className="form-container">
                <div className="form-container-wrapper">
                <div className="form-header">
                    <h2 className="form-title-content">Connect with us </h2>
                </div>
                <div className="form-contents">
                    <form>
                        <div className="global-input-wrapper">
                            <Input
                                type="text"

                                placeholder="First Name"
                                onChange={changeHandler}
                                name="firstName"
                                label="First Name"
                                externalClassName="internal-input-firstname"
                                helperText={error['firstName'] || ""}
                                required={true}
                                variant="outlined"
                                error={error['firstName'] ? true : false}
                                value={formData['firstName'] || ""}
                            />
                        </div>


                        <div className="global-input-wrapper">
                            <Input
                                type="text"
                                placeholder="Last Name"
                                onChange={changeHandler}
                                name="lastName"
                                label="Last Name"
                                externalClassName="internal-input-lastname"
                                helperText={error['lastName'] || ""}
                                required={true}
                                variant="outlined"
                                error={formData['lastName'] ? true : false}
                                value={formData['lastName'] || ""}
                            />
                        </div>



                        <div className="global-input-wrapper">
                            <Input
                                type="email"
                                placeholder="Email"
                                onChange={changeHandler}
                                name="email"
                                label="Email"
                                externalClassName="internal-input-email"
                                helperText={error['email'] || ""}
                                required={true}
                                variant="outlined"
                                error={formData['email'] ? true : false}
                                value={formData['email'] || ""}
                            />
                        </div>




                        <div className="global-input-wrapper pt-4 pb-4">
                            <DynamicPhoneNumber
                                value={formData['phoneNumber'] || ""}
                                required={true}
                                disabled={false}
                                error={formData['phoneNumber'] ? true : false}
                                helperText={error['phoneNumber'] || ""}
                                onChange={changeHandler}
                                externalClassName="custom-phone-input"
                                variant="outlined" // Set the desired variant here
                                label="Phone Number"
                                name="phoneNumber"
                                getFieldDirty={validphone}
                            />
                        </div>

                        <div className="">
                            <TextArea 
                            maxRows={4}
                            externalClassName="custom-text-area"
                            placeHolder="Type your message here..."
                            //  onChange={changeHandler}
                            //  value={textValue}
                            name="description"
                            label="Message"
                            //  required={true}
                            //  variant="outlined"
                            //  error={!textValue}
                            />
                        </div>



                        <div className="global-button-wrapper">
                            <Button
                                buttonText="Sign Up"
                                externalClassName="custom-button"
                                onClick={handleClick}
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
                </div>

            </div>
        )
    });

    export default ContactForm;