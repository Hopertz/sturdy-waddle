import investment from "../../public/img/investment.png";
import SectorRegion from "./SectorRegion";
import Info from "../Info";
import Image from "next/image";
import Gridpng from "../../public/img/GridPng.png";
import SectorList from "./SectorList";

export default function Grid() {
  return (
    <> 
      
      <div class="p-10 grid md:grid-cols-3  bg-white">
      <div class="rounded overflow-hidden shadow-lg col-span-2">
        <SectorRegion/>
          <div class="p-10 grid place-items-center md:grid-cols-3 gap-1">
            <div class="rounded overflow-hidden shadow-lg col-span-2  ">
              <div class="left"><SectorList/></div>
              
               
            </div>
            <div class="rounded overflow-hidden shadow-lg col-span-1">
              <Image src={Gridpng} alt="Banner" className="h-56" />
              <div>
                Nibh2 lorem in volutpat ac cursus pharetra. Neque pretium dui non
                gravida turpis orci, consectetur fermentum. In urna, pulvinar
                est ultricies mi ultrices laoreet. Viverra viverra odio risus
                duis augue felis sit vitae dignissim. Fames scelerisque amet
                egestas augue diam integer libero. In aliquam dui metus tempus
                consectetur risus.
              </div>
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg col-span-1">
          <Image src={investment} alt="Banner" className="h-56" />
          <Info />
        </div>
      </div>
    </>
  );
}
