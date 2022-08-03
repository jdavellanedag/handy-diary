import { WeatherDate } from "./WeatherDate";
import { WeatherDetails } from "./WeatherDetails";

export const WeatherWidget = () => {
  return (
    <div className="calendar__box">
      <WeatherDate />
      <WeatherDetails />
    </div>
  );
};
