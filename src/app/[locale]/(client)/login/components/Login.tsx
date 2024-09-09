import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Login() {
  return (
    <form action="" className="space-y-6 p-4">
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          البريد الإلكتروني
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="m@example.com"
          className="focus:!outline-primary"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="password">كلمة المرور</Label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••"
          className="focus:!outline-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
      >
        تسـجيل الدخول
      </button>
    </form>
  );
}
