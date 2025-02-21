
import { RouterProvider } from "react-router";
import "./App.css";
import { router } from './router'
// import { Provider } from "react-redux";


function App() {

 
  return (
 
<RouterProvider router={router}/>

  );
}

export default App;
