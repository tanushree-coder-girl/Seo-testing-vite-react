import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import SharePage from './pages/SharePage.tsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
          <App />
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
]);
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<HelmetProvider context={helmetContext}>
    <RouterProvider router={router} />

</HelmetProvider>
  </React.StrictMode>,
)
