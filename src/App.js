import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';

function App({ children }) {
  return (
    <div className="" data-theme="light">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
