import { capitalizerFirstLetter } from "../../utils/words";

export const WeatherDate = () => {
  let actualDate = new Date();
  let month = actualDate.toLocaleDateString("es-CO", { month: "long" });
  let weekday = actualDate.toLocaleDateString("es-CO", { weekday: "long" });

  return (
    <div className="calendar__date">
      <div className="calendar__date_month">
        <p>{capitalizerFirstLetter(month)}</p>
      </div>
      <div className="calendar__date_days">
        <p>{actualDate.getDay()}</p>
      </div>
      <div className="calendar__date_day">
        <p>{capitalizerFirstLetter(weekday)}</p>
      </div>
    </div>
  );
};
