import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/img/banner.png";

export default function picbg() {
  return (
    <div><div className="absolute p-32 text-white w-1/1.5">
    <h1 class="font-bold" >INVESTOR</h1>
    <p class="font-bold">
      Find investment opportunies, and invest in potential businesses right
      from your fingertips.
    </p>
    <button class="rounded-full px-2 py-2 bg-white text-black font-bold">Join the platform</button>
  </div>

  <Image src={Banner} alt="Banner" className="h-56" /></div>
  )
}
