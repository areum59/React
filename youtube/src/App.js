import './App.css';
import { Outlet } from 'react-router-dom' // 리액트 라우터로부터 Outlet을 불러온다.

function App() {
  return (
    <>
      {/* 자식 요소들을 보여줄 수 있도록 <Outlet>을 설정. */}
      <Outlet />
    </>
  );
}

export default App;