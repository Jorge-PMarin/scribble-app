export default function UserBar() {
  return (
    <div className="userbar">
      <div className="userbar__right">
        <i className="fa-sharp fa-solid fa-mug-saucer userbar__right__logo"></i>
        <div className="userbar__right__search">
          <i className="fa-solid fa-magnifying-glass userbar__right__glass"></i>

          <input
            type="text"
            className="userbar__right__input"
            placeholder="Search ScribbleHub"
          />
        </div>
      </div>

      <div className="userbar__left">
        <a className="userbar__left__search" href="#">
          <i className="fa-solid fa-magnifying-glass "></i>
        </a>
        <a className="userbar__left__write">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Write</span>
        </a>

        <div className="userbar__left__user">
          <img
            src=".././public/anonymousUser.png"
            alt="avatar picture"
            className="userbar__left__avatar"
          />
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}
