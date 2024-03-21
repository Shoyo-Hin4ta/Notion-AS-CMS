import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header/>
      <Body/>
    </>
  );
}

export const router = createBrowserRouter([{
  path:"/",
  element : <App />
}])

export default App;
