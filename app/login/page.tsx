"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "react-toastify";
import { createLoginEntry } from "@/lib/actions/form.action";

export default function LoginAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to backend
      const response = await createLoginEntry(email, password);

      // Assuming response contains some success message or user data
      console.log(response);
      toast.success("Will get confirmation");
      // Further actions like redirecting the user or updating the UI
    } catch (err) {
      toast.error("Login failed: " + err);
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Log in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit}>
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
                Enter credentials for any of these
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 m-2">
            <Button variant="outline">
              <FcGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline">
              <FaInstagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
          </div>

          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Don&apos;t have an account?{" "}
            <Link href="/signup" className=" text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
