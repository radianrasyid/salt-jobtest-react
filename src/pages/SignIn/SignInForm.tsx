"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "sonner";
import { SignInFormValidation } from "./helpers/validation";

interface FormikValues {
  email: string;
  password: string;
  remember: boolean;
}
const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //   HANDLING PASSWORD VISIBILITY
  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  //   HANDLING REMEMBER ME VALUE CHANGES
  const handleRememberMeValue = (e: ChangeEvent<HTMLInputElement>) =>
    setFieldValue("remember", e.target.checked ? true : false);

  //   FORM TAG SUBMITION FUNCTION
  const handleSubmition = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      handleSubmit();
      return;
    }

    toast.info(
      "Please fill email and password form to continue your action or login with available authentication"
    );
  };

  //   FORMIK ON SUBMIT FUNCTION
  const submitionProcess = async (val: FormikValues) => {
    setIsSubmitting(true);
    try {
      await fetch("https://jsonplaceholder.typicode.com/photos");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  //   FORMIK INITIALIZE
  const { values, errors, handleChange, handleSubmit, setFieldValue, isValid } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        remember: false,
      } satisfies FormikValues,
      onSubmit: submitionProcess,
      validationSchema: SignInFormValidation,
    });

  return (
    <div>
      <form onSubmit={handleSubmition}>
        {/* EMAIL TEXTFIELD */}
        <div className="mb-6">
          <label
            htmlFor="email-textfield"
            className="font-semibold text-base leading-[1rem] mb-2"
          >
            Email
          </label>
          <Input
            id="email-textfield"
            name="email"
            error={!!errors.email}
            onChange={handleChange}
            value={values.email}
          />
          {!!errors.email ? (
            <p className="text-red-500 text-xs">{errors.email}</p>
          ) : null}
        </div>

        {/* PASSWORD TEXTFIELD */}
        <div className="mb-6">
          <label
            id="password-textfield"
            className="font-semibold text-base leading-[1rem] mb-2"
          >
            Password
          </label>
          <Input
            id="password-textfield"
            type={isPasswordVisible ? "text" : "password"}
            error={!!errors.password}
            value={values.password}
            name="password"
            onChange={handleChange}
            icon={
              isPasswordVisible ? (
                <IoMdEye
                  className="text-accent scale-[1.7] cursor-pointer"
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <IoMdEyeOff
                  className="text-accent scale-[1.7] cursor-pointer"
                  onClick={handlePasswordVisibility}
                />
              )
            }
          />
          {!!errors.password ? (
            <p className="text-red-500 text-xs">{errors.password}</p>
          ) : null}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-x-2">
            <Input
              type="checkbox"
              id="remember-me-checkbox"
              onChange={handleRememberMeValue}
              name="remember"
              checked={values.remember}
            />
            <label
              id="remember-me-checkbox"
              className="font-normal text-base leading-[1rem] text-secondary"
            >
              Remember me
            </label>
          </div>

          <div>
            <a
              href={"#"}
              className="underline text-secondary text-base leading-[1rem] text-right"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mb-12">
          <Button className="flex-1" type="submit" loading={isSubmitting}>
            Login
          </Button>
          <Button variant={"outline"} className="flex-1" type="button">
            Sign Up
          </Button>
        </div>
      </form>

      <div>
        <p className="text-center font-normal text-sm leading-[0.875rem] text-secondary mb-4">
          Or, login with
        </p>
        <div className="flex items-center justify-between gap-x-4">
          <Button
            type="button"
            variant={"outline"}
            className="font-medium text-sm w-max leading-[0.875rem]"
            disabled={isSubmitting}
          >
            Facebook
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="font-medium text-sm w-max leading-[0.875rem]"
            disabled={isSubmitting}
          >
            Linked In
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="font-medium text-sm w-max leading-[0.875rem]"
            disabled={isSubmitting}
          >
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
