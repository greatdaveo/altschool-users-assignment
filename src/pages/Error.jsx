import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h2>404 Page</h2>
      <p>Page not found </p>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}
