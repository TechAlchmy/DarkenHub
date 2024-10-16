import { Outlet } from "react-router-dom";
import Logo from "../../components/common/Logo";
import NavMenu from "../../components/NavMenu";

function AuthLayout() {
  return (
    <div className="min-h-screen">
      <NavMenu />
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-1 text-center relative "></div>
          <div className="col-span-1 ">
            <h2 className="font-aboreto font-normal text-[40px] leading-10 text-white tracking-[18%] text-center mb-4">
              Welcome to the Shadows!
            </h2>
            <h4 className="font-aboreto font-normal text-2xl text-white tracking-[18%] text-center">
              Unlock your journey with us. Sign in or create a new account to
              begin your legend.
            </h4>
            <div className="element-with-border w-[452.5px] p-10 mx-auto mt-5 form-bg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <footer className="container py-8">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="col-span-1">
            <div className={`text-center max-w-[500px]`}>
              <p className="text-white font-itim font-normal text-xl tracking-[18%] mb-2">
                DarkenHub: The Forge of Gaming Legends
              </p>
              <h5 className="text-white text-4xl font-normal font-itim tracking-[18%]">
                Join a community where every step leads to a new level of
                mastery and domination.
              </h5>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-end justify-center">
              <span className="inline-flex font-black text-white text-xl">
                @2024,
              </span>

              <Logo />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AuthLayout;
