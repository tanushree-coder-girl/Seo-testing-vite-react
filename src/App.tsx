// import {Helmet} from "react-helmet-async";
import "./App.css";
// import { Link } from "react-router-dom";
import { useState, useRef } from 'react';
// import axios from "axios";

function App() {
  // const [file, setfile] = useState("")

  // function imgHandler (e) {
  //   setfile(e.target.files[0])
  //   console.log(e.target.files[0])
  // }

//  const ApiCalling = async () => {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);

//     const {data} = await axios.post(
//       'https://api-staging.university.builder.ai/wp-json/custom-api/v1/upload-file',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Basic ${window.btoa('manjit.kumar@x.builder.ai:Z4kbyQwcy4ZB0KuVIQ5Du4C7')}`,
//         },
//       }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
   const [bookmarkTimestamp, setBookmarkTimestamp] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setBookmarkTimestamp(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  return (
    <>
    {/* <Helmet prioritizeSeoTags>
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

      <input type="file" onChange={imgHandler} />

      <button onClick={ApiCalling}>api call</button> */}




     <div className="video-container" style={{ position: 'relative' }}>
      <video
        width="640"
        height="360"
        controls
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src="/src/assets/sample-5s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="timeline-container" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}>
        <div className="timeline" style={{ position: 'relative' }}>
        
          <div
  className="bookmark-icon"
  onClick={handleTimeUpdate}
  style={{
    position: 'absolute',
    left: '130px',
    top: '-65px',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  }}
>
  📌B
</div>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
