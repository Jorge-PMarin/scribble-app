export default function Popup({ setSignupIsOpen, setSigninIsOpen, children }) {
  {
    /*  when the user clicks anywhere outside of the modal, it closes */
  }
  function handleClick(e) {
    if (
      (e.target.className == "popup" || e.target.className == "popup__close") &&
      setSigninIsOpen
    ) {
      setSigninIsOpen(false);
    } else if (
      (e.target.className == "popup" || e.target.className == "popup__close") &&
      setSignupIsOpen
    ) {
      setSignupIsOpen(false);
    }
  }

  return (
    <div className="popup" onClick={handleClick}>
      <div className="popup__content">
        <button className="popup__close" onClick={handleClick}>
          <i className="fa-solid fa-xmark popup__content__icon"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
