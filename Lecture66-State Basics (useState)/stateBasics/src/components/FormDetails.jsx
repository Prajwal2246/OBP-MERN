import React, { useState } from "react";

function FormDetails() {
  let [formDetails, setFormDetails] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !age || !gender) {
      alert("fill all details");
      return;
    }
    let obj = {
      name,
      age,
      gender,
    };
    setFormDetails((formDetails) => [...formDetails, obj]);
    setName("");
    setAge("");
    setGender("");
  }

  //   function handleChange(e){
  //     console.log(e);
  //   }

  return (
    <>
      <div
        className="fixed inset-0 -z-10
    bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200
    blur-2xl"
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-10 px-4">
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-md
        bg-white
        rounded-xl shadow-xl
        p-8 flex flex-col gap-5"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="enter name"
            className="outline-none bg-slate-300  rounded-md px-4 py-2 mb-3"
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            placeholder="enter age"
            className="outline-none bg-slate-300  rounded-md px-4 py-2 mb-3"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <div className="flex gap-2 mb-3">
            <label>Gender</label>
            <input
              type="radio"
              value="male"
              checked={gender == "male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            Male
            <input
              type="radio"
              value="female"
              checked={gender == "female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            Female
          </div>
          <button
            type="submit"
            className="outline-none bg-black w-full transition hover:scale-105 text-white font-semibold  py-3 rounded-md self-center"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-4 p-12 w-[700px]">
        {formDetails.map((obj, idx) => (
          <div
            key={idx}
            className="bg-white 
            border border-slate-200
            rounded-xl p-4 w-56
            shadow-sm"
          >
            <div className="flex flex-col space-y-1 min-full">
              <div className="flex justify-between w-full">
                <h3 className="font-medium text-slate-800">Name:</h3>
                <span className="text-slate-800">{obj.name.toUpperCase()}</span>
              </div>
              <p className="text-sm text-slate-600">Age: {obj.age}</p>
              <p className="text-sm text-slate-600 capitalize">
                Gender: {obj.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FormDetails;
