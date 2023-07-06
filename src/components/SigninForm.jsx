import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";

export default function SigninForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Required field"),
      password: Yup.string()
        .min(9, "Must be at least 9 characters long")
        .required("Required field"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="signinForm">
      <h2 className="signinForm__heading">Welcome back.</h2>

      <div className="signinForm__group">
        <label htmlFor="signin-email" className="signinForm__label">
          Email:
        </label>
        <input
          type="text"
          id="signin-email"
          name="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <label htmlFor="signin-email" className="signinForm__error">
            {formik.errors.email}
          </label>
        ) : null}
      </div>

      <div className="signinForm__group">
        <label htmlFor="signin-password" className="signinForm__label">
          Password:
        </label>
        <input
          type="password"
          id="signin-password"
          name="password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password ? (
          <label className="signinForm__error" htmlFor="signin-password">
            {formik.errors.password}
          </label>
        ) : null}
      </div>

      <Button>Submit</Button>
    </form>
  );
}
