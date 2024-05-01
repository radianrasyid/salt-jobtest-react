import * as Yup from "yup";

export const SignInFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please input valid email")
    .required("Email is required to log you in"),
  password: Yup.string()
    .min(6)
    .required("Password is required to log you in")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.{8,})/,
      "Password must contain at least one uppercase, number and special character"
    ),
});
