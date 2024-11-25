"use client";
import { set } from "mongoose";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const [error, setError] = React.useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegistration = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email, password);
    if (!isValidEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 400) {
        setError("Email already exists");
      }
      if (response.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Something went wrong please try again");
      console.log(error);
    }
  };

  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Sign Up</h1>
          <p className="mt-6 ml-1">
            Already have an account ?<Link href="/login">Login</Link>
          </p>
          <div className="bg-black text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5] active:scale-90 flex justify-center items-center gap-4 cursor-pointer ">
            <span className="font-medium text-white group-hover:text-white">
              Login with Github
            </span>
          </div>
          <form onSubmit={handleRegistration}>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                required
                className="font-medium  border-black p-4 outline-0 text-black"
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                required
                className="font-medium  border-black p-4 outline-0 text-black"
              />
            </div>
            <button
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform 
            hover : bg-black/[0.5]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block "
        style={{ backgroundImage: "url('/white.jpg')" }}
      ></div>
    </main>
  );
};

export default Register;
