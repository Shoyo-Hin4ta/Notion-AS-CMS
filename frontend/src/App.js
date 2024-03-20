import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";


function App() {
  return (
    <>
      <h1 className="text-3xl">
        Hello world!
      </h1>
      <Body/>
    </>
  );
}

export const router = createBrowserRouter([{
  path:"/",
  element : <App />
}])

export default App;
