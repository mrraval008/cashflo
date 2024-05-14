import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RootLayout from './RootLayout/RootLayout.js';
import Recruiters from './Components/Recruiter/Recruiter';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "recruiters", element: <Recruiters></Recruiters> },
    ]
  }

])


function App() {
  return (
    <RouterProvider router={router
    }></RouterProvider>
  );

}

export default App;
