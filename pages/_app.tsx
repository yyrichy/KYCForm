import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Summary from "../components/Summary";
import "../styles/global.css";
import { motion, AnimatePresence } from "framer-motion";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    document: null,
  });

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4)); // Ensure max step is 4
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1)); // Ensure min step is 1
  };

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex px-8 lg:px-16 py-8 flex-col">
        <h1 className="text-3xl font-bold mb-8">Multi-Step KYC Form</h1>
        <ProgressBar currentStep={step} totalSteps={4} />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Step2 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Step3 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Summary formData={formData} prevStep={prevStep} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LocalizationProvider>
  );
}
