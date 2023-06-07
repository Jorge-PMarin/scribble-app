import TextareaAutosize from 'react-textarea-autosize';
import imgURL from '../../public/notebookOnTable.jpg';
import Button from './Button';

export default function Write() {
  return (
    <main className="write">
      <form className="write__form">
        <div className="write__form__group">
          <label htmlFor="write-img" className="write__form__plus">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="write-img" className="write__form__file" />
          <input
            type="text"
            className="write__form__title"
            placeholder="Title"
          />
        </div>
        <div className="write__form__group">
          <img src={imgURL} alt="" className="write__form__img" />
        </div>

        <div className="write__form__group">
          <TextareaAutosize
            className="write__form__body"
            name="post-body"
            placeholder="Tell your story..."
          />
        </div>
        {/* <button className="write__form__btn">Publish</button> */}
        <Button buttonText={'Publish!'} />
      </form>
    </main>
  );
}
