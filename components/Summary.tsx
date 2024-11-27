import React, { useState } from "react";
import { format } from "date-fns";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Summary = ({ formData, prevStep }: { formData: any; prevStep: any }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Summary & Review</h2>

      <div className="space-y-4">
        {/* Personal Information Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Personal Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Full Name:</p>
              <p>{formData.name}</p>
            </div>
            <div className="flex justify-between">
              <p>Email:</p>
              <p>{formData.email}</p>
            </div>
            <div className="flex justify-between">
              <p>Phone:</p>
              <p>{formData.phone}</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Address Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Street Address:</p>
              <p>{formData.streetAddress}</p>
            </div>
            <div className="flex justify-between">
              <p>City:</p>
              <p>{formData.city}</p>
            </div>
            <div className="flex justify-between">
              <p>State:</p>
              <p>{formData.state}</p>
            </div>
            <div className="flex justify-between">
              <p>Postal Code:</p>
              <p>{formData.postalCode}</p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Date of Birth:</p>
              <p>{formData.dob ? format(formData.dob, "MM-dd-yyyy") : "Not provided"}</p>
            </div>
            <div className="flex justify-between">
              <p>Nationality:</p>
              <p>{formData.nationality || "Not provided"}</p>
            </div>
            <div className="flex justify-between">
              <p>Document:</p>
              <p>{formData.document ? formData.document.name : "Not uploaded"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6 gap-8">
        <button onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors">
          Edit
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
          Submit
        </button>
      </div>

      {/* Modal */}
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Submission Successful
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Your form has been successfully submitted!
          </Typography>
          <button onClick={handleClose} className="bg-green-500 text-white mt-4 py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Summary;
