import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Commercial } from "../Commercial/Commercial";
import { dummyData } from "./MainData";

export const Main = () => {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 pt-8!">
      <Commercial />
      <div className="flex flex-col">
        <div><Button text="sort"/></div>
        <div className="flex max-w-full overflow-hidden flex-wrap gap-4 items-center justify-center">
          {dummyData.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              src={el.image}
              name={el.name}
              price={el.price}
              seller={el.seller}
              saleDate={el.saleDate}
              salePrice={el.salePrice}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
