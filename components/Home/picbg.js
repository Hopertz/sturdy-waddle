import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/img/banner.png";

export default function picbg() {
  return (
    <div><div className="absolute p-32 text-white w-1/2">
    <h1>INVESTOR</h1>
    <p>
      Find investment opportunies, and invest in potential businesses right
      from your fingertips.
    </p>
    <button class="rounded-full bg-sky-700">Join the platform</button>
  </div>

  <Image src={Banner} alt="Banner" className="h-56" /></div>
  )
}
