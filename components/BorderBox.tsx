import { ReactNode } from "react";

type ReactNodeProps = {
  children: ReactNode;
  color?: string;
  onPressFunc: (buttonText: "+" | "-") => void;
};

const BorderBox = ({
  children,
  color = "grey",
  onPressFunc,
}: ReactNodeProps) => {
  return (
    <div
      style={{
        padding: "10px",
        border: `2px solid ${color}`,
        borderRadius: "10px",
        margin: "10px",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={() => {
        onPressFunc();
      }}
    >
      {children}
    </div>
  );
};

export default BorderBox;
