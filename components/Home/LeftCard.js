import RealEstate from "./RealEstate";
import SectorList from "./SectorList";
import SectorRegion from "./SectorRegion";

function LeftCard(props) {
  return (
    <div className="m-8 p-8 w-4/5 col-span-2 bg-white shadow-lg rounded-xl">
      <SectorRegion />
      <div className="grid grid-cols-3 gap-8 my-8">
        <SectorList />
        <RealEstate />
      </div>
    </div>
  );
}

export default LeftCard;
