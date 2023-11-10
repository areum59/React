import './App.css';
import { Outlet } from 'react-router-dom' // 리액트 라우터로부터 Outlet을 불러온다.
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
      {/* 자식 요소들을 보여줄 수 있도록 <Outlet>을 설정. */}
    </>
  );
}

export default App;