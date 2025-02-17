import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Login</h1>
          <p className="mt-6 ml-1">
            New Account ? <Link href="/register">{"  "}Register</Link>
          </p>
          <div className="bg-black text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5] active:scale-90 flex justify-center items-center gap-4 cursor-pointer ">
            <span className="font-medium text-white group-hover:text-white">
              Login with Github
            </span>
          </div>
          <form>
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
              Sign In
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

export default Login;
