import { WiDayCloudy } from "react-icons/wi";
import { FaTrashAlt } from "react-icons/fa";

import "./styles/styles.scss";

export const HandyDiaryApp = () => {
  return (
    <div className="main">
      <div className="calendar__box">
        <div className="calendar__date">
          <div className="calendar__date_month">
            <p>Agosto</p>
          </div>
          <div className="calendar__date_days">
            <p>01</p>
          </div>
          <div className="calendar__date_day">
            <p>Lunes</p>
          </div>
        </div>
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
      </div>
      <div className="note__box">
        <textarea maxLength={60} placeholder="Mi motivación del dia"></textarea>
      </div>
      <div className="tasks__box">
        <div className="tasks__title">Tareas</div>
        <ul className="tasks__list">
          <li className="tasks__task">
            <p>Nulla in amet voluptate proident laborum occaecat amet culpa duis.</p>
            <button>
              <FaTrashAlt />
            </button>
          </li>
          <li className="tasks__task">
            <p>
              Labore enim ut tempor consequat amet commodo et consequat reprehenderit esse tempor
              deserunt ipsum.
            </p>
            <button>
              <FaTrashAlt />
            </button>
          </li>
          <li className="tasks__task">
            <p>
              Anim reprehenderit incididunt reprehenderit ex incididunt sint duis do labore duis
              commodo velit culpa.
            </p>
            <button>
              <FaTrashAlt />
            </button>
          </li>
        </ul>
      </div>
      <div>
        Prioridades
        <ul>
          <li>Tarea 1</li>
          <li>Tarea 2</li>
          <li>Tarea 3</li>
        </ul>
      </div>
      <div>Citas</div>
      <div>Notas</div>
      <div>Contador de agua</div>
    </div>
  );
};
