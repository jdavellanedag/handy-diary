import { WiDayCloudy } from "react-icons/wi";

export const WeatherDetails = () => {
  return (
    <div className="calendar__weather">
      <div className="calendar__weather_img">
        <WiDayCloudy size={70} />
      </div>
      <div className="calendar__weather_data">
        <div className="calendar__weather_temp">
          <p>25&deg;</p>
        </div>
        <div className="calendar__weather_details">
          <p>Soleado</p>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </div>
  );
};
