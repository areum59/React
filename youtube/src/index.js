import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // createBrowserRouter와 RouterProvider 불러오기
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',                  // 현재 라우터가 일치해야 하는 URL 경로
    element: <App />,           // 해당 경로에 대한 컴포넌트를 정의
    errorElement: <NotFound />, // 경로를 찾을 수 없을 때 발생하는 error컴포넌트 정의
    children: [                 // 경로를 루트 경로의 하위 경로로 이동.
      {index: true, element: <Videos />},
      {path: 'videos', element: <Videos />},
      {path: 'videos/:keyword', element: <Videos />},
      {path: 'videos/watch/:videoID', element: <VideoDetail />}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
