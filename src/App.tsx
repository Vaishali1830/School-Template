import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TemplateLayout from "./Template/TemplateLayout";
import Contact from "./Template/Details/Contact/Contact";
import Template from "./Template/Template";
import Careers from "./Template/Details/Careers";
import Signup from "./Template/Details/Signup";

function App() {

  const router = createBrowserRouter([
    {
      path  : "/",
      element : <TemplateLayout/>,
      children : [
        {
          path : '/',
          element : <Template/>
        },
        {
          path : 'contact-us',
          element : <Contact/>
        },
        {
          path : 'careers',
          element : <Careers/>
        },
        {
          path : 'signup',
          element : <Signup/>
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
