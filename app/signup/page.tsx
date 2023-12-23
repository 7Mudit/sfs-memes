"use client";

import { FormEventHandler, use, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "react-toastify";
import { connectToDb } from "@/lib/mongoose";

export default function LoginAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // API call to backend
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      // Assuming response contains some success message or user data
      const data = await response.json();
      toast.success("Login Successful");
      // Further actions like redirecting the user or updating the UI
    } catch (err) {
      toast.error("Login failed: " + err);
    }
  };
  return (
    <div className="relative p-24 flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by logging in&nbsp;
          {/* <code className="font-mono font-bold">app/page.tsx</code> */}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
            <h1>Fellow Insiders</h1>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3  flex-col after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1 className="text-[30px] font-bold leading-[42px] tracking-tighter">
          SFS MEMES
        </h1>
        <p>
          <b>~Sponsored</b> By Maria Das
        </p>
      </div>
      <div className="w-full m-auto bg-white flex flex-col items-center justify-center lg:max-w-lg">
        <h2 className={`mb-10  text-2xl font-semibold`}>Sign In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 m-2">
          <Link href="/google">
            <Button variant="outline">
              <FcGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </Link>
          <Link href="/instagram">
            <Button variant="outline">
              <FaInstagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
