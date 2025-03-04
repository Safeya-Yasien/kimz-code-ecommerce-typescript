import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TFormInputProps<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  label: string;
  type?: string;
  error?: string;
  register: UseFormRegister<TFieldValue>;
};

const FormInput = <TFieldValue extends FieldValues>({
  name,
  label,
  type = "text",
  error,
  register,
}: TFormInputProps<TFieldValue>) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
export default FormInput;
