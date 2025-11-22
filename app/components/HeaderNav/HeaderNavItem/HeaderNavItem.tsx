import { HeaderNavItemProps } from "./HeaderNavItemProps";

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  return <li className="list-none text-[#7DB343] font-inter font-bold text-[20px] hover:text-green-600 hover:underline-offset-16 hover:underline cursor-pointer">{props.text}</li>;
};
