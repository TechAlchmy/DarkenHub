import logo from "../../assets/dashboard/DarkhubIcon.png"
import Hexagon from "./hexagon";
import HexagonBg from "../../assets/dashboard/Hexagon1.png";
import HexagonBg1 from "../../assets/dashboard/Hexagon2.png";
import HexagonBg3 from "../../assets/dashboard/Hexagon3.png";
import Discord from "../../assets/dashboard/DiscordIcon.png";
import Telegram from "../../assets/dashboard/TgIcon.png";
import Symbol from "../../assets/dashboard/Symbol.png";
import NewIcon from "../../assets/dashboard/NewsIcon.png";



const NewPannel = () => {

  return (
    <div className="flex items-center mt-28">
      <div className="flex items-center gap-1">
        <img src={logo} alt="" />
        <p className="text-white text-[16px] font-inter">Darken<span className="text-[#E27625]">Hub</span></p>
      </div>
      <div className="flex items-center relative">
        <img src="" alt="" />
        <div className="flex flex-col gap-5">
          <Hexagon image={HexagonBg}  extr={Discord} mobile />
          <Hexagon image={HexagonBg1} extr={Telegram} pro />
        </div>
        <div>
          <Hexagon image={HexagonBg3} extr={NewIcon}  />
        </div>
      </div>
      <div className="-mt-[18rem] -ml-20">
        <img src={Symbol} alt="" />
      </div>
    </div>
  )
}

export default NewPannel;