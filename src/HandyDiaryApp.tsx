import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { MdAddBox, MdOutlineLocalDrink, MdLocalDrink } from "react-icons/md";
import { Counter } from "./layouts/Counter/Counter";
import { WeatherWidget } from "./layouts/WeatherWidget/WeatherWidget";

import "./styles/styles.scss";

export const HandyDiaryApp = () => {
  return (
    <div className="main">
      <WeatherWidget />
      <div className="idea__box">
        <textarea rows={4} placeholder="Mi motivación del dia"></textarea>
      </div>
      <div className="tasks__box">
        <div className="tasks__title">Lista de tareas</div>
        <ul className="tasks__list">
          <li className="tasks__task">
            <p className="text">
              Nulla in amet voluptate proident laborum occaecat amet culpa duis.
            </p>
            <button className="delete">
              <FaTrashAlt />
            </button>
          </li>
          <li className="tasks__task">
            <p className="text">
              Labore enim ut tempor consequat amet commodo et consequat reprehenderit esse tempor
              deserunt ipsum.
            </p>
            <button className="delete">
              <FaTrashAlt />
            </button>
          </li>
          <li className="tasks__task">
            <p className="text">
              Anim reprehenderit incididunt reprehenderit ex incididunt sint duis do labore duis
              commodo velit culpa.
            </p>
            <button className="delete">
              <FaTrashAlt />
            </button>
          </li>
          <li className="tasks__task">
            <input
              placeholder="Escribe una nueva tarea..."
              type={"text"}
              className="text new-task"
            />
            <button className="add">
              <FaPlus size={15} />
            </button>
          </li>
        </ul>
      </div>
      <div className="skd__box">
        <div className="skd__title">Citas</div>
        <div className="skd__content">
          <div className="skd__timeline">
            <div className="skd__time">9 AM</div>
            <div className="skd__time">10 AM</div>
            <div className="skd__time">11 AM</div>
            <div className="skd__time">12 PM</div>
            <div className="skd__time">1 PM</div>
            <div className="skd__time">2 PM</div>
            <div className="skd__time">3 PM</div>
          </div>
          <div className="skd__events">
            <div className="skd__event start-10 end-11">
              <p>Titulo</p>
              <p>10 AM - 11 AM</p>
            </div>
          </div>
        </div>
        <button className="skd__add">
          <MdAddBox size={40} color={"white"} />
        </button>
      </div>
      <div className="note__box">
        <div className="note__title">
          <h3>Notas</h3>
        </div>
        <div className="note">
          <h3>
            <input placeholder="Titulo" type={"text"} className="note-title" />
          </h3>
          <textarea placeholder="Escribe..." className="note-data" />
        </div>
      </div>
      <Counter />
      <footer></footer>
    </div>
  );
};
