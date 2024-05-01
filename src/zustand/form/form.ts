import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface FormGlobalState {
  email: string;
  password: string;
  remember: boolean;
  isPasswordVisible: boolean;
  setEmailValue: (val: string) => void;
  setPasswordValue: (val: string) => void;
  setRememberValue: (val: boolean) => void;
  setIsPasswordVisibleValue: (val: boolean) => void;
}

export const useFormStore = create<FormGlobalState>()(
  devtools(
    persist(
      (set) => ({
        email: "",
        password: "",
        remember: false,
        isPasswordVisible: false,
        setEmailValue: (val: string) => {
          set((state) => ({
            ...state,
            email: val,
          }));
        },
        setPasswordValue: (val: string) => {
          set((state) => ({
            ...state,
            password: val,
          }));
        },
        setRememberValue: (val: boolean) => {
          set((state) => ({
            ...state,
            remember: val,
          }));
        },
        setIsPasswordVisibleValue: (val: boolean) => {
          set((state) => ({
            ...state,
            isPasswordVisible: val,
          }));
        },
      }),
      {
        name: "form",
      }
    ),
    {
      name: "form-store",
    }
  )
);
