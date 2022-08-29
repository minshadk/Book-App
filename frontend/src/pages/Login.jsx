import { useState } from "react";

import TextInput from "../components/Inputs/TextInput";

const Login = () => {
  const [userName, setUserName] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFormSubmit = async () => {
    const userDetails = {
      userName,
      // email,
      password,
    };
    console.log(userDetails);
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    localStorage.setItem("token", json.data.userData.token);
    console.log(json.data.userData.token);
    // if (response.ok) console.log("you logedn in sussefully");
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login in to your account
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {/*  placeHolder, type */}
              <TextInput
                placeHolder={"User Name"}
                type={"string"}
                textValue={userName}
                setText={setUserName}
              />
              {/* <TextInput
                placeHolder={"Email"}
                type={"string"}
                textValue={email}
                setText={setEmail}
              /> */}
              <TextInput
                placeHolder={"Password"}
                type={"password"}
                textValue={password}
                setText={setPassword}
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Login in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
