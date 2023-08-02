import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <article className="notFound">
      <h1 className="notFound__heading">404 Page: Under Construction</h1>
      <p>
        Oops! It seems like you've stumbled upon a page that's currently under
        construction or isn't available at the moment. Don't worry; our team is
        diligently working to bring this page to life and make it accessible to
        you soon.
      </p>
      <p>There are a few reasons you might have ended up here:</p>
      <ul>
        <li>
          The page you are trying to access is still a work in progress, and
          we're putting the finishing touches on it to provide you with the best
          experience possible.
        </li>
        <li>
          You might have entered an incorrect URL or followed a broken link.
        </li>
      </ul>

      <p>
        In the meantime, feel free to explore the rest of our website, where
        you'll find a wealth of exciting content and features. Go to the{" "}
        <Link to="/">Homepage</Link>.
      </p>
    </article>
  );
}
