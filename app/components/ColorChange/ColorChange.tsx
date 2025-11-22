"use client";

import { colorChange, colors } from "@/app/colorChanger";
import { useEffect, useState } from "react";

export const ColorChange = () => {
  const { getColor, changeColor } = new colorChange();
  const [currentColor, setCurrentColor] = useState("#FFF");
  const [position, setPosition] = useState("left-1");

  const handleClick = () => {
    if (currentColor == colors.dark) {
      changeColor(colors.light);
      setPosition("left-1");
    } else {
      changeColor(colors.dark);
      setPosition("right-1");
    }
  };

  console.log(currentColor);

  useEffect(() => {
    setCurrentColor(getColor());
  }, [getColor()]);
  return (
    <div
      className={
        (currentColor === colors.dark
          ? "bg-[" + colors.dark + "]"
          : "bg-[" + colors.buttonLightDark + "]") +
        " " +
        "min-w-[100px] flex relative"
      }
      onClick={handleClick}
    >
      <div
        className={
          (currentColor === colors.dark
            ? "bg-[" + colors.buttonLightDark + "]"
            : "bg-[" + colors.dark + "]") +
          " " +
          "rounded-2 absolute h-[40px] w-[40px] top-1/2 translate-y-[-50%] transition" +
          " " +
          position
        }
      ></div>
    </div>
  );
};
