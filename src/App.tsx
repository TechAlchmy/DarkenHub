import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import AuthLayout from "./components/layouts/AuthLayout";
import Signin from "./pages/Signin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserLayout from "./pages/UserLayout";
import Dashboard from "./pages/Dashboard";
import Dota2 from "./pages/Games/Dota2";
import DashboardPro from "./pages/DashboardPro";
import CarouselComponent from "./components/Dashboard/Slider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPro />
        // element: <CarouselComponent />

      },
      {
        path: "dota2",
        element: <Dota2 />
      }
    ]
  }
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="692663762453-mh6d1olppalogm9lkcnmgk8agar6j1qt.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
