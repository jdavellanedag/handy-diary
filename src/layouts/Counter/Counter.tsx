import { Glass } from "./Glass";

export interface glass {
  id: string;
  state: boolean;
}

const DATA: glass[] = [
  {
    id: "1",
    state: true,
  },
  {
    id: "2",
    state: true,
  },
  {
    id: "3",
    state: true,
  },
  {
    id: "4",
    state: true,
  },
  {
    id: "5",
    state: true,
  },
  {
    id: "6",
    state: false,
  },
  {
    id: "7",
    state: false,
  },
  {
    id: "8",
    state: false,
  },
  {
    id: "9",
    state: false,
  },
  {
    id: "10",
    state: false,
  },
  {
    id: "11",
    state: false,
  },
  {
    id: "12",
    state: false,
  },
  {
    id: "13",
    state: false,
  },
];

export const Counter = () => {
  return (
    <div className="counter__box">
      <div className="counter__title">
        <h3>Contador de agua</h3>
      </div>
      <div className="counter__content">
        {DATA.map(({ id, state }) => (
          <Glass key={id} state={state} />
        ))}
      </div>
    </div>
  );
};
