import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./layouts/Main"
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Quizs from './components/Topics/Cards/Quizs/Quiz';
import Errorpage from './components/Errorpage/Errorpage';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home> ,
        },
        {
          path:'/home',
          element: <Home></Home> ,
        },
        {
          path:'/topics',
          loader: async ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path:'/topic/:topicId',
          loader: async ({params})=>{
            // console.log(params.topicId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quizs></Quizs>
        },
        {
          path:"/blog",
          element: <Blog></Blog>
        }
      ],
    },
    {
      path:"*",
      element:<Errorpage></Errorpage>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
