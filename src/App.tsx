import {Helmet} from "react-helmet-async";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Helmet>
      <meta property="og:title" content="Your Page Title" />
      <meta
        property="og:description"
        content="Description of your page content"
      />
      <meta
        property="og:image"
        content="https://fastly.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk"
      />
      <meta property="og:url" content="https://react-vite-seo.netlify.app/" />
      <meta property="og:type" content="website" />
      </Helmet>
      <h1>Go to Share Page</h1>
      <Link to="/sharedPage"> Go to another route </Link>
    </>
  );
}

export default App;
