import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import DashboardHome from './components/route/DashboardHome';
import AllOrders from './components/route/AllOrders';
import Products from './components/route/Products';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: '/', element: <DashboardHome/>},
        {path: '/orders', element: <AllOrders/>},
        {path: '/products', element: <Products/>},
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
