import { useState } from "react";
const DropDown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const options = ["test", "twst2", "sdfsdf"];
  const handleOptions = (e) => {};
  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        data-dropdown-toggle="dropdown"
        onClick={(e) => setShowOptions(!showOptions)}
      >
        Dropdown button
      </button>
      {/* <div
        className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
        id="dropdown"
      > */}
      {/* <div className="px-4 py-3">
          <span className="block text-sm">Bonnie Green</span>
          <span className="block text-sm font-medium text-gray-900 truncate">
            name@flowbite.com
          </span>
        </div> */}
      {showOptions && (
        <ul className="py-1" aria-labelledby="dropdown">
          {options &&
            options.map((option) => (
              <li>
                <a
                  href="#"
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                >
                  {option}
                </a>
              </li>
            ))}
        </ul>
      )}
      {/* </div> */}
    </>
  );
};

export default DropDown;
