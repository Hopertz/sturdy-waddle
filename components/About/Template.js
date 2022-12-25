import Image from "next/image";
import sampleImg from "../../public/img/about.png";
import GridCards from "./GridCards";

function Template(props) {
  return (
    <div className="mx-[6%]">
      <section className="my-16 md:w-1/2 mx-auto text-center">
        <h1 className="font-semibold my-4 text-2xl">Our Mission</h1>
        <p>
          Sed in tristique vulputate sit. Tempus massa felis nisl habitasse
          neque tellus semper. Tempus ultrices eget id mauris. Mauris nisi
          praesent at mauris rhoncus nec leo pulvinar suspendisse. Ut massa
          viverra erat sodales dolor. At mauris egestas porttitor placerat.{" "}
        </p>
      </section>

      <section>
        <Image src={sampleImg} alt="sampleImage" className="w-full mx-auto" priority />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-16">
        <GridCards/>
      </section>
    </div>
  );
}

export default Template;
