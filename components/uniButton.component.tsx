import { FC, useEffect, useState } from "react";

export enum ButtonTypes {
  FORM_BUTTON = "FORM_BUTTON",
}

interface ButtonProps {
  buttonType: ButtonTypes;
  text: string;
}

const UniversalButton: FC<ButtonProps> = ({ buttonType, text }) => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    switch (buttonType) {
      case ButtonTypes.FORM_BUTTON:
        setStyle(
          "border-0 outline-none py-2 px-6 bg-purple-800 text-white hover:bg-blue-800 focus:outline-white"
        );

      default:
        return;
    }
  }, []);

  return <button className={style}>{text}</button>;
};
export default UniversalButton;
