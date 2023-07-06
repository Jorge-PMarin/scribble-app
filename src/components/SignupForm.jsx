import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required field"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Required field"),
      password: Yup.string()
        .min(9, "Must be at least 9 characters long")
        .required("Required field"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required field"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="signupForm">
      <h2 className="signupForm__heading">Create Account</h2>

      <div className="signupForm__group">
        <label htmlFor="signup-username" className="signupForm__label">
          Username:
        </label>
        <input
          type="text"
          id="signup-username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <label htmlFor="signup-username" className="signupForm__error">
            {formik.errors.username}
          </label>
        ) : null}
      </div>

      <div className="signupForm__group">
        <label htmlFor="signup-email" className="signupForm__label">
          Email:
        </label>
        <input
          type="text"
          id="signup-email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <label htmlFor="signup-email" className="signupForm__error">
            {formik.errors.email}
          </label>
        ) : null}
      </div>

      <div className="signupForm__group">
        <label htmlFor="signup-password" className="signupForm__label">
          Password:
        </label>
        <input
          type="password"
          id="signup-password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <label htmlFor="signup-password" className="signupForm__error">
            {formik.errors.password}
          </label>
        ) : null}
      </div>

      <div className="signupForm__group">
        <label htmlFor="signup-confirm-password" className="signupForm__label">
          Confirm password:
        </label>
        <input
          type="password"
          id="signup-confirm-password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <label
            htmlFor="signup-confirm-password"
            className="signupForm__error"
          >
            {formik.errors.confirmPassword}
          </label>
        ) : null}
      </div>
      <Button styles={{ padding: "1.5rem 2rem" }}>Submit</Button>
    </form>
  );
}
