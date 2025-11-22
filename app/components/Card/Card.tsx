import Image from "next/image";

type CardProps = {
  id: number;
  src: string;
  name: string;
  price: string;
  salePrice?: string;
  saleDate?: Date;
  seller: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white border-2 border-black p-2 min-w-2xs">
      <div className="relative basis-[200px]">
        <Image
          src={props.src}
          width={100}
          height={200}
          alt="product image"
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3>{props.name}</h3>
        <div className="flex gap-1">
          <h5
            className={
              (props.salePrice
                ? "text-gray-400 line-through"
                : "text-black text-2xl") +
              " " +
              "font-inter"
            }
          >
            {props.price}
          </h5>
          <span className="text-2xl text-[#7DB343] no-underline">
            {props.salePrice}
          </span>
          <span>{props.saleDate?.getDate()}</span>
        </div>
        <p className="">{props.seller}</p>
      </div>
    </div>
  );
};
