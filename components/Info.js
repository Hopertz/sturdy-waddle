import anara from "../public/img/Anara.png";
import john from "../public/img/john.png";
import haithman from "../public/img/haithman.png";
import Millard from "../public/img/Millard.png";
import MG from "../public/img/MG.png";
import Image from "next/image";

export default function Info() {
  return (
    <div> <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Image
            src={john}
            alt="Banner"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
            John Uluga
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-black">
            Tsh 5M /month
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            2 hours ago . Livestock
          </p>
        </div>
      </div>
    </li>
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Image
            src={haithman}
            alt="Banner"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
            Haitham Omar
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-black">
            Tsh 10M /one time
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            6 hours ago . Livestock
          </p>
        </div>
      </div>
    </li>
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Image
            src={Millard}
            alt="Banner"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
            Millard John
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-black">
            USD 8,500 /month
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            2 days ago . Mining
          </p>
        </div>
      </div>
    </li>
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Image
            src={MG}
            alt="Banner"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
            MG & Company
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-black">
            Tsh 8M /month
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            2 days ago . Startup Business
          </p>
        </div>
      </div>
    </li>
    <li class="pt-3 pb-0 sm:pt-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Image
            src={anara}
            alt="Banner"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
            Anara Recruitment Platform
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-black">
            Tsh 2.4M /month
          </p>

          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            3 days ago . Startup Business
          </p>
        </div>
      </div>
    </li>
  </ul></div>
  )
}
