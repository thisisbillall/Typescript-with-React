import { useState } from "react";
import ButtonComp from "../components/Button";
import BorderBox from "../components/BorderBox";

type CounterProps = {
  initialValue?: number;
  steps?: number;
};

const Counter = ({ initialValue, steps = 1 }: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleClick = (operation: "-" | "+") => {
    if (operation === "-" && !(count - steps < 0)) {
      setCount((prev) => prev - steps);
    } else if (operation === "+") {
      setCount((prev) => prev + steps);
    }
  };
  return (
    <>
      <BorderBox
        color={"black"}
        onPressFunc={() => {
          handleClick("-");
        }}
      >
        <ButtonComp buttonText={"-"} />
      </BorderBox>

      <BorderBox color={"green"}>{count}</BorderBox>

      <BorderBox
        color={"black"}
        onPressFunc={() => {
          handleClick("+");
        }}
      >
        <ButtonComp buttonText={"+"} />
      </BorderBox>
    </>
  );
};

export default Counter;
