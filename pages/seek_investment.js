import Info from "../components/Info";

export default function seek_investment() {
  return (
    <>
      <div class="flex justify-center py-4">
        <div>Invest Now</div>
        <div>Seek Investment</div>
        <button
          type="button"
          class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Login | Register
        </button>
      </div>

      <div class="p-10 grid place-items-center md:grid-cols-3 gap-4">
        <div class="rounded overflow-hidden shadow-lg col-span-1">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="text"
                >
                  Sector
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-text"
                >
                  Region
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-text"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  INvestment
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  USD
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="rounded overflow-hidden shadow-lg col-span-2">
          <Info />
        </div>

        <div class="rounded overflow-hidden shadow-lg col-span-1">
          login to see more{" "}
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.625 13.5625C11.375 13.3125 11.255 13.0104 11.265 12.6562C11.2758 12.3021 11.4062 12 11.6562 11.75L15.1875 8.21875H1.25C0.895833 8.21875 0.59875 8.09875 0.35875 7.85875C0.119584 7.61958 0 7.32292 0 6.96875C0 6.61458 0.119584 6.3175 0.35875 6.0775C0.59875 5.83833 0.895833 5.71875 1.25 5.71875H15.1875L11.625 2.15625C11.375 1.90625 11.25 1.60917 11.25 1.265C11.25 0.921666 11.375 0.625 11.625 0.375C11.875 0.125 12.1721 0 12.5162 0C12.8596 0 13.1562 0.125 13.4062 0.375L19.125 6.09375C19.25 6.21875 19.3387 6.35417 19.3912 6.5C19.4429 6.64583 19.4688 6.80208 19.4688 6.96875C19.4688 7.13542 19.4429 7.29167 19.3912 7.4375C19.3387 7.58333 19.25 7.71875 19.125 7.84375L13.375 13.5937C13.1458 13.8229 12.8596 13.9375 12.5162 13.9375C12.1721 13.9375 11.875 13.8125 11.625 13.5625Z"
              fill="#007FFF"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
