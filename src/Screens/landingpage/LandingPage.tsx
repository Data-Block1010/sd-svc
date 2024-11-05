"use client";
import Nav from "@/src/components/reuseables/Nav";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";

import { Star } from "lucide-react";

function LandingPage() {
  const perks = [
    {
      icon: <Image src="/secure.svg" height={300} width={300} alt="secure" />,
      name: "Ultimate Data Privacy",
      description:
        "Your data is your own. Guard Zero uses Zero-Knowledge Proofs to verify your information without exposing it, ensuring maximum privacy.",
      Button: <a href="">Learn more</a>,
    },

    {
      icon: <Image src="/zaps.svg" height={300} width={300} alt="secure" />,
      name: "Blockchain Security",
      description:
        "Built on blockchain technology, Guard Zero ensures that your data is immutable and securely stored, free from unauthorized access.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/message.svg" height={300} width={300} alt="secure" />,
      name: "Decentralized Control",
      description:
        "Enjoy full control over your data. Decide who gets access and how much they can see, all through a user-friendly interface.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/smile.svg" height={300} width={300} alt="secure" />,
      name: "Seamless Integration",
      description:
        "Easily integrate SecureData with external platforms such as government services, financial institutions, and more, all while maintaining your privacy.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/twist.svg" height={300} width={300} alt="secure" />,
      name: "Cross-Platform Access",
      description:
        "Manage your data securely from any device—whether on desktop, tablet, or mobile—with a consistent and responsive experience.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/heart.svg" height={300} width={300} alt="secure" />,
      name: "Real-Time Notifications",
      description:
        "Stay informed with instant updates on data uploads, verification statuses, and access logs.",
      Button: <a href="">Learn more</a>,
    },
  ];
  return (
    <>
      <div className="bg-[#00140F]">
        <div className="bg-[#00140F] px-2 md:px-5 md:py-4 sm:flex-col-1">
          <Nav />

          <Slide direction="up" damping={0.3} triggerOnce cascade>
            {/* Hero section */}
            <div className="bg-[#065646] my-10 mx-auto w-11/12 py-12 rounded-lg">
              <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:pl-12 lg:pr-0">
                <div className="flex flex-col justify-center mb-8 lg:mb-0 lg:w-1/2">
                  <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <span className="text-[#26FCD1]">Secure</span> Your Data,{" "}
                    <span className="block mt-2">Protect Your Privacy.</span>
                  </h1>
                  <p className="text-white text-sm md:text-base mt-4 lg:mt-8 text-center lg:text-left">
                    Experience the Future of Data Management with
                    <br className="hidden md:inline" /> Zero-Knowledge Proofs
                  </p>
                  {/* Uncomment and adjust as needed
                <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center lg:justify-start">
                  <Input placeholder="Enter your email" className="w-full sm:w-auto" />
                  <Button className="h-11 w-full sm:w-auto mt-3 sm:mt-0">Get Started</Button>
                </div>
                */}
                  <p className="text-white text-xs md:text-sm mt-3 text-center lg:text-left">
                    We care about your data in our{" "}
                    <a href="" className="underline">
                      privacy policy.
                    </a>
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end lg:w-1/2">
                  <Image
                    src="/hero.svg"
                    height={500}
                    width={500}
                    alt="hero"
                    className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                  />
                </div>
              </div>
            </div>

            {/* Features section */}
            <div className="max-w-[95%] mx-auto p-4 sm:p-8">
              <h1 className="text-white text-lg sm:text-xl">Features</h1>
              <h1 className="text-xl sm:text-xl lg:text-4xl text-white font-bold mt-2">
                Why Choose Guard Zero?
              </h1>
              <p className="text-white mt-2 w-full sm:w-3/4 md:w-2/3 lg:w-5/12 text-sm sm:text-base">
                Guard Zero is designed to handle a wide range of personal and
                professional information securely.
              </p>
            </div>
          </Slide>
          <div className=" max-w-[95%] mx-auto grid grid-cols-1 gap-y-8 sm:gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 bg-[#00140F] mt-4 sm:mt-8 px-4 sm:px-8 pb-20">
            <Slide direction="up" damping={0.3} triggerOnce cascade>
              {perks.map((perk) => (
                <div key={perk.name}>
                  <div className="flex-shrink-0 mb-4">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-full">
                      {perk.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {perk.name}
                    </h3>
                    <p className="mt-2 text-sm text-white">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <Slide direction="up" damping={0.3} triggerOnce cascade>
          {/* Testimonial section */}
          <section className="bg-[#04483A] px-4 sm:px-6 lg:px-20 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 py-10">
            <div className="flex justify-start w-full lg:w-auto">
              <Image
                src="/ma.svg"
                height={350}
                width={350}
                alt="ma"
                className="shrink-0 w-full md:max-w-[300px] lg:max-w-[350px]"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="flex space-x-2">
                <Star className="text-yellow-200 " fill="yellow" />
                <Star className="text-yellow-200 " fill="yellow" />
                <Star className="text-yellow-200 " fill="yellow" />
                <Star className="text-yellow-200 " fill="yellow" />
                <Star className="text-yellow-200 " fill="yellow" />
              </div>
              <div className="text-left">
                <h1 className="text-lg mt-2 lg:text-3xl font-bold text-white font-Inter">
                  The integration with government services has made my work so
                  much easier. I can securely share verified documents with just
                  a few clicks.
                </h1>
                <h2 className="text-white font-bold mt-4 text-lg">- Jane D</h2>
                <p className="text-white text-sm">Financial Analyst</p>
              </div>
            </div>
          </section>
        </Slide>
        {/* FAQ section */}
        <section className="bg-[#101a1f] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Frequently asked questions
              </h1>
              <p className="text-[#cfcfcf]">
                Everything you need to know about the product and billing.
                Can&apos;t find the answer <br /> you&apos;re looking for?
                Please{" "}
                <a href="#" className="text-[#6fcf97] hover:underline">
                  chat to our friendly team
                </a>
                .
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <Slide direction="up" damping={0.3} triggerOnce cascade>
                  <div className=" p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                        <Image
                          src="/smile.svg"
                          height={200}
                          width={200}
                          alt="smile"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        What is SecureData DApp?
                      </h3>
                      <p className="text-[#cfcfcf]">
                        SecureData is a decentralized application (DApp) that
                        allows you to securely manage and verify your sensitive
                        data using advanced cryptographic techniques like
                        Zero-Knowledge Proofs (ZKP). It ensures that your data
                        remains private while still being verifiable.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                        <Image
                          src="/arr.svg"
                          height={200}
                          width={200}
                          alt="smile"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        How does Zero-Knowledge Proof (ZKP) technology work?
                      </h3>
                      <p className="text-[#cfcfcf]">
                        ZKP allows for data verification without revealing the
                        actual data. It enables one party to prove to another
                        that a statement is true without conveying any
                        additional information beyond the fact that the
                        statement is true. In SecureData, this means your data
                        can be verified without exposing the details.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                        <Image
                          src="/circle.svg"
                          height={200}
                          width={200}
                          alt="smile"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        What happens if my data verification fails?
                      </h3>
                      <p className="text-[#cfcfcf]">
                        If a verification attempt fails, you will be notified
                        immediately, and you can request a re-verification. The
                        platform will provide details on the failure, so you can
                        address any issues before trying again.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
              <Slide direction="up" damping={0.3} triggerOnce delay={3}>
                <div className="">
                  <Image
                    src={"/images/laptop.svg"}
                    alt="Person working on a laptop"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </Slide>
            </div>
          </div>
        </section>

        {/* Editorial section */}
        <Slide direction="up" damping={0.3} triggerOnce cascade>
          <section className="bg-[#04483A] p-4 py-10 sm:p-6 md:p-10 flex justify-center">
            <div className="bg-[#F9FAFB] rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-7xl">
              <div className="flex flex-col lg:flex-row items-start">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-8 lg:mt-10">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-left">
                    Ready to take control of your data?
                  </h1>
                  <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg lg:text-xl text-left">
                    Whether you&apos;re protecting personal documents or
                    managing sensitive business information, SecureData is the
                    trusted solution for secure data management.
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      variant="ghost"
                      className="w-full sm:w-auto border border-secondary bg-white"
                    >
                      Learn More
                    </Button>
                    <Button className="w-full sm:w-auto">Get Started</Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <Image
                    src="/mock.svg"
                    height={600}
                    width={600}
                    alt="mock"
                    className="w-full max-w-[400px] lg:max-w-[600px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer section */}
          <section>
            <footer className="bg-[#00140F] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="space-y-4">
                  {/* <h2 className="text-lg font-bold">SecureData</h2> */}
                  <div className="relative h-12 w-[150px] md:w-[197px]">
                    <Image src={"/images/logo.svg"} fill alt="logo" />
                  </div>
                  <p className="text-sm">
                    SecureData is designed to handle a wide range of personal
                    and professional information securely.
                  </p>
                </div>

                {/* Product Links */}
                <div>
                  <h3 className="text-md font-semibold mb-2">Product</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:underline">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Solutions{" "}
                        <span className="bg-gray-800 text-xs py-1 px-2 rounded-full ml-1">
                          New
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Releases
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="text-md font-semibold mb-2">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:underline">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Help centre
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Subscribe Form */}
                <div className="mr-10">
                  <h3 className="text-md font-semibold mb-2">
                    Stay up to date
                  </h3>
                  <form className="flex  flex-col space-y-2 space-x-2 md:space-y-0 md:flex-row ">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 text-black rounded-md focus:outline-none"
                    />
                    <Button className="w-full sm:w-auto">Get Started</Button>
                  </form>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-gray-400 text-center">
                <p>© 2024 Guard Zero. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <Link href="#" className="hover:underline">
                    Terms
                  </Link>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                  <Link href="#" className="hover:underline">
                    Cookies
                  </Link>
                </div>
              </div>
            </footer>
          </section>
        </Slide>
      </div>
    </>
  );
}

export default LandingPage;
