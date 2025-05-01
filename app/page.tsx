"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { IconWorld, IconBrandTelegram, IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Website",
    icon: IconWorld,
    href: "https://murphyai.dev/",
    label: "Visit Website",
  },
  {
    name: "Twitter",
    icon: IconBrandX,
    href: "https://x.com/murphyaidev",
    label: "Follow on X (Twitter)",
  },
  {
    name: "Github",
    icon: IconBrandGithub,
    href: "https://github.com/Murphy-CodeLabs",
    label: "View on Github",
  },
  {
    name: "Telegram",
    icon: IconBrandTelegram,
    href: "https://t.me/murphyaidev",
    label: "Join Telegram Group",
  },
];

export default function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className={cn("relative z-20")}>
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="w-24 h-24 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/logo-murphy.svg"
                alt="Murphy Logo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-white">Murphy</h1>
              <span className="text-2xl">🪐</span>
            </div>

            <p className="text-center text-lg text-white/90 max-w-2xl font-mono">
              Build on Solana at the speed of light.
            </p>
          </div>

          {/* Social Links */}
          <div className="hidden  md:flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className={`group relative flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-md
                  hover:w-32 hover:shadow-lg transition-all duration-300 ease-in-out
                  ${link.name === "Website" && "hover:bg-emerald-500"}
                  ${link.name === "Twitter" && "hover:bg-black"}
                  ${link.name === "Github" && "hover:bg-gray-800"}
                  ${link.name === "Telegram" && "hover:bg-[#229ED9]"}`}
              >
                <div className="absolute left-0 w-12 flex justify-center">
                  <link.icon
                    className={`w-6 h-6 text-gray-700 group-hover:text-white transition-all duration-300`}
                    size={24}
                    stroke={1.5}
                  />
                </div>
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pl-8">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Links */}
          <div className="md:hidden space-y-4 p-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="block w-full p-4 bg-white/10 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:bg-white/20 transition-all duration-200 text-center font-medium text-white border border-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
