import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-200">
        <LeftCard />
        <RightCard />
      </div>
    </>
  );
}
