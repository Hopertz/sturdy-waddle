import Image from "next/image";
import InvestImg from "../../public/img/investment.png";
import Info from "./Info";


function RightCard(props) {
    return (
        <div className="m-8 p-8 bg-white shadow-lg rounded-xl">
          <Image src={InvestImg} alt="sample img"/>  
          <Info/>
        </div>
    );
}

export default RightCard;