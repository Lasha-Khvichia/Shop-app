"use client";
type ButtonProps = {
  text: string;
  className?: string;
  src?: string;
};

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://www.hogwartslegacy.com/en-gb",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <button
      type="button"
      className={"cursor-pointer" + " " + props.className}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};
