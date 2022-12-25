import Image from "next/image";
import Banner from "../../public/img/banner.png";

export default function picbg() {
  return (
    <div className="relative">
    <div className="hidden md:block absolute p-32 text-white w-1/1.5">
    <h1 >INVESTOR</h1>
    <p className="w-3/4">
      Find investment opportunies, and invest in potential businesses right
      from your fingertips.
    </p>
    <button className="my-4 rounded-full px-4 py-3 bg-white text-black font-bold">Join the platform</button>
  </div>

  <Image src={Banner} alt="Banner"  className="w-full" priority/>
  </div>
  )
}
