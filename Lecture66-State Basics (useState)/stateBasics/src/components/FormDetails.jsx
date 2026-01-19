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
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center border p-2 m-2"
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
          className="outline-none bg-gray-300  rounded-2xl px-4 py-2 mb-3"
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={age}
          placeholder="enter age"
          className="outline-none bg-gray-300  rounded-2xl px-4 py-2 mb-3"
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
          className="outline-none bg-blue-500 transition hover:scale-105 text-white font-semibold  px-4 py-2 rounded-2xl self-center"
        >
          Submit
        </button>
      </form>

      {formDetails &&
        formDetails.map((obj, idx) => {
          return (
            <div key={idx} className="border flex flex-col gap-1 rounded-xl">
              <h1>{obj.name}</h1>
              <p>{obj.age}</p>
              <p>{obj.gender}</p>
            </div>
          );
        })}
    </>
  );
}

export default FormDetails;
