import { DeepRequired, FieldErrorsImpl, UseFormWatch } from "react-hook-form";
import { InputValue } from "@auth/features";

interface InputProps {
  label: string;
  type: string;
  maxLength: number;
  placeholder: string;
  register: any;
  registerKey: string;
}

export interface ActiveProps {
  $isActive: boolean;
}

export interface AuthProps {
  register: any;
  watch: UseFormWatch<InputValue>;
  onClick: () => void;
  errors: Partial<FieldErrorsImpl<DeepRequired<InputValue>>>;
}
