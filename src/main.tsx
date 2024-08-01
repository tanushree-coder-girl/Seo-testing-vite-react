import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import SharePage from './pages/SharePage.tsx';
import { HelmetProvider } from 'react-helmet-async';
import VideoPlayer from './pages/VideoPlayer.tsx';
import Neww from './pages/Newww.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
          <Neww />
      </Suspense>
    ),
  },
    {
    path: "/sharedPage",
    element: (
      <Suspense fallback={<></>}>
          <SharePage />
      </Suspense>
    ),
  },
     {
    path: "/video",
    element: (
      <Suspense fallback={<></>}>
          <VideoPlayer />
      </Suspense>
    ),
  },
]);
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<HelmetProvider context={helmetContext}>
    <RouterProvider router={router} />

</HelmetProvider>
  </React.StrictMode>,
)
