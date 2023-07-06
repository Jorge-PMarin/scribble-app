import anonymousUser from "../../public/anonymousUser.png";
import postImgUrl from "../../public/notebookOnTable.jpg";

export default function SinglePost() {
  return (
    <main className="singlePost">
      <div className="singlePost__info">
        <a href="#">
          <img
            src={anonymousUser}
            alt="U"
            aria-hidden="true"
            className="singlePost__info__avatar"
          />
        </a>

        <div className="singlePost__info__text">
          <a href="#" className="singlePost__info__username">
            Tom Cooper
          </a>
          <span className="singlePost__info__date">Feb 16, 2022</span>
        </div>

        <div className="singlePost__info__share">
          <i className="fa-brands fa-twitter singlePost__info__icon"></i>
          <i className="fa-brands fa-facebook singlePost__info__icon"></i>
          <i className="fa-solid fa-link singlePost__info__icon"></i>
        </div>
      </div>

      <div className="singlePost__content">
        <h1 className="singlePost__content__title">
          10 seconds that ended my 20 year marriage
        </h1>
        <img src={postImgUrl} alt="" className="singlePost__content__img" />
        <p className="singlePost__content__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quos nulla debitis minus dignissimos repellat natus eaque a illum!
          Dolore reprehenderit veniam incidunt illo aliquam dolorum laudantium
          dolores officia necessitatibus molestiae debitis inventore eligendi,
          distinctio animi molestias labore magnam architecto. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Architecto quos nulla
          debitis minus dignissimos repellat natus eaque a illum! Dolore
          reprehenderit veniam incidunt illo aliquam dolorum laudantium dolores
          officia necessitatibus molestiae debitis inventore eligendi,
          distinctio animi molestias labore magnam architecto. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Architecto quos nulla
          debitis minus dignissimos repellat natus eaque a illum! Dolore
          reprehenderit veniam incidunt illo aliquam dolorum laudantium dolores
          officia necessitatibus molestiae debitis inventore eligendi,
          distinctio animi molestias labore magnam architecto.
        </p>
      </div>
    </main>
  );
}
