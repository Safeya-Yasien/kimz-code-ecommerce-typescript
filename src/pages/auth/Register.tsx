import { Link, Navigate } from "react-router";

import { Loader2 } from "lucide-react";

import { Heading } from "@/components/common";
import { FormInput } from "@/components/Form";

import useRegister from "@/hooks/useRegister";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    emailOnBlurHandler,
    onSubmit,
    register,
    handleSubmit,
    formErrors,
    emailAvailabilityStatus,
  } = useRegister();

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Create an Account" />

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name={"firstName"}
              label="First Name"
              error={formErrors.firstName?.message}
              register={register}
            />

            <FormInput
              name="lastName"
              label="Last Name"
              error={formErrors.lastName?.message}
              register={register}
            />
          </div>
          {/* Email */}
          <FormInput
            name="email"
            label="Email"
            type="email"
            error={
              formErrors.email?.message
                ? formErrors.email?.message
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
            error={formErrors.password?.message}
            register={register}
          />
          {/* Confirm Password */}
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            error={formErrors.confirmPassword?.message}
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

        {/* Display error message if it exists, below the form fields */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}

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
