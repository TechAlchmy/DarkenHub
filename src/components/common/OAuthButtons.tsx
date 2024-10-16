import { FaSteam, FaApple, FaGoogle } from "react-icons/fa";

const OAuthButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto justify-center max-w-[300px] my-5">
      <button className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]">
        <FaSteam />
      </button>
      <button className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]">
        <FaApple />
      </button>
      <button className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]">
        <FaGoogle />
      </button>
    </div>
  );
};

export default OAuthButtons;
