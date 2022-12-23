export default function Jumbotron() {
  return (
    <>
      <div class="flex justify-center py-4">
        <button
          type="button"
          class="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          <div class="flex justify-center py-4"></div>
          <svg
            width="42"
            height="30"
            viewBox="0 0 42 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.61538 0C3.39131 0 2.21737 0.486262 1.35181 1.35181C0.486262 2.21737 0 3.39131 0 4.61538L0 22.6465L30.5262 0H4.61538Z"
              fill="#1EB53A"
            />
            <path
              d="M36.9231 29.9999C38.1472 29.9999 39.3211 29.5136 40.1867 28.6481C41.0522 27.7825 41.5385 26.6086 41.5385 25.3845V7.30371L10.9373 29.9999H36.9231Z"
              fill="#00A3DD"
            />
            <path
              d="M36.9231 0H34.0015L0 24.9669V25.3846C0 26.6087 0.486262 27.7826 1.35181 28.6482C2.21737 29.5137 3.39131 30 4.61539 30H7.46192L41.5385 4.98231V4.61538C41.5385 3.39131 41.0522 2.21737 40.1866 1.35181C39.3211 0.486262 38.1472 0 36.9231 0Z"
              fill="#141414"
            />
            <path
              d="M30.5262 0L0 22.6465V24.9669L34.0015 0H30.5262ZM10.9373 30L41.5385 7.30385V4.98231L7.46192 30H10.9373Z"
              fill="#FBD035"
            />
          </svg>
          Tanzania
        </button>
        <button
          type="button"
          class="py-2.5 px-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          All Countries
        </button>
      </div>
      <div class="flex justify-center py-4">
        <div>Invest Now</div>
        <div>Seek Investment</div>
      </div>
    </>
  );
}