import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [forms, setForms] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, gender } = formData;

    if (!name || !age || !gender) {
      alert("fill details");
      return;
    }

    setForms((prev) => [...prev, formData]);

    setFormData({
      name: "",
      age: "",
      gender: "",
    });
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="min-h-[210px] rounded-lg shadow-xl p-4 flex flex-col gap-2 bg-gradient-to-r from-blue-100 to-purple-200 "
      >
        <label className="text-md font-bold uppercase">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          className="border px-4 py-2 rounded-xl  "
          onChange={handleChange}
        />

        <br />

        <label className="text-md font-bold uppercase">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          className="border px-4 py-2 rounded-xl "
          onChange={handleChange}
        />

        <br />

        <label className="text-md font-bold uppercase">Gender</label>
        <select
          name="gender"
          className="border px-4 py-2 rounded-xl "
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <br />

        <button className="bg-blue-500 px-4 py-2 rounded-xl " type="submit">
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      {forms.map((item, idx) => (
        <div
          key={idx}
          className="mt-4  p-4 border border-gray-400 rounded-xl bg-stale-400 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <p className="text-md font-bold text-gray-600">Name: {item.name}</p>
          <p className="text-md font-bold text-gray-600">Age: {item.age}</p>
          <p className="text-md font-bold text-gray-600">
            Gender: {item.gender}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Form;
