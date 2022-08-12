const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 " >
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" class="flex">
          <span class="self-center text-lg font-semibold whitespace-nowrap">
            BuchThings
          </span>
        </a>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Browse  Books
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Login
              </a>
            </li>
            <li>
              {/* <a
                href="#"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
