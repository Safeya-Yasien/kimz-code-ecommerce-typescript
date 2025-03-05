import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/validations/loginSchema";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";

const useLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const loginRequiredMessage = searchParams.get("message") === "login_required";

  const accountCreatedMessage =
    searchParams.get("message") === "account_created";

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormValues) => {
    if (accountCreatedMessage) {
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

  return {
    error,
    loading,
    register,
    handleSubmit,
    onSubmit,
    loginRequiredMessage,
    accountCreatedMessage,
    accessToken,
    formErrors,
  };
};
export default useLogin;
