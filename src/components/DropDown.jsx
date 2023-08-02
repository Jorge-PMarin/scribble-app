import { NavLink } from "react-router-dom";

export default function DropDown() {
  return (
    <div className="dropdown">
      <i className="fa-solid fa-chevron-down dropdown__arrow"></i>

      <ul className="dropdown__list">
        <li className="dropdown__item">
          <NavLink to='settings' className="dropdown__link">Settings</NavLink>
        </li>
        <li className="dropdown__item">Logout</li>
      </ul>
    </div>
  );
}
