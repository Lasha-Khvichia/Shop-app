import { HeaderNavItemProps } from "./HeaderNavItemProps";

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  return <li className="list-none text-[#7DB343] font-inter cursor-pointer">{props.text}</li>;
};
