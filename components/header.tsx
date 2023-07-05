export default function Header() {
  return (
    <div className="bg-white max-w-7xl justify-between flex p-2 ">
      <div className="flex bg-black">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="">Your Company</span>
        </a>
      </div>
      <div className="flex">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
