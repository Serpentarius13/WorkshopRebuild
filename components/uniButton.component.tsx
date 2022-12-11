import { FC, useEffect, useState } from "react";

import { ButtonTypes } from "./../types/enum";

interface ButtonProps {
  buttonType: ButtonTypes | string;
  text: string;
  onClick?: () => any;
  type?: "button" | "reset" | "submit" | undefined;
}

const UniversalButton: FC<ButtonProps> = ({
  buttonType,
  text,
  onClick = null,
  type,
}) => {
  const click = () => {
    if (!onClick) return;
    onClick();
  };

  const formButtonStyle =
    "border-0 outline-none py-2 px-6 bg-orange-500 rounded-full text-white hover:bg-orange-700 active:bg-red-500 focus:outline-white";
  const modalButtonStyle =
    "absolute -top-6 -right-4 bg-orange-500 w-14 h-14 text-white rounded-full hover:bg-orange-700 active:bg-red-500 text-2xl ";

  const commentButtonStyle =
    "px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 active:bg-red-800";

  const ctaUserButtonStyle =
    " px-24 py-10 text-3xl font-bold rounded-full bg-orange-500 text-white active:bg-red-800 hover:bg-orange-600 hover:-translate-y-4 transition-all  ";

  const ctaDreamButtonStyle =
    "px-24 py-10 text-3xl font-bold rounded-full bg-purple-500 text-white active:bg-purple-800 hover:bg-purple-600 hover:-translate-y-4 transition-all ";

  const styleDecide = () => {
    switch (buttonType) {
      case ButtonTypes.FORM_BUTTON:
        return formButtonStyle;
      case ButtonTypes.MODAL_BUTTON:
        return modalButtonStyle;
      case ButtonTypes.LEAVE_COMMENT:
        return commentButtonStyle;
      case ButtonTypes.CTA_USER_BUTTON:
        return ctaUserButtonStyle;
      case ButtonTypes.CTA_DREAM_BUTTON:
        return ctaDreamButtonStyle;
      default:
        return "";
    }
  };

  return (
    <button type={type} onClick={click} className={styleDecide()}>
      {text}
    </button>
  );
};
export default UniversalButton;
