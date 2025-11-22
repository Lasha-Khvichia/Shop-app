'use client'
import { colorChange } from "@/app/colorChanger";
import { Button } from "../Button/Button";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Icon } from "../Icon/Icon";
import { ColorChange } from "../ColorChange/ColorChange";

export const Header = () => {
  const { getColor } = new colorChange();
  console.log(getColor());
  
  return (
    <header className={"flex justify-between items-center p-4!" + ' ' + 'bg-[' + getColor() + ']'}>
      <Icon
        online="https://img.icons8.com/color/512/shopify.png"
        width={100}
        height={100}
        alt="header"
      />
      <div className="flex gap-8">
        <ColorChange />
        <HeaderNav />
        <Button
          text="Cart"
          className="text-[#7DB343] border-2 rounded-[10px] pl-4! pr-4! pt-2! pb-2! hover:bg-[#7DB343] hover:text-white transition-all"
        />
        <Icon
          online="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
          width={40}
          height={40}
          alt="profile"
        />
      </div>
    </header>
  );
};
