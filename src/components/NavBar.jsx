import { useState } from "react";
import Popup from "./Popup";
import SignupForm from "./signupForm";
import SigninForm from "./SigninForm";

export default function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signinIsOpen, setSigninIsOpen] = useState(false);

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
            <a href="#">Write</a>
          </li>
          <li className="navbar__right__item">
            <button
              className="navbar__signin"
              onClick={() => setSigninIsOpen(true)}
            >
              Sign In
            </button>
          </li>
        </ul>
        <button
          className="navbar__signup"
          onClick={() => setSignupIsOpen(true)}
        >
          Get started
        </button>
      </nav>

      {signupIsOpen && (
        <Popup setSignupIsOpen={setSignupIsOpen}>
          <SignupForm />
        </Popup>
      )}

      {signinIsOpen && (
        <Popup setSigninIsOpen={setSigninIsOpen}>
          <SigninForm />
        </Popup>
      )}
    </header>
  );
}
