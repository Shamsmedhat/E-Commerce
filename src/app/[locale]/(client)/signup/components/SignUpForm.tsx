"use client";
import { signupAction } from "@/actions/usersActions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UsersList } from "@/lib/types/user";
import { useActionState, useState } from "react";
import { useFormState } from "react-dom";
type ErrorState = {
  errors: {
    email: string[];
    firstName: string[];
    lastName: string[];
    password: string[];
    passwordConfirm: string[];
    username: string[];
  };
};
type InitialState = ErrorState | UsersList;

export default function SignUpForm() {
  const [signupData, SetSignupData] = useState<InitialState>();
  function isErrorState(data: InitialState): data is ErrorState {
    return (data as ErrorState).errors !== undefined;
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log("formData", form);
    const result = await signupAction(formData);
    console.log(result);
    SetSignupData(result);
  }
  return (
    <form className="mb-8 space-y-6 bg-white p-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="username"
          className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          username
        </Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="xxx"
          className="placeholder:text-primary-foreground/40 focus:!outline-primary"
        />
        {signupData &&
          isErrorState(signupData) &&
          signupData.errors.username && <p>{signupData.errors.username[0]}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="email">email</Label>
        <Input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
        />
        {signupData && isErrorState(signupData) && signupData.errors.email && (
          <p>
            {signupData.errors.email[0]}
            {signupData.errors.email[1]}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
        />
        {signupData &&
          isErrorState(signupData) &&
          signupData.errors.password && <p>{signupData.errors.password[0]}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="passwordConfirm">Confirm password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          placeholder="confirm password"
          name="passwordConfirm"
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
        />
        {signupData &&
          isErrorState(signupData) &&
          signupData.errors.passwordConfirm && (
            <p>{signupData.errors.passwordConfirm[0]}</p>
          )}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="firstName">First name</Label>
        <Input
          type="text"
          id="firstName"
          placeholder="First name"
          name="firstName"
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
        />
        {signupData &&
          isErrorState(signupData) &&
          signupData.errors.firstName && (
            <p>{signupData.errors.firstName[0]}</p>
          )}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="lastName">Last name</Label>
        <Input
          type="text"
          id="lastName"
          placeholder="Last name"
          name="lastName"
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
        />
        {signupData &&
          isErrorState(signupData) &&
          signupData.errors.lastName && <p>{signupData.errors.lastName[0]}</p>}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
        // disabled={isSubmitting || isSubmitSuccessful}
      >
        <span>تسجيل الدخول</span>
      </button>
    </form>
  );
}
