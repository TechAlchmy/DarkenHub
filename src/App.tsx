import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./pages/Signup";
import AuthLayout from "./components/layouts/AuthLayout";
import SteamCallback from "./components/Dota2/SteamCallback";
import Signin from "./pages/Signin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserLayout from "./pages/UserLayout";
import Dota2 from "./pages/Games/Dota2";
import DashboardPro from "./pages/DashboardPro";
import Profile from "./pages/profile/profile";
import Clan from "./pages/Clan";
import PostItems from "./pages/PostItems";
import BuyItem from "./pages/BuyItem";
import TransactionTable from "./pages/TransactionTable";
import RaceItem from "./pages/RaceItem";
import RaceTransaction from "./pages/RaceTransaction";


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
        path: "/user",
        element: <DashboardPro />
        // element: <CarouselComponent />

      },
      {
        path: "dashboard",
        element: <DashboardPro />
        // element: <CarouselComponent />

      },
      {
        path: "dota2",
        element: <Dota2 />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "clan",
        element: <Clan />
      },
      {
        path: "postItem",
        element: <PostItems />
      },
      {
        path: "buyItem",
        element: <BuyItem />
      },
      {
        path: "transactionTable",
        element: <TransactionTable />
      },
      {
        path: "raceItem",
        element: <RaceItem />
      },
      {
        path: "raceTransaction",
        element: <RaceTransaction />
      },
    ]
  },
  {
    path: "/steamCallBack",
    element: <SteamCallback />
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
