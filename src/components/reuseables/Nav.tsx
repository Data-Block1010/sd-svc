"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileSideBar from "./mobileSideBar";
import Link from "next/link";

function Nav() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className=" h-[80px] lg:h-[40px] flex items-center justify-between lg:items-center lg:justify-end">
				<div className="relative h-12 w-[150px] md:w-[197px] lg:hidden">
					<Image
						src={"/images/logo.svg"}
						fill
						alt="logo"
					/>
				</div>
				<div className="flex items-center gap-4">
					{pathname.includes("/dashboard") && (
						<div className="hidden md:block">
							<ConnectButton />
						</div>
					)}
					<div>
						{pathname.includes("/dashboard") && (
							<Button
								onClick={() => setIsOpen(!isOpen)}
								className="xl:hidden">
								<Menu />
							</Button>
						)}
					</div>
					{pathname === "/" && (
						<Link
							href="/login"
							className="text-white text-xs hover:scale-105 transition-all duration-200 ease-in-out bg-primary px-6 rounded-lg py-3">
							Get Started
						</Link>
					)}
				</div>
				<MobileSideBar
					onClose={() => setIsOpen(!isOpen)}
					isOpen={isOpen}
				/>
			</nav>
			{pathname.includes("/dashboard") && (
				<div className="px-2.5 mb-2.5 md:hidden">
					<ConnectButton />
				</div>
			)}
		</>
	);
}

export default Nav;
