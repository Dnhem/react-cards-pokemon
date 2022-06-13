import { useState } from "react";

const useFlip = (initialState = true) => {
  const [ isFacingUp, setIsFacingUp ] = useState(initialState);
  const flipCard = () => {
    setIsFacingUp(isFacingUp => !isFacingUp);
  };
  return [ isFacingUp, flipCard ];
};

export default useFlip;
