import React from 'react';
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Category from "./components/Category";
import ContentPage from "./components/ContentPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-pink-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/category/:name",
      element: <Category />,
    },
    {
      path: "/category/:name/pagecontent/:pageid",
      element: <ContentPage />
    }
  ]
}]);

export default App;