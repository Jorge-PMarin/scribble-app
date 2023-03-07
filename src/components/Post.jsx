import authorImgUrl from '../../public/anonymousUser.png';
import postImgUrl from '../../public/notebookOnTable.jpg';

export default function Post() {
  return (
    <div className="post">
      <div className="post__left">
        <div className="post__left__author">
          <a href="#">
            <img
              src={authorImgUrl}
              alt="Author picture"
              className="post__left__avatar"
            />
          </a>
          <span className="post__left__username">Walter white</span>
        </div>

        <div className="post__left__text">
          <a href="#">
            <h2 className="post__left__title">
              What We're Reading: Are you an upstander or a bystander?
              What We're Reading: Are you an upstander or a bystander?
              What We're Reading: Are you an upstander or a bystander?
            </h2>
          </a>

          <p className="post__left__description">
            "Emasculate" is one of those words I wish more folks simply hadn't
            learned.  "Emasculate" is one of those words I wish more folks simply hadn't
            learned.  "Emasculate" is one of those words I wish more folks simply hadn't
            learned.
          </p>
        </div>

        <div className="post__left__info">
          <span className="post__left__date">Feb 24</span>
          <div className="post__left__categories">
            <a href="#" className="post__left__category">Fiction</a>
            <a href="#" className="post__left__category">Sci-fi</a>
          </div>
        </div>
      </div>

      <div className="post__right">
        <a href="#">
          <img src={postImgUrl} alt="" className="post__right__img" />
        </a>
      </div>
    </div>
  );
}
