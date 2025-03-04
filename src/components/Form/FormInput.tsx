import { FocusEvent } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TFormInputProps<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  label: string;
  type?: string;
  error?: string;
  register: UseFormRegister<TFieldValue>;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};

const FormInput = <TFieldValue extends FieldValues>({
  name,
  label,
  type = "text",
  error,
  register,
  onBlur,
  formText,
  success,
  disabled,
}: TFormInputProps<TFieldValue>) => {
  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name)}
        onBlur={onBlurHandler}
        aria-invalid={error ? "true" : "false"}
        disabled={disabled}
        className={`mt-1 w-full p-2 border rounded-md focus:outline-none transition 
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${success ? "border-green-500 focus:ring-green-500" : ""}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : "focus:ring-blue-500"}
        `}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {success && <p className="text-green-500 text-xs mt-1">{success}</p>}
      {formText && (
        <p className="text-gray-500 text-xs mt-1">{formText}</p>
      )}{" "}
    </div>
  );
};
export default FormInput;
