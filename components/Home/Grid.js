
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export default function Grid() {
  return (
    <>  
      <div class="grid md:grid-cols-3 bg-slate-200">
        <LeftCard/>
        <RightCard/>

        {/* <div class="rounded overflow-hidden shadow-lg col-span-1">
          <Image src={investment} alt="Banner" className="h-56" />
          <Info />
        </div> */}
      </div>
    </>
  );
}
