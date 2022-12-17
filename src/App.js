import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';

function App({ children }) {
  return (
    <div className="App" data-theme="light">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
