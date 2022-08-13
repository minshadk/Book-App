import { useState } from "react";
const DropDown = ({ options, label, setOption, optionValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [buttonLabel, setButtonLable] = useState(label);
  const handleOptions = (option) => {
    setOption(option);
    setButtonLable(option);
    setShowOptions(false);
  };
  return (
    <div className=" py-2 ">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full "
        type="button"
        data-dropdown-toggle="dropdown"
        onClick={(e) => setShowOptions(!showOptions)}
      >
        {buttonLabel}
      </button>
      {showOptions && (
        <ul className="py-1" aria-labelledby="dropdown">
          {/* <select>
                
            </select> */}
          {options &&
            options.map((option) => (
              <option
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                onClick={(e) => {
                  handleOptions(option);
                }}
              >
                {option}
              </option>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
