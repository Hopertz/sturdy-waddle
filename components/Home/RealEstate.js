import Image from "next/image";
import HouseImg from "../../public/img/GridPng.png";

function RealEstate(props) {
  return (
    <div className="col-span-2">
      <Image src={HouseImg} alt="Sample House Image" className="w-full" />
      <p className="my-4 w-4/5">
        Nibh2 lorem in volutpat ac cursus pharetra. Neque pretium dui non
        gravida turpis orci, consectetur fermentum. In urna, pulvinar est
        ultricies mi ultrices laoreet.
      </p>

      <p className="my-4 w-4/5">
        Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames
        scelerisque amet egestas augue diam integer libero. In aliquam dui metus
        tempus consectetur risus.
      </p>

      <div className="flex justify-end w-4/5">
        <button className="border border-blue-600 text-blue-600 capitalize rounded-3xl px-6 py-2 my-2">
          learn more
        </button>
      </div>
    </div>
  );
}

export default RealEstate;
