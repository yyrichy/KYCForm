import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PatternFormat } from "react-number-format";

const Step1 = ({ formData, updateFormData, nextStep }: { formData: any; updateFormData: any; nextStep: any }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: formData.name || "",
    streetAddress: formData.streetAddress || "",
    city: formData.city || "",
    state: formData.state || "",
    postalCode: formData.postalCode || "",
    email: formData.email || "",
    phone: formData.phone || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  // Validation Functions
  const validateName = (value: string) => {
    const nameRegex = /^\s*[\S]+(?: [\S]+)+\s*$/; // Allows space between first and last names
    return nameRegex.test(value) ? "" : "Enter both your first and last name.";
  };

  const validateStreetAddress = (value: string) => (value.trim().length < 5 ? "Street address must be at least 5 characters long." : "");
  const validateCity = (value: string) => (value.trim() === "" ? "City is required." : "");
  const validateState = (value: string) => (value.trim() === "" ? "State/Province is required." : "");
  const validatePostalCode = (value: string) => {
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    return postalCodeRegex.test(value) ? "" : "Enter a valid USA postal code (e.g., 12345 or 12345-6789).";
  };
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Enter a valid email address.";
  };
  const validatePhone = (value: string) => {
    return value.length < 17 ? "" : "Phone number not complete.";
  };

  const handleInputChange = (field: string, value: string | null) => {
    const stringValue = value ? value : "";

    let error = "";
    switch (field) {
      case "name":
        error = validateName(stringValue);
        break;
      case "streetAddress":
        error = validateStreetAddress(stringValue);
        break;
      case "city":
        error = validateCity(stringValue);
        break;
      case "state":
        error = validateState(stringValue);
        break;
      case "postalCode":
        error = validatePostalCode(stringValue);
        break;
      case "email":
        error = validateEmail(stringValue);
        break;
      case "phone":
        error = validatePhone(stringValue);
        break;
    }

    setPersonalInfo((prev) => ({ ...prev, [field]: stringValue }));
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "") && Object.values(personalInfo).every((value) => value.trim() !== "");
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      updateFormData(personalInfo);
      nextStep();
    }
  };

  // List of states (you can add or modify these as needed)
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <TextField
          value={personalInfo.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={`w-full py-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
          error={!!errors.name}
          helperText={errors.name}
        />
      </div>

      {/* Address Fields */}
      <div className="mb-4">
        <label className="block mb-2">Street Address</label>
        <TextField
          value={personalInfo.streetAddress}
          onChange={(e) => handleInputChange("streetAddress", e.target.value)}
          className={`w-full py-2 ${errors.streetAddress ? "border-red-500" : "border-gray-300"}`}
          error={!!errors.streetAddress}
          helperText={errors.streetAddress}
          placeholder="Street address, P.O. box, company name, etc."
        />
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:gap-x-8 mb-4">
        <div>
          <label className="block mb-2">City</label>
          <TextField
            value={personalInfo.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className={`w-full py-2 ${errors.city ? "border-red-500" : "border-gray-300"}`}
            error={!!errors.city}
            helperText={errors.city}
          />
        </div>
        <div>
          <label className="block mb-2">State</label>
          <Autocomplete
            className="p-0 m-0"
            options={states}
            value={personalInfo.state}
            onChange={(event, newValue: string) => handleInputChange("state", newValue || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                fullWidth
                error={!!errors.state}
                helperText={errors.state}
                placeholder="Select State"
                className="p-0 m-0"
              />
            )}
          />
        </div>
        <div>
          <label className="block mb-2">Postal Code</label>
          <TextField
            value={personalInfo.postalCode}
            onChange={(e) => handleInputChange("postalCode", e.target.value)}
            className={`w-full py-2 ${errors.postalCode ? "border-red-500" : "border-gray-300"}`}
            error={!!errors.postalCode}
            helperText={errors.postalCode}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <TextField
          type="email"
          value={personalInfo.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`w-full py-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
          error={!!errors.email}
          helperText={errors.email}
        />
      </div>

      {/* Phone Number Field */}
      <div className="mb-4">
        <label className="block mb-2">Phone Number</label>
        <PatternFormat
          format="+1 (###) ###-####"
          mask="_"
          value={personalInfo.phone}
          onValueChange={(values) => handleInputChange("phone", values.value)}
          customInput={TextField}
          className={`w-full py-2 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </div>

      {/* Submit Button */}
      <section className="flex flex-row justify-end">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`py-2 px-4 rounded ${isFormValid() ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default Step1;
