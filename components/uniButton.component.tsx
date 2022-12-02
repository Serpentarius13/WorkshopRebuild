import { FC, useEffect, useState } from "react";

export enum ButtonTypes {
  FORM_BUTTON = "FORM_BUTTON",
  MODAL_BUTTON = "MODAL_BUTTON",
}

interface ButtonProps {
  buttonType: ButtonTypes | string;
  text: string;
  onClick?: () => any;
}

const UniversalButton: FC<ButtonProps> = ({
  buttonType,
  text,
  onClick = null,
}) => {
  const click = () => {
    if (!onClick) return;
    onClick();
  };

  const formButtonStyle =
    "border-0 outline-none py-2 px-6 bg-purple-800 text-white hover:bg-blue-800 focus:outline-white";
  const modalButtonstyle =
    "absolute top-1 right-1 bg-purple-800 w-8 h-8  text-white rounded-full hover:bg-blue-800 ";

  const styleDecide = () => {
    switch (buttonType) {
      case ButtonTypes.FORM_BUTTON:
        return formButtonStyle;
      case ButtonTypes.MODAL_BUTTON:
        return modalButtonstyle;
      default:
        return "";
    }
  };

  return (
    <button onClick={click} className={styleDecide()}>
      {text}
    </button>
  );
};
export default UniversalButton;
