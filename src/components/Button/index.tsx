import { FC } from "react";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type='button' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
