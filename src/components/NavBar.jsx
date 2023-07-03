import { useState } from 'react';
import Popup from './Popup';
import SignupForm from './signupForm';

export default function NavBar() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__left">
        <a href="#" className="navbar__left__logo">
          <i className="fa-sharp fa-solid fa-mug-saucer"></i>
          <span className="navbar__left__text">ScribbleHub</span>
        </a>
      </div>

      <nav className="navbar__right">
        <ul className="navbar__right__list">
          <li className="navbar__right__item">
            <a href="#">Our story</a>
          </li>
          <li className="navbar__right__item">
            <a href="#">Membership</a>
          </li>
          <li className="navbar__right__item">
            <a href="#">Writte</a>
          </li>
          <li className="navbar__right__item">
            <a href="#">Sign in</a>
          </li>
        </ul>
        <button
          className="navbar__right__btn"
          onClick={() => setPopupIsOpen(true)}
        >
          Get started
        </button>
      </nav>

      {popupIsOpen && (
        <Popup setPopupIsOpen={setPopupIsOpen}>
          <SignupForm />
        </Popup>
      )}
    </header>
  );
}
