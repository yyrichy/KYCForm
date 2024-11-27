import { Progress } from "@/components/ui/progress";

const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage

  return (
    <div className="w-full py-8">
      {/* Display Progress Bar */}
      <Progress value={progress} max={100} className="bg-blue-600" />
    </div>
  );
};

export default ProgressBar;
