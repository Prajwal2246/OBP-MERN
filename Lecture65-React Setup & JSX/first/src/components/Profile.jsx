import React from "react";

function Profile() {
  const date = new Date();
  return (
    <div className=" w-full bg-gray-100 px-4">
      <div className="mx-2 mb-4  max-w-[90px] ">
        <h2 className="font-bold ">Welcome,Prajwal</h2>
        <p>{date.toLocaleString()}</p>
      </div>
      <div className="flex w-[90vw] mt-2 ">
        <img
          className="h-12 w-14"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-500 ">Prajwal Janbandhu</p>
          <div className="flex w-[90vw] justify-between">
            <p className="text-sm font-500">prajwal3274@gmail.com</p>
            <button className="border px-4 py-2 rounded-xl text-white bg-blue-600">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="hidden  grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-gray-700">Full Name</h3>
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your first name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-gray-700">Last Name</h3>
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your last name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-gray-700">Gender</h3>
          <select name="" id=""  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="#">Select Gender</option>
            <option value="male">Male</option>
            <option value="femal">Female</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-gray-700">Last Name</h3>
          <select name="" id=""  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="#">Country</option>
            <option value="ind">India</option>
            <option value="usa">USA</option>
            <option value="france">France</option>
          </select>
        </div>
        <button className="border px-4 py-2 rounded-xl text-white bg-blue-600  w-20" >Save</button>
      </div>

    </div>
  );
}

export default Profile;
