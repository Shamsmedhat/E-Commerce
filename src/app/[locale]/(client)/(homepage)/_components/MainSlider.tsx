"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Heading from "@/components/common/Heading";
import { useTranslations } from "next-intl";

export default function MainSlider() {
  const t = useTranslations();

  return (
    <section className="container mb-[1rem] hidden md:block">
      {/* h2 heading */}
      <Heading>{t("eexZ2Z9kcPg_aoRy2DZ8N")}</Heading>

      {/* This will show only on medium screens */}
      <div className="md:block lg:hidden">
        <MainSectionForMediumScreen />
      </div>

      {/* This will show only on large screens */}
      <div className="hidden lg:block">
        <MainSectionForLargeScreen />
      </div>
    </section>
  );
}

export function MainSectionForMediumScreen() {
  return (
    <ul className="mt-8 grid grid-cols-6 grid-rows-1 gap-3">
      {/* Drinks ------------------------------------------------------------- */}

      <li className="flex flex-col items-start overflow-hidden rounded-lg bg-categories-beverages p-3">
        <span className="rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-zinc-800">
          مشروبات
        </span>
        <p className="mt-3 w-full max-w-[70%] text-lg font-bold text-zinc-800">
          مشروبات باردة وغازية
        </p>
      </li>

      {/* Babies ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-3 before:absolute before:inset-0 before:rounded-lg before:bg-categories-babyAndToddler">
        <span className="relative z-[1] rounded-sm bg-white/50 px-3 py-1 text-xs font-bold text-zinc-800">
          أطفال ورضّع
        </span>
        <p className="relative z-[1] mt-3 max-w-[70%] text-lg font-semibold text-zinc-800">
          منتجات ومستلزمات الأطفال
        </p>
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="before relative flex flex-col items-start p-3 before:absolute before:inset-0 before:rounded-lg before:bg-categories-healthAndPersonalCare">
        <span className="relative z-[1] rounded-sm bg-black/30 px-3 py-1 text-xs text-white lg:font-bold">
          عناية الشخصية
        </span>
        <p className="text-lل relative z-[1] mt-3 max-w-[200px] text-lg font-semibold text-white drop-shadow">
          منتجات العناية الشخصية
        </p>
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-3 before:absolute before:inset-0 before:rounded-lg before:bg-categories-electronics">
        <span className="relative z-[1] self-start rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-zinc-800">
          الكترونيات
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-right text-lg font-semibold uppercase text-zinc-800">
          لابتوب وموبايل وكمبيوتر
        </p>
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-3 before:absolute before:inset-0 before:rounded-lg before:bg-categories-homeAndPetCare">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-normal uppercase text-white">
          منزل وحيوانات أليفة
        </span>
        <p className="text-md relative z-[1] mt-3 max-w-[200px] font-semibold uppercase text-white">
          طعام ومستلزمات الحيوانات الأليفة
        </p>
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-3 before:absolute before:inset-0 before:rounded-lg before:bg-categories-food">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white">
          طعـام
        </span>
        <p className="text-md relative z-[1] mt-3 max-w-[200px] font-semibold uppercase text-white">
          رقائق البطاطس والوجبات الخفيفة والمكسرات
        </p>
      </li>
    </ul>
  );
}

export function MainSectionForLargeScreen() {
  return (
    <ul className="grid h-[80vh] grid-cols-6 grid-rows-3 gap-3">
      {/* Slider ------------------------------------------------------------- */}

      <li className="col-span-4 row-span-2 overflow-hidden rounded-lg">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          <SwiperSlide className="relative">
            <Image
              src="/assets/1.jpg"
              alt="مستلزمات"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src="/assets/2.jpg"
              alt="أجهزة منزلية"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src="/assets/3.jpg"
              alt="موبايلات وهواتف"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </li>

      {/* Drinks ------------------------------------------------------------- */}

      <li className="relative flex flex-col items-start overflow-hidden rounded-lg bg-categories-beverages p-6">
        <span className="rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-zinc-800">
          مشروبات
        </span>
        <p className="z-[1] mt-3 max-w-[70%] text-2xl font-bold text-zinc-800">
          مشروبات باردة وغازية
        </p>
        <Image
          src="/assets/beverages.png"
          alt="مشروبات باردة وغازية"
          width={145}
          height={300}
          priority
          className="translate-y-22 absolute right-[5.9rem] top-[3.4rem] translate-x-7"
        />
      </li>

      {/* Babies ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-babyAndToddler">
        <span className="relative z-[1] rounded-sm bg-white/50 px-3 py-1 text-xs font-bold text-zinc-800">
          أطفال رضّع
        </span>
        <p className="relative z-[1] mt-3 max-w-[70%] text-2xl font-bold text-zinc-800">
          منتجات ومستلزمات الأطفال
        </p>
        <Image
          src="/assets/baby.png"
          alt="الأطفال والرضع"
          width={180}
          height={200}
          priority
          className="absolute md:left-0 md:top-8 md:w-[8rem] md:-translate-x-5 2xl:left-0 2xl:top-0 2xl:w-[10rem] 2xl:-translate-x-20 2xl:-translate-y-5"
        />
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="relative col-span-2 flex flex-col items-start overflow-hidden rounded-lg p-6">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-white">
          عناية الشخصية
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold text-white drop-shadow">
          منتجات العناية الشخصية
        </p>
        <Image
          src="/assets/personal-care.jpg"
          alt="عناية الشخصية"
          fill
          priority
          className="absolute bottom-0 right-0 object-cover"
        />
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-electronics">
        <span className="relative z-[1] self-end rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-zinc-800">
          الكترونيات
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] self-end text-left text-2xl font-bold uppercase text-zinc-800">
          لابتوب وموبايل وكمبيوتر
        </p>
        <Image
          src="/assets/electronics.png"
          alt="لابتوب وموبايل وكمبيوتر"
          width={180}
          height={300}
          priority
          className="translate-y-22 absolute bottom-0 right-0 w-[20rem] translate-x-7"
        />
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start overflow-hidden p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-homeAndPetCare">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white">
          رعـاية الحيوانات أليفة
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          طعام ومستلزمات الحيوانات الأليفة
        </p>
        <Image
          src="/assets/pet.png"
          alt="رعـاية الحيوانات أليفة"
          width={180}
          height={200}
          priority
          className="absolute left-10 top-0 w-[11rem] -translate-x-5 -translate-y-8"
        />
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-food">
        <span className="relative z-[1] rounded-sm bg-primary-foreground/20 px-3 py-1 text-xs font-bold uppercase text-white">
          طعـام
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          رقائق البطاطس والوجبات الخفيفة والمكسرات
        </p>
        <Image
          src="/assets/food.png"
          alt="منظفات"
          width={200}
          height={200}
          priority
          className="absolute left-0 top-0 w-[15rem] -translate-x-5 translate-y-10"
        />
      </li>
    </ul>
  );
}

/*
// "use client";
// import { signInAction } from "@/actions/actions";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "@/navigarion";
// import { Session } from "next-auth";
// import { signIn, useSession } from "next-auth/react";
// import { useTranslations } from "next-intl";
// import { toast } from "react-toastify";
// import { useForm, useFormState } from "react-hook-form";
// import { LoginFormInputs } from "@/lib/types/loginForm";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { output, z } from "zod";
// import { useRef } from "react";

// export default function Login({ session }: { session: Session | null }) {
//   const t = useTranslations();
//   const router = useRouter();
//   // const formRef = useRef<HTMLFormElement>(null);
//   const userName = session?.user?.name?.split(" ").slice(0, 1).join("");

//   async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     // Call server action to handle form data
//     const { username, password } = await signInAction(formData);

//     // Use NextAuth's signIn function on the client side for window issue in server component
//     const result = await signIn("credentials", {
//       redirect: false,
//       username,
//       password,
//     });

//     // Show ui meesage for the user
//     const loginSuccessfully = () =>
//       toast.success(
//         `Logged In Successfully!
//         Welcom ${userName}`,
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         },
//       );

//     const loginFailed = () => {
//       toast.error(`Error: ${result?.error}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     };

//     // Handle errors or success
//     if (result?.error) {
//       loginFailed();
//     } else {
//       router.push("/");
//       loginSuccessfully();
//     }
//   }

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   watch,
//   //   formState: { errors },
//   // } = useForm({
//   //   resolver: zodResolver(
//   //     z.object({
//   //       username: z.string().min(3, t("-sPVtQitY0Jhzx6ENcLR7")).max(20),
//   //       password: z.string().min(6),
//   //     }),
//   //   ),
//   // });

//   return (
//     <form
//       // ref={formRef}
//       onSubmit={handleSignIn}
//       className="space-y-6 p-4"
//     >
//       <div className="flex flex-col gap-3">
//         <Label
//           htmlFor="username"
//           className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
//         >
//           {t("WWMnAVYyfUEaHuf4cn2sj")}
//         </Label>
//         <Input
//           type="text"
//           id="username"
//           placeholder={t("yfG8_RyKe6qOpiJMQeWQt")}
//           className="focus:!outline-primary"
//           defaultValue="exampleusername"
//           // {...register("username")}
//           name="username"
//           required
//         />
//       </div>
//       <div className="flex flex-col gap-3">
//         <Label htmlFor="password">{t("6Ga5ADgKW5t7UIaqd1jBF")}</Label>
//         <Input
//           type="password"
//           id="password"
//           placeholder="••••••"
//           className="focus:!outline-primary"
//           // {...register("password")}
//           name="password"
//           defaultValue="Pass50091"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={false}
//         className="rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
//       >
//         تسـجيل الدخول
//       </button>
//     </form>
//   );
// }

"use client";
import { signInAction } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/navigarion";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";

export default function Login({ session }: { session: Session | null }) {
  const t = useTranslations();
  const router = useRouter();
  const userName = session?.user?.name?.split(" ").slice(0, 1).join("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Call server action to handle form data
    const { username, password } = await signInAction(formData);

    // Use NextAuth's signIn function on the client side for window issue in server component
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    // Show ui meesage for the user
    const loginSuccessfully = () =>
      toast.success(
        `Logged In Successfully!
        Welcom ${userName}`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        },
      );

    const loginFailed = () => {
      toast.error(`Error: ${result?.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };

    // Handle errors or success
    if (result?.error) {
      loginFailed();
    } else {
      router.push("/");
      loginSuccessfully();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4">
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="username"
          className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("WWMnAVYyfUEaHuf4cn2sj")}
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Write your username here..."
          className="focus:!outline-primary"
          defaultValue="exampleusername"
          name="username"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="password">{t("6Ga5ADgKW5t7UIaqd1jBF")}</Label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••"
          className="focus:!outline-primary"
          name="password"
          defaultValue="Pass50091"
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

*/
