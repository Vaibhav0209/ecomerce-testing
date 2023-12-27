import React, { useState } from "react";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pnumber: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(data);
  };
  const onSubmitHandler = () => {
    alert(`Your Name : ${data.name} `);
  };
  return (
    <>
      <div className="container flex items-center justify-center h-screen bg-amber-400">
        <form
          className="bg-white w-96 h-96 rounded-lg"
          onSubmit={onSubmitHandler}
        >
          <div className="flex p-4 flex-col justify-center space-y-7 items-center h-full w-full ">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={onChangeHandler}
              className="outline-none focus:border-zinc-600 border-2 bg-neutral-100 rounded-lg p-3 w-full h-10"
            />

            <input
              type="text"
              name="email"
              onChange={onChangeHandler}
              placeholder="Enter Email"
              className="outline-none focus:border-zinc-600 border-2 bg-neutral-100 rounded-lg p-3 w-full h-10"
            />
            <input
              type="text"
              name="pnumber"
              onChange={onChangeHandler}
              placeholder="Enter Text"
              className="outline-none focus:border-zinc-600 border-2 bg-neutral-100 rounded-lg p-3 w-full h-10"
            />
            <button
              type="submit"
              className="w-full ring-2 hover:ring-1 transition hover:text-zinc-700 ring-amber-600 hover:bg-amber-400 rounded-md text-amber-700 h-10 mt-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
