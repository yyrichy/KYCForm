// components/Step3.tsx
import { useState } from "react";

const Step3 = ({ formData, updateFormData, nextStep, prevStep }: { formData: any; updateFormData: any; nextStep: any; prevStep: any }) => {
  const [document, setDocument] = useState(formData.document);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocument(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!document) {
      alert("Please upload a document.");
      return;
    }
    updateFormData({ document });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Document Upload</h2>
      <input type="file" className="w-full mb-4" onChange={handleFileChange} />
      <div className="flex justify-between mt-4">
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

export default Step3;
