import Image from "next/image";
import aboutImg from "../public/img/about.png";

export default function about() {
  return (
    <>
      <div class="grid  place-items-center">Our Mission</div>
      <div class="grid  place-items-center">
        Sed in tristique vulputate sit. Tempus massa felis nisl habitasse neque
        tellus semper. Tempus ultrices eget id mauris. Mauris nisi praesent at
        mauris rhoncus nec leo pulvinar suspendisse. Ut massa viverra erat
        sodales dolor. At mauris egestas porttitor placerat.{" "}
      </div>
      <Image src={aboutImg} alt="about" />
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="p-4">
                <p class="text-sm">
                  Turpis purus pellentesque quis senectus aenean sed adipiscing.
                  Sit porttitor pellentesque ac nunc at id faucibus eget. Morbi
                  vitae tellus enim mauris viverra et. Adipiscing lobortis
                  venenatis eleifend sed ornare id. Mattis a accumsan sed
                  faucibus. Lectus integer ullamcorper varius et justo amet.
                  Adipiscing hac diam magna aliquam nulla vel. Tellus neque eget
                  et nisi nec elit sed. Vitae ipsum sed a lacus id id. Leo quis
                  eu viverra mi ac amet donec. Turpis gravida suspendisse justo
                  sed. Et elit cursus sollicitudin malesuada nulla fermentum at.
                  Odio nisl volutpat porttitor libero ultricies vel habitant
                  convallis sagittis. Amet viverra congue dictum enim laoreet.
                  Commodo amet turpis malesuada magnis at rhoncus tristique sit.
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="p-4">
                <p class="text-sm">
                  Faucibus integer gravida semper sagittis. Sed elit et aenean
                  leo iaculis. Fermentum placerat sagittis viverra elit et mi.
                  Dignissim quis cum tortor elit metus. Sed nascetur scelerisque
                  aliquam non non dignissim penatibus risus. Tincidunt magnis
                  mauris pellentesque egestas eget et eget risus scelerisque.
                </p>
                <button
                  type="button"
                  class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Email us
                </button>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="p-4">
                <p class="text-sm">
                  <svg
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.08333 18.875C1.51042 18.875 1.02014 18.6712 0.6125 18.2635C0.204167 17.8552 0 17.3646 0 16.7917V2.20833C0 1.63542 0.204167 1.14479 0.6125 0.736458C1.02014 0.328819 1.51042 0.125 2.08333 0.125H22.9167C23.4896 0.125 23.9802 0.328819 24.3885 0.736458C24.7962 1.14479 25 1.63542 25 2.20833V16.7917C25 17.3646 24.7962 17.8552 24.3885 18.2635C23.9802 18.6712 23.4896 18.875 22.9167 18.875H2.08333ZM16.5625 16.7917H22.9167V2.20833H2.08333V16.7917H2.1875C2.91667 15.4896 3.92361 14.4694 5.20833 13.7312C6.49306 12.9937 7.88194 12.625 9.375 12.625C10.8681 12.625 12.2569 12.9937 13.5417 13.7312C14.8264 14.4694 15.8333 15.4896 16.5625 16.7917ZM9.375 11.5833C10.2431 11.5833 10.9809 11.2795 11.5885 10.6719C12.1962 10.0642 12.5 9.32639 12.5 8.45833C12.5 7.59028 12.1962 6.85243 11.5885 6.24479C10.9809 5.63715 10.2431 5.33333 9.375 5.33333C8.50694 5.33333 7.7691 5.63715 7.16146 6.24479C6.55382 6.85243 6.25 7.59028 6.25 8.45833C6.25 9.32639 6.55382 10.0642 7.16146 10.6719C7.7691 11.2795 8.50694 11.5833 9.375 11.5833ZM19.0365 15.099C19.2274 15.2899 19.4705 15.3767 19.7656 15.3594C20.0608 15.342 20.3038 15.2378 20.4948 15.0469L21.224 14.3177C21.4149 14.1267 21.5191 13.901 21.5365 13.6406C21.5538 13.3802 21.4844 13.1458 21.3281 12.9375L20.625 12C20.5382 11.8611 20.4208 11.7569 20.2729 11.6875C20.1257 11.6181 19.9653 11.5833 19.7917 11.5833H18.5938C18.4896 11.2708 18.4028 10.9365 18.3333 10.5802C18.2639 10.2247 18.2292 9.86458 18.2292 9.5C18.2292 9.13542 18.2639 8.78403 18.3333 8.44583C18.4028 8.10694 18.4896 7.76389 18.5938 7.41667H19.7917C19.9653 7.41667 20.1257 7.38194 20.2729 7.3125C20.4208 7.24305 20.5382 7.13889 20.625 7L21.3281 6.0625C21.4844 5.85417 21.5538 5.61979 21.5365 5.35937C21.5191 5.09896 21.4149 4.87326 21.224 4.68229L20.4948 3.95312C20.3038 3.76215 20.0608 3.65799 19.7656 3.64062C19.4705 3.62326 19.2274 3.71007 19.0365 3.90104C18.3073 4.63021 17.7302 5.48542 17.3052 6.46667C16.8795 7.44722 16.6667 8.45833 16.6667 9.5C16.6667 10.5417 16.8795 11.5528 17.3052 12.5333C17.7302 13.5146 18.3073 14.3698 19.0365 15.099ZM4.73958 16.7917H14.0104C13.4201 16.1319 12.7215 15.6198 11.9146 15.2552C11.1069 14.8906 10.2604 14.7083 9.375 14.7083C8.48958 14.7083 7.64757 14.8906 6.84896 15.2552C6.05035 15.6198 5.34722 16.1319 4.73958 16.7917ZM9.375 9.5C9.07986 9.5 8.83264 9.4 8.63333 9.2C8.43333 9.00069 8.33333 8.75347 8.33333 8.45833C8.33333 8.16319 8.43333 7.91562 8.63333 7.71562C8.83264 7.51632 9.07986 7.41667 9.375 7.41667C9.67014 7.41667 9.91771 7.51632 10.1177 7.71562C10.317 7.91562 10.4167 8.16319 10.4167 8.45833C10.4167 8.75347 10.317 9.00069 10.1177 9.2C9.91771 9.4 9.67014 9.5 9.375 9.5Z"
                      fill="black"
                    />
                  </svg>
                  Alpha (T) Company Ltd <br />
                  info@alpha.co.tz <br />
                  +255714 213123
                </p>

                <p>
                  <svg
                    width="18"
                    height="25"
                    viewBox="0 0 18 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M8.75 5.625C9.5788 5.625 10.3737 5.95424 10.9597 6.54029C11.5458 7.12634 11.875 7.9212 11.875 8.75C11.875 9.16038 11.7942 9.56674 11.6371 9.94589C11.4801 10.325 11.2499 10.6695 10.9597 10.9597C10.6695 11.2499 10.325 11.4801 9.94589 11.6371C9.56674 11.7942 9.16038 11.875 8.75 11.875C7.9212 11.875 7.12634 11.5458 6.54029 10.9597C5.95424 10.3737 5.625 9.5788 5.625 8.75C5.625 7.9212 5.95424 7.12634 6.54029 6.54029C7.12634 5.95424 7.9212 5.625 8.75 5.625ZM8.75 0C11.0706 0 13.2962 0.921872 14.9372 2.56282C16.5781 4.20376 17.5 6.42936 17.5 8.75C17.5 15.3125 8.75 25 8.75 25C8.75 25 0 15.3125 0 8.75C0 6.42936 0.921872 4.20376 2.56282 2.56282C4.20376 0.921872 6.42936 0 8.75 0ZM8.75 2.5C7.0924 2.5 5.50269 3.15848 4.33058 4.33058C3.15848 5.50269 2.5 7.0924 2.5 8.75C2.5 10 2.5 12.5 8.75 20.8875C15 12.5 15 10 15 8.75C15 7.0924 14.3415 5.50269 13.1694 4.33058C11.9973 3.15848 10.4076 2.5 8.75 2.5Z"
                      fill="black"
                    />
                  </svg>
                  House # 32 <br /> Mikocheni <br />
                  Dar Es Salaam,
                  <br /> Tanzania.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
