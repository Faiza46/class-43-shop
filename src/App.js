import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/about',
          element: <About></About>
        }

      ]

    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }


  ])
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>


    </div>
  );
}

export default App;
