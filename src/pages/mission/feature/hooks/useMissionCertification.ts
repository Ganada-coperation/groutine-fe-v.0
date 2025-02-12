import { useState } from "react";
import * as React from "react";

export const useMissionCertification = () => {
  const [valid, setValid] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const changeValid = () => {
    setValid(!valid);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreview(URL.createObjectURL(file));
      changeValid();
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }

  return { valid, preview, description, changeValid, handleFileChange, handleDescriptionChange };
};
