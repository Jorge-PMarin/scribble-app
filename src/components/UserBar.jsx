import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import Write from "./write";

export default function UserBar() {
  return (
    <div className="userbar">
      <div className="userbar__left">
        <NavLink to="/">
          <i className="fa-sharp fa-solid fa-mug-saucer userbar__left__logo"></i>
        </NavLink>

        <div className="userbar__left__search">
          <i className="fa-solid fa-magnifying-glass userbar__left__glass"></i>

          <input
            type="text"
            className="userbar__left__input"
            placeholder="Search ScribbleHub"
          />
        </div>
      </div>

      <div className="userbar__right">
        <a className="userbar__right__search" href="#">
          <i className="fa-solid fa-magnifying-glass "></i>
        </a>
        <NavLink to="write" className="userbar__right__write">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Write</span>
        </NavLink>

        <div className="userbar__right__user">
          <NavLink to="settings">
            <img
              src="/anonymousUser.png"
              alt="avatar picture"
              className="userbar__right__avatar"
            />
          </NavLink>

          <DropDown />
        </div>
      </div>
    </div>
  );
}
