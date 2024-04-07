import {Helmet} from "react-helmet-async";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Helmet prioritizeSeoTags>
        <title>app page</title>

      <meta property="og:title" content="Your App page Title" />
      <meta
        property="og:description"
        content="your app page content"
      />
      <meta
        property="og:image"
        content="https://fastly.picsum.photos/id/862/200/200.jpg?hmac=rRVo_arAcvYpDsyKWlGq_MPlxjOpW2jIe42jZ8REjZ4"
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
