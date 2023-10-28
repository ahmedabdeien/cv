import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const routers = createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true ,element:<Home/>},
      {path:'*',element:<NotFound/>},
      {path:'Projects',element:<Projects/>},
      {path:'Skills',element:<Skills/>},
    ]}
  ]) 
  return <div className='dark:text-slate-100 dark:bg-slate-900 duration-100'>
  
  <RouterProvider router={routers}/>
  </div>
}

export default App;
