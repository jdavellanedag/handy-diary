import { MdOutlineLocalDrink, MdLocalDrink } from "react-icons/md";
import { useState } from "react";
import { glass } from "./Counter";

interface Props {
  state: boolean;
}

export const Glass = ({ state }: Props) => {
  const [drinked, setDrinked] = useState(state);

  return (
    <>
      {drinked ? (
        <MdLocalDrink className="drinked" size={25} onClick={() => setDrinked(!drinked)} />
      ) : (
        <MdOutlineLocalDrink className="undrinked" size={25} onClick={() => setDrinked(!drinked)} />
      )}
    </>
  );
};
