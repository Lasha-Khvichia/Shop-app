import Image from "next/image"

type CardProps = {
    id: number;
    src: string;
    name: string;
    price: string;
    salePrice?: string;
    saleDate?: Date;
    seller: string;
}

export const Cardo = (props: CardProps) => {
    return (
        <div className="flex flex-col items-start gap-4">
            <Image src={props.src} width={100} height={200} alt='product image' />
            <div className="flex flex-col gap-4">
                <h3>{props.name}<span className="text-2xl text-[#7DB343]">{props.salePrice}</span><span>{props.saleDate?.getDate()}</span></h3>

            </div>
        </div>
    )
}