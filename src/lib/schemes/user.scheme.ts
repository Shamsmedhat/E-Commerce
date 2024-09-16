import { z } from "zod";

export const SigninSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required!" })
      .min(3, {
        message:
          "Username must be 6 characters at least and 30 characters max!",
      })
      .max(30, {
        message:
          "Username must be 6 characters at least and 30 characters max!",
      }),
    email: z
      .string({ required_error: "Email is required!" })
      .email()
      .min(6, { message: "Email must be 10 characters at least!" }),
    password: z
      .string({ required_error: "Password is required!" })
      .min(6, { message: "Password must be 6 characters at least!" }),
    passwordConfirm: z.string({ required_error: "Password is required!" }),
    firstName: z
      .string({ required_error: "First name is required!" })
      .min(3, {
        message:
          "First name must be 3 characters at least and 15 characters max!",
      })
      .max(30, {
        message:
          "Username must be 3 characters at least and 15 characters max!",
      }),
    lastName: z
      .string({ required_error: "Username is required!" })
      .min(3, {
        message:
          "Username must be 6 characters at least and 30 characters max!",
      })
      .max(30, {
        message:
          "Username must be 6 characters at least and 30 characters max!",
      }),
    //TODO photo
  })
  .required()
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords don't match!",
  });
