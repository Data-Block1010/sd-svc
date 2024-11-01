"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

const WaitlistScreen = () => {
  return (
    <div className="w-screen min-h-screen bg-waitlist-black-700 grid grid-cols-2 gap-10 lg:gap-0">
      <div className="order-2 lg:order-1 col-span-2 lg:col-span-1 lg:border-r border-px border-waitlist-black-400 px-4 xl:!px-[50px] flex items-center justify-center">
        <ColumnOne />
      </div>
      <div className="order-1 lg:order-2 col-span-2 lg:col-span-1 relative flex items-center justify-center">
        <ColumnTwo />
        <Image
          src={"/images/waitlistbg.png"}
          //   layout="fill"
          width={500}
          height={500}
          alt="waitlist"
          className="absolute top-0 left-0 h-4/6 opacity-30 rounded-b-full w-full"
        />
      </div>
    </div>
  );
};

export default WaitlistScreen;

const data = [
  {
    image: "/images/message-chat-circle.png",
    title: "Save Money for Businesses",
    body: "With reusable KYC verification and automation, the platform cuts down on KYC compliance costs.",
  },
  {
    image: "/images/zap.png",
    title: "No More Repetitive Tasks for Users",
    body: "Users only need to complete their KYC once and can use their verified identity across multiple platforms, eliminating the need to upload documents and go through multiple checks.",
  },
  {
    image: "/images/chart-breakout-square.png",
    title: "Stay Safe and Private",
    body: "Using IPFS, blockchain, and ZKPs, the platform keeps sensitive data safe, encrypted, and only shared with the right people.",
  },
  {
    image: "/images/chart-breakout-square.png",
    title: "Compliance Made Easy",
    body: "Our platform gives businesses real-time updates so they can stay up-to-date with local and global KYC/AML regulations, making compliance a breeze.",
  },
];
function ColumnOne() {
  return (
    <div className="text-waitlistText w-11/12 pb-10">
      <h1 className="text-4xl">Overflowing with useful features</h1>
      <p className="mt-5 text-base font-normal lg:text-lg text-waitlist-black-100">
        Say goodbye to costly KYC procedures and hello to a hassle-free
        experience for both businesses and users. With our platform, you can
        complete KYC only once, and we take data safety and privacy seriously,
        using encryption and selective sharing to keep your information secure.
      </p>
      <div className="mt-8 space-y-12">
        {data.map((_, i) => (
          <div className="flex gap-4" key={i}>
            <div className="rounded-lg relative h-12 w-12 shrink-0 bg-waitlist-black-400 flex items-center justify-center">
              <Image src={_?.image} width={24} height={24} alt="waitlist" />
            </div>
            <div className="">
              <h3 className="text-lg text-waitlistText">{_.title}</h3>
              <p className="text-waitlist-black-100 font-normal text-sm">
                {_.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "This field is required",
    })
    .email("Enter a valid email address."),
});

function ColumnTwo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
    } catch (err) {
      // Handle error without reloading the page
      console.error("Sign up failed:", err);
    }
  }

  return (
    <div className="w-11/12 xl:w-6/12 z-50">
      <h1 className="text-waitlistText text-center text-3xl mt-16 lg:mt-0">
        Ready for a New KYC Experience?
      </h1>
      <p className="mt-5 font-normal text-lg text-waitlist-black-100 text-center">
        Join the waitlist for a seamless, one-time KYC experience that’s secure,
        simple, and hassle-free!
      </p>
      <div className="items-center z-40 justify-center flex-col mt-8 w-full space-y-8">
        <Image
          src="/images/Avatargroup.png"
          alt="avatar"
          width={208}
          height={40}
          className="mx-auto"
        />
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Tell us your name"
                      {...field}
                      type="text"
                      // leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                      className="!rounded-lg h-10 border-waitlist-black-300 !bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      type="email"
                      className="!rounded-lg h-10 border-waitlist-black-300 bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="text-waitlistText bg-[#7F56D9] rounded-full h-[60px] w-full">
              Join the waitlist
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
