import { Link } from "react-router-dom";
import "./home.css";
import Licznik from "./Licznik";

function HomePage() {
  return (
    <>
      <div className="main_class">
        <h1>Hello!</h1>
        <Link to="/blog">Blog</Link>
      </div>
      <Licznik />
    </>
  );
}

export default HomePage;
