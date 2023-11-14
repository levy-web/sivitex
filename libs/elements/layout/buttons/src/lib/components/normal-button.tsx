import { ButtonData } from "@eccomerce/buttons-interface";

export interface NormalButtonProps extends ButtonData {}

export const NormalButton: React.FC<NormalButtonProps> = (props) => {
  const {
    text,
    bgColor,
    color,
    hoverBgColor,
    hoverColor
  } = props;

  const buttonStyle: React.CSSProperties = {
    borderRadius: '30px'
  };

  return (
    <div className="py-20">
      <button
        className={`${bgColor} ${color} ${hoverBgColor} ${hoverColor} py-4 px-12 md:px-20`}
        style={buttonStyle}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}