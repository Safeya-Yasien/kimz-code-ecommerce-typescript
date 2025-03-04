import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/validations/loginSchema";
import { Link } from "react-router";
import { Heading } from "@/components/common";
import { FormInput } from "@/components/Form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("User Logged In:", data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Login to Your Account" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormInput
            name="email"
            label="Email"
            type="email"
            error={errors.email?.message}
            register={register}
          />

          {/* Password */}
          <FormInput
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
            register={register}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
