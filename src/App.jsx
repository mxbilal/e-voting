import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CalculatePage from "./Pages/Calculate";
import HomePage from "./pages";
import LayoutPage from "./pages/LayoutPage";

import "./App.css";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
