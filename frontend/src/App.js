import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Category from "./components/Category";
import ContentPage from "./components/ContentPage";


function App() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([{
  path:"/",
  element : <App />,
  children : [
    {
      path : "/",
      element : <Body />
    },
    {
      path : "/category/:name",
      element : <Category />,
    },
    {
      path : "/category/:name/pagecontent/:pageid",
      element : <ContentPage />
    }
  ]
}])

export default App;
