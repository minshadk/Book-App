const TextInput = ({ type, placeHolder, textValue, setText }) => {
  const handleTextInput = (textValue) => {
    setText(textValue);
  };
  return (
    <div>
      <input
        // id="email-address"
        // name={name}
        type={type}
        // autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 my-5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeHolder}
        onChange={(e) => handleTextInput(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
