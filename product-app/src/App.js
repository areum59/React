import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainProducts from './components/MainProducts';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />;
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}