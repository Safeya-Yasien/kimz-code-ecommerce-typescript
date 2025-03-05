import { FocusEvent, useEffect } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  RegisterFormValues,
  registerSchema,
} from "@/validations/registerSchema";

import useCheckEmailAvailability from "@/hooks/useCheckEmailAvailability";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister, resetUI } from "@/store/auth/authSlice";

const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors: formErrors },
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

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    emailOnBlurHandler,
    onSubmit,
    register,
    handleSubmit,
    formErrors,
    emailAvailabilityStatus,
  };
};
export default useRegister;
