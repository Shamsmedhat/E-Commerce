"use client";
import { signupAction } from "@/lib/actions/users-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { handleCreateUserToaster } from "@/lib/utils/helpers";
import { Link, useRouter } from "@/navigarion";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { GoArrowUpLeft } from "react-icons/go";
import { ImSpinner3 } from "react-icons/im";
import { z } from "zod";
import useAuthToast from "@/hooks/useAuthToast";

type FormInputs = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};
export default function SignUpForm() {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: zodResolver(
      z
        .object({
          username: z
            .string({ required_error: t("go9SMabWsPSUkiCJc8-Ib") })
            .min(2, {
              message: t("xQYLUfdxC2vYBQLls6Ude"),
            })
            .max(30, {
              message: t("xQYLUfdxC2vYBQLls6Ude"),
            }),
          email: z
            .string({ required_error: t("8rdtyVK_9GMfNgIrMUb-A") })
            .min(6, {
              message: t("8Z_zRYolUUwpYWeCTUeUO"),
            })
            .email({ message: t("exxMVfBztiKURFAecTfiV") }),
          password: z
            .string({ required_error: t("VTHn0sb-rDUWcmvA-yJmQ") })
            .min(8, {
              message: t("XvaPLsNTVYuIbJ8GSb7JY"),
            })
            .regex(/[a-zA-Z]/, {
              message: t("XvaPLsNTVYuIbJ8GSb7JY"),
            })
            .regex(/[0-9]/, {
              message: t("XvaPLsNTVYuIbJ8GSb7JY"),
            }),
          passwordConfirm: z.string({
            required_error: t("VTHn0sb-rDUWcmvA-yJmQ"),
          }),
          firstName: z
            .string({ required_error: t("MCQrODEe8fOZM-p3d8zsM") })
            .min(2, {
              message: t("byy8I4jXZLp0FCcCHapuJ"),
            })
            .max(30, {
              message: t("byy8I4jXZLp0FCcCHapuJ"),
            }),
          lastName: z
            .string({ required_error: t("AXXeklf0X2QiLHui8F7RB") })
            .min(2, {
              message: t("xvuI-BiV6ElGodeyDAoky"),
            })
            .max(30, {
              message: t("xvuI-BiV6ElGodeyDAoky"),
            }),
          //TODO photo
        })
        .required()
        .refine((data) => data.password === data.passwordConfirm, {
          path: ["passwordConfirm"],
          message: t("CkRDD7KoBEoPlHs2aStsG"),
        }),
    ),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      router.push("/");
    }
  }, [isSubmitSuccessful, router]);

  async function onSubmit() {
    const formData = new FormData();

    const values = getValues();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const result = await signupAction(formData);
    console.log("values", values);
    if (result.status === "success") {
      reset();
      await signIn("credentials", {
        redirect: false,
        username: result.data.user.username,
        password: values.password,
      });

      handleCreateUserToaster();
    }
  }

  // Show toaster when create user by using localstorage
  useAuthToast();
  return (
    <form
      className="mb-4 space-y-6 bg-white p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="username"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("YoJEeetZt85ox0jmFdcvj")}{" "}
        </Label>
        <Input
          type="text"
          {...register("username")}
          id="username"
          placeholder={t("eV108l7Z6Q8ubIMe_I9S5")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.username && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.username?.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="email"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("chRF5UxcCqZDTmFV_P3nY")}{" "}
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="yyy@gmail.com"
          {...register("email")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.email && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.email?.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="firstName"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("fNL0aiq1UQFPkSx2ft_qt")}{" "}
        </Label>
        <Input
          type="text"
          id="firstName"
          placeholder={t("2e_DEIu1MgoowOLCG-Ori")}
          {...register("firstName")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.firstName && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.firstName?.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="lastName"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("AfngYmc6KeE0VCRMa9WSx")}{" "}
        </Label>
        <Input
          type="text"
          id="lastName"
          placeholder={t("2-JP8-PEVvftwd9QyehEI")}
          {...register("lastName")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.lastName && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.lastName?.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="password"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("6Ga5ADgKW5t7UIaqd1jBF")}{" "}
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••"
          {...register("password")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.password && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.password?.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="passwordConfirm"
          className="block text-sm font-bold text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("2brCuGX6LR71O25LqL-D3")}{" "}
        </Label>
        <Input
          type="password"
          id="passwordConfirm"
          placeholder="••••••••"
          {...register("passwordConfirm")}
          className="placeholder:font-semibold placeholder:text-primary-foreground/60 focus:!outline-primary"
        />
        {errors.passwordConfirm && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.passwordConfirm?.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        className={cn(
          isSubmitting ? "cursor-not-allowed" : "cursor-pointer",
          "w-full rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80",
        )}
        disabled={isSubmitting}
      >
        <span className="flex justify-center">
          {isSubmitting ? (
            <ImSpinner3 className="animate-spin" size={25} />
          ) : (
            t("1zpPNo4mmSOvsqryhFoAx")
          )}
        </span>
      </button>
      <div className="flex gap-2 font-bold">
        <p>{t("zwvq33XTzfCnrvVFACV9Q")}</p>
        <p>
          <Link
            href="login"
            className="flex font-semibold text-backup underline"
          >
            <span>{t("DmVzRidwNhkcwdtojXlpo")}</span>
            <GoArrowUpLeft size={12} />
          </Link>
        </p>
      </div>
    </form>
  );
}
