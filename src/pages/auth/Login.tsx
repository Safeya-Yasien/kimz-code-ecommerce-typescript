import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/validations/loginSchema";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Heading } from "@/components/common";
import { FormInput } from "@/components/Form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get("message");

  const { error, loading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormValues) => {
    if (message) {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Login to Your Account" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
        {message === "account_created" && (
          <p className="text-green-500 text-sm text-center mb-4">
            Account created successfully! Please log in.
          </p>
        )}{" "}
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
            className="w-full flex justify-center items-center text-white py-2 rounded-md transition duration-300
              bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading === "pending"}
          >
            {loading === "pending" ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        {/* Display error message if it exists, below the form fields */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
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
