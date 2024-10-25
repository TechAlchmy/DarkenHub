import { Outlet, useNavigate } from "react-router-dom"

import DashBoardHearder from "../components/layouts/header"
import SideBar from "../components/layouts/siderBar"
import GlobalChat from "../components/GlobalChat"
import Footer from "../components/Footer"

const UserLayout = () => { 

  return (
    <>
    <div className="flex relative">
      <SideBar />
      <div className="w-[calc(100%-360px)] min-h-screen bg-[#0D0D0D]">
        <DashBoardHearder />
        <Outlet />
        <div className="px-12 py-8 bg-black relative z-[2]">
          <GlobalChat />
        </div>
        <div className="px-24 relative z-[2]">
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

export default UserLayout