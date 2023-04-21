export default function ProfileDropDown() {
  return (
    <>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-primary-green hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-green-500 dark:focus:ring-green-800"
        type="button"
      >
        Josiah Nganga{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownInformation"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-label="dropdownInformationButton"
        >
          <li>
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit Profile
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Logout
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
}
