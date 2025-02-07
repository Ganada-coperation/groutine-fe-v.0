import { useState } from "react";

export const useSignUpStep = () => {
  const [step, setStep] = useState(1);

  const addStep = () => {
    setStep(step + 1);
  };

  return { step, addStep };
};
