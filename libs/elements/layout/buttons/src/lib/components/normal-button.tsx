import { ButtonData } from "@eccomerce/buttons-interface";

export interface NormalButtonProps extends ButtonData {buttonClick:() => void}

export const NormalButton: React.FC<NormalButtonProps> = (props) => {
  const {
    text,
    bgColor,
    color,
    hoverBgColor,
    hoverColor,
    buttonClick
  } = props;

  const buttonStyle: React.CSSProperties = {
    borderRadius: '30px',
    width: '200px',
    padding: '10px',
    margin: '10px',
  };

  return (
    <button
        onClick={buttonClick}
        className={`${bgColor} ${color} ${hoverBgColor} ${hoverColor} py-4 px-20`}
        style={buttonStyle}
      >
        <span className="">{text}</span>
    </button>
  );
}