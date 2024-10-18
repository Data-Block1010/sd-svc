import Nav from "../components/reuseables/Nav";
import Image from "next/image";
import { loginImage, logo2 } from "../lib/types/constant";

function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen w-screen">
      <div className="hidden lg:block lg:col-span-2 relative">
        <Image
          src={loginImage}
          className="absolute -top-8 md:-top-5 xl:-top-20 left-[0%] md:left-[3%] lg:left-[14%] xl:left-[23%]"
          alt="pattern"
          fill
        />
      </div>
      <div className="col-span-1 lg:col-span-3 h-full overflow-y-scroll relative flex items-center justify-center">
        <div className="absolute left-8 top-8 h-12 w-[150px] md:w-[197px]">
          <Image src={"/images/logo.svg"} fill alt="logo" />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={logo2}
            className="absolute -top-8 md:-top-5 xl:-top-20 left-[0%] md:left-[3%] lg:left-[14%] xl:left-[23%]"
            alt="pattern"
            width={768}
            height={768}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default OnboardingLayout;
