import './App.css'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
     <Helmet>
<title>Learning React Helmet!</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />

  <meta property="og:title" content=" App page inside seo og Title" />
  <meta property="og:description" content="App page inside seo og description" />
   <meta property="og:image"
    content="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"></meta>

</Helmet>

      <h1>Go to Share Page</h1>
      <Link to="/sharedPage"> Go to another route </Link>
    
    </>
  )
}

export default App
