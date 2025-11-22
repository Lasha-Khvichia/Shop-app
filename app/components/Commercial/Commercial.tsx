import Image from "next/image";
import { Button } from "../Button/Button";

export const Commercial = () => {
  return (
    <section className="flex self-stretch min-h-[250px] relative overflow-hidden h-full">
      <Image
        width={1900}
        height={1080}
        alt="commercial"
        src="/commercials/hogwartsLegacy.jpg"
        className="basis-full absolute w-full top-[-50%]"
      />
      <Button
        src="https://www.hogwartslegacy.com/en-gb"
        text="Play Now!"
        className="absolute z-10 bg-amber-400 pl-8! pr-8! pt-4! pb-4! border-2 rounded-2xl left-1/2 -translate-x-2/4 bottom-4 text-2xl font-hogwarts"
      />
      <h2
        style={{ WebkitTextStroke: "2px black" }}
        className="font-light absolute z-10 bottom-20 left-1/2 -translate-x-2/4 text-6xl w-full text-center text-amber-400 font-hogwarts"
      >
        The World Where You Get What Open-World Means!
      </h2>
    </section>
  );
};
