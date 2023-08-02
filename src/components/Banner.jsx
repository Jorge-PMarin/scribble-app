import { useState } from "react";
import Popup from "./Popup";
import SignupForm from "./signupForm";
import imgURL from "/Type-Writer.svg";

export default function Banner() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);

  return (
    <div className="banner">
      <h2 className="banner__header">Unleash your creativity.</h2>
      <h3 className="banner__subheader">
        Start exploring the endless possibilities of your imagination.
      </h3>
      <button className="banner__btn" onClick={() => setSignupIsOpen(true)}>
        Let's start
      </button>
      <img className="banner__img" src={imgURL} alt="" aria-hidden="true" />

      {signupIsOpen && (
        <Popup setSignupIsOpen={setSignupIsOpen}>
          <SignupForm />
        </Popup>
      )}
    </div>
  );
}
