import { useState, useRef } from 'react';
import imgUrl from '../../public/anonymousUser.png';
import SideBar from '../components/SideBar';
import Button from '../components/Button';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const fileInputRef = useRef();

  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  {
    /*  when the label is clicked, image file uploader opens */
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      fileInputRef.current.click();
    }
  }

  return (
    <div className="settingsPage">
      <main className="settings">
        <div className="settings__top">
          <h1 className="settings__top__title">Update your account</h1>
          <button className="settings__top__delete">Delete account</button>
        </div>

        <form onSubmit={handleSubmit} className="settings__form">
          {/* Profile picture */}
          <div className="settings__form__group">
            <img
              src={imgUrl}
              alt="Your profile picture"
              className="settings__form__preview"
            />
            <label
              htmlFor="profile-pic"
              className="settings__form__upload"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              <i className="fa-solid fa-image"></i>
            </label>
            <input
              type="file"
              id="profile-pic"
              className="settings__form__file"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </div>
          {/* Username */}
          <div className="settings__form__group">
            <label htmlFor="username" className="settings__form__label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="settings__form__input"
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="settings__form__group">
            <label htmlFor="email" className="settings__form__label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="settings__form__input"
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div className="settings__form__group">
            <label htmlFor="password" className="settings__form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="settings__form__input"
              onChange={handleChange}
            />
          </div>
          {/* Confirm password */}
          <div className="settings__form__group">
            <label htmlFor="" className="settings__form__label">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="settings__form__input"
              onChange={handleChange}
            />
          </div>

          <Button>Update</Button>
        </form>
      </main>
      <SideBar />
    </div>
  );
}
