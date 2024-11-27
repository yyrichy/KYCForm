// components/Step2.tsx
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const Step2 = ({ formData, updateFormData, nextStep, prevStep }: { formData: any; updateFormData: any; nextStep: any; prevStep: any }) => {
  const [date, setDate] = useState(formData.dob);
  const [nationality, setNationality] = useState(formData.nationality);

  const handleSubmit = () => {
    if (!date || !nationality) {
      alert("Please fill in all fields.");
      return;
    }
    updateFormData({ dob: date, nationality });
    nextStep();
  };

  return (
    <div className="flex gap-y-4 flex-col">
      <h2 className="text-2xl font-bold">Step 2: Date of Birth & Nationality</h2>
      <div className="flex flex-col gap-y-4">
        <label className="block">Date of Birth</label>
        <DatePicker value={new Date(date)} onChange={(newValue) => setDate(newValue?.toDateString())} />
      </div>
      <div className="flex flex-col gap-y-4">
        <label>Nationality</label>
        <TextField value={nationality} onChange={(e: any) => setNationality(e.target.value)} />
      </div>
      <div className="flex justify-between mt-4 gap-2">
        <button onClick={prevStep} className="bg-gray-300 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
