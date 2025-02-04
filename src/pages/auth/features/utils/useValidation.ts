import { useState } from "react";

export const useValidation = () => {
  const [validation, setValidation] = useState({
    visible: false,
    validCode: false,
    isCodeSent: false,
  });
  const setCodeSent = () => setValidation({ ...validation, isCodeSent: true });

  const onSubmit = () => {
    console.log('인증 코드 전송');
    setCodeSent();
  };

  const changeVisibility = () => {
    setValidation((prev) => ({
      ...prev,
      visible: true,
      validCode: true,
    }));
  };

  return { validation, onSubmit, changeVisibility };
};
