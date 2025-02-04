import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { InputValue } from "@auth/features";

export const useCustomForm = <T extends InputValue> (schema: ZodSchema) => {
  return useForm<T>({
    resolver: zodResolver(schema),
  });
}
