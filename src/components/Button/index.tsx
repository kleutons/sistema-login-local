import { MouseEventHandler } from 'react';
import * as C from "./style";

interface IProps {
  Text: string;
  Type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ Text, onClick, Type = "button" }: IProps) {
  return (
    <C.ButtonSt type={Type} onClick={onClick}>
      {Text}
    </C.ButtonSt>
  );
}

export default Button;
