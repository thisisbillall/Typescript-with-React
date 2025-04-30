type ButtonProps = {
  buttonText: string;
};

const ButtonComp = ({ buttonText }: ButtonProps) => {
  return <div>{buttonText}</div>;
};

export default ButtonComp;
