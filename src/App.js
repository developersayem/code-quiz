import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./layouts/main"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
