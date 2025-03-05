import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Heading } from "@/components/common";
import {
  RegisterFormValues,
  registerSchema,
} from "@/validations/registerSchema";
import { Link, useNavigate } from "react-router";
import { FormInput } from "@/components/Form";
import useCheckEmailAvailability from "@/hooks/useCheckEmailAvailability";
import { FocusEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister } from "@/store/auth/authSlice";
import { Loader2 } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  const onSubmit = async (data: RegisterFormValues) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => navigate("/login?message=account_created"));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Create an Account" />

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error || "Something went wrong. Please try again."}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name={"firstName"}
              label="First Name"
              error={errors.firstName?.message}
              register={register}
            />

            <FormInput
              name="lastName"
              label="Last Name"
              error={errors.lastName?.message}
              register={register}
            />
          </div>
          {/* Email */}
          <FormInput
            name="email"
            label="Email"
            type="email"
            error={
              errors.email?.message
                ? errors.email?.message
                : emailAvailabilityStatus === "notAvailable"
                ? "This email is already in use."
                : emailAvailabilityStatus === "failed"
                ? "Error from the server. Please try again."
                : ""
            }
            formText={
              emailAvailabilityStatus === "checking"
                ? "We're currently checking the availability of this email address. Please wait a moment."
                : ""
            }
            success={
              emailAvailabilityStatus === "available"
                ? "This email is available for use."
                : ""
            }
            disabled={emailAvailabilityStatus === "checking"}
            register={register}
            onBlur={emailOnBlurHandler}
          />

          {/* Password */}
          <FormInput
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
            register={register}
          />
          {/* Confirm Password */}
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
            register={register}
          />
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center items-center text-white py-2 rounded-md transition duration-300
            ${
              loading === "pending" ||
              emailAvailabilityStatus === "checking" ||
              emailAvailabilityStatus === "notAvailable"
                ? "bg-gray-400 cursor-not-allowed opacity-70"
                : "bg-blue-500 hover:bg-blue-600"
            }
        `}
            disabled={
              loading === "pending" ||
              emailAvailabilityStatus === "checking" ||
              emailAvailabilityStatus === "notAvailable"
            }
          >
            {loading === "pending" ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
