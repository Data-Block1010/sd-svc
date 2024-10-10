"use client";

import OnboardingLayout from "@/src/layout/OnboardingLayout";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { useState } from "react";
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
import StepsContainer from "@/src/components/reuseables/stepSlider";
import {
  useSignInMutation,
  useSignUpMutation,
} from "@/src/hooks/authentication/auth";
import CustomError from "@/src/components/reuseables/CustomError";

function LoginScreen() {
  return (
    <OnboardingLayout>
      <div className="h-[95%] md:h-[73%] w-11/12 md:w-8/12 flex flex-col items-center">
        <h1 className="text-3xl mt-2 font-semibold z-30">Create an account</h1>
        <div className="mt-8 z-30 px-2">
          {/* tabs */}
          <TabComp />
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default LoginScreen;

function TabComp() {
  return (
    <Tabs defaultValue="Login" className="w-[90vw] md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signUp">Sign up</TabsTrigger>
        <TabsTrigger value="Login">Log in</TabsTrigger>
      </TabsList>
      <TabsContent value="signUp">
        <StepsContainer done={() => {}}>
          <SignUp />
          <ChoosePassword />
        </StepsContainer>
      </TabsContent>
      <TabsContent value="Login">
        <Login />
      </TabsContent>
    </Tabs>
  );
}

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
function SignUp(props: any) {
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync, isPending, isError, error } = useSignUpMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await mutateAsync(values); // Await the mutation
      if (res?.data) {
        form.reset();
        form.resetField("password");
        form.resetField("username");
      }
    } catch (err) {
      // Handle error without reloading the page
      console.error("Sign up failed:", err);
    }
  }

  return (
    <div className="mt-8 px-2">
      <CustomError isError={isError} error={error} />
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    type="text"
                    // leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                    className="!rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type={showPassword ? "text" : "password"}
                    rightIcon={
                      <div
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="cursor-pointer hover:scale-105"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </div>
                    }
                    className="!rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {/* <div className='mt-10' /> */}
      <Button
        type="submit"
        className="w-full h-12 z-[9999] bg-primary hover:bg-primary30 rounded-lg text-white mt-4"
        onClick={form.handleSubmit(onSubmit)}
        disabled={isPending}
      >
        {isPending ? "Submitting" : "Get Started"}
      </Button>
    </div>
  );
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync, isPending, isError, error } = useSignInMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await mutateAsync(values); // Await the mutation
      if (res?.data) {
        form.reset();
        form.resetField("password");
        form.resetField("username");
      }
    } catch (err) {
      // Handle error without reloading the page
      console.error("Login failed:", err);
    }
  }

  return (
    <div className="mt-8">
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    // leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                    className="!rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="********"
                      {...field}
                      //   leftIcon={<Lock size="20" variant="Bold" color="gray" />}
                      type={showPassword ? "text" : "password"}
                      rightIcon={
                        <div
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="cursor-pointer hover:scale-105"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </div>
                      }
                      className="pt-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <div className="flex justify-between -mt-2">
            <div className="flex items-center gap-3">
              {/* <Checkbox id="checkbox" name="checkbox" />
              <label
                htmlFor="checkbox"
                className="text-secondary text-sm font-semibold"
              >
                Remember for 30 days
              </label> */}
            </div>
            {/* <Link
              href="/forgot-password"
              className="text-primary text-sm font-semibold hover:underline"
            >
              Forgot Password?
            </Link> */}
          </div>
        </form>
      </Form>

      {/* <div className='mt-10' /> */}
      <Button
        type="button"
        className="w-full h-12 z-[9999] bg-primary hover:bg-primary30 rounded-lg text-white mt-10"
        onClick={form.handleSubmit(onSubmit)}
        disabled={isPending}
      >
        {isPending ? "Logging in" : " Log In"}
      </Button>
      {/* <div className="w-full flex items-center justify-between mt-4">
        <div className="w-[40%] h-px bg-gray-300"></div>
        <p>OR</p>
        <div className="w-[40%] h-px  bg-gray-300"></div>
      </div> */}

      {/* <ConnectButton /> */}

      {/* <div className="flex space-x-2 my-4 justify-center  ">
        <div className="flex items-center gap-3">
          <label
            htmlFor="checkbox"
            className="text-secondary text-sm font-semibold"
          >
            Don&rsquo;t have an account?
          </label>
        </div>
        <Link
          href="/login"
          className="text-primary text-sm font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </div> */}
    </div>
  );
}

function ChoosePassword(props: any) {
  return (
    <div className="flex gap-5 items-center">
      <div className="" onClick={() => props.back()}>
        Back
      </div>
      <div className="" onClick={() => props.back()}>
        Next
      </div>
    </div>
  );
}
