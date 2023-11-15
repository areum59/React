import './App.css';
import { Outlet } from 'react-router-dom' // 리액트 라우터로부터 Outlet을 불러온다.
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        {/* 자식 요소들을 보여줄 수 있도록 <Outlet>을 설정. */}
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;