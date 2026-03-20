import React from "react";
import { Facebook, Linkedin, TwitterIcon } from "lucide-react";
function Login() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-3 ">
        <img src="./public/image.png" className="h-[60vh]" alt="image" />

        <p className="text-2xl">Sing up with</p>
        <div className="flex gap-2">
          <Facebook className="bg-blue-500 p-1 w-[40px] h-[30px] rounded-[50%]" />
          <TwitterIcon className="bg-blue-500 p-1 w-[40px] h-[30px] rounded-[50%]" />
          <Linkedin className="bg-blue-500 p-1 w-[40px] h-[30px] rounded-[50%]" />
        </div>
      </div>

      {/* email and password buttons */}
      <div className="flex gap-2 flex-col items-center justify-center ">
        <input
          type="email"
          placeholder="enter email"
          className="outline-none rounded px-3 py-2 active:scale-99 "
        />
        <input
          type="password"
          placeholder="enter password"
          className=" rounded px-3 py-2 active:scale-99 "
        />
        <button className="text-white upperCase bg-blue-600 px-4 py-2 rounded  font-semibold hover:bg-blue-700 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
