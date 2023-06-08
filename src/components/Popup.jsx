export default function Popup({ setPopupIsOpen, children }) {
  {
    /*  when the user clicks anywhere outside of the modal, it closes */
  }
  function handleClick(e) {
    if (e.target.className == 'popup') {
      setPopupIsOpen(false);
    }
  }

  return (
    <div className="popup" onClick={handleClick}>
      <div className="popup__content">
        <button className="popup__close" onClick={() => setPopupIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
