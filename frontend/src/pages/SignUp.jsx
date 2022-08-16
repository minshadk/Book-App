import TextInput from "../components/Inputs/TextInput";

const SignUp = () => {
  return (
    <>
      <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {/*  placeHolder, type */}
              <TextInput placeHolder={"User Name"} type={"string"} />
              <TextInput placeHolder={"Password"} type={"password"} />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
