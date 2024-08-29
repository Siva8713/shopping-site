import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

import { useState } from "react";
function App() {
  const [user, setUser] = useState("");
  const create_router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage setUser={setUser} />,
    },
    {
      path: "/home",
      element: <HomePage user={user} />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={create_router}></RouterProvider>
    </div>
  );
}

export default App;
