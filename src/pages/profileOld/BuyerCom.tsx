import { useMemo } from "react";

import Dot from "../../assets/profileOld/dot.png";
import Profile from "../../assets/profileOld/profileImage.png";
import Bg1 from "../../assets/profileOld/bg1.png";
// import Bg2 from "../../assets/profileOld/bg2.png";
import Circle from "../../assets/profileOld/Image.png";
import Avarta from "../../assets/profileOld/Avatar Image.png";
import verified from "../../assets/profileOld/Icon - Verification.png";
import Name from "../../assets/profileOld/Group 1874.png"
import Chat from "./Chat";
import Apex from "../../assets/profileOld/Apex-Legends-Emblem 1.png";
import Dota2 from "../../assets/profileOld/dota-2-logo-A8CAC9B4C9-seeklogo 1.png";
import star from "../../assets/profileOld/star.png"
import MostWatched from "../../assets/profileOld/most-watched.png";
import Crown from "../../assets/profileOld/crown-lv-50.png";
import Progress from "../../assets/profileOld/Progress Ring.png";
import Symbol from "../../assets/profileOld/Symbol.png";
import ReviewCom from "./ReviewCom";
import ServiceCom, { GameServiceItem } from "./ServiceCom";
import EditButton from "../../components/common/EditButton";

interface props {
  owner?: boolean
}

const BuyerCom = ({ owner }: props) => {

  const gradientBorderStyle = {
    backgroundImage: `url(${Dot})`
  }

  const bgImage = {
    backgroundImage: `url(${Circle})`
  }



  const services = useMemo(() => {
    return [
      {
        bg: "#9C68C64D",
        name: "Apex Lege...",
        img: Apex
      },
      {
        bg: "#EA473B4D",
        name: "Dota 2",
        img: Dota2
      },
    ]
  }, [])
  return (
    <div className="flex justify-between pl-3">
      <div className="w-[620px]">
        <div
          className="
            relative
          "
        >
          <div
            className="
              w-full 
              h-full
              absolute
              top-0
              left-0
            "
          >
            <img src={Bg1} alt="" />
          </div>
          <div
            className="
            p-5 
            bg-profile_user 
            rounded-[40px] 
            h-[674px]  
            border 
            border-[#FFFFFF26]
            backdrop-blur-30
            shadow-custom-1
            shadow-custom-2
            shadow-custom-3
            shadow-custom-inset
            "
          >
            <div
              className="w-full h-[340px] relative bg-profile_user1 bg-opacity-20 border-[#FFFFFF4D] rounded-2xl border"
              style={gradientBorderStyle}
            >
              {owner && (
                <div className="absolute left-5 top-16">
                  <EditButton />
                </div>
              )}
              <div
                className="
                  absolute
                  top-6
                  left-5
                  text-[20px]
                  leading-[30px]
                  text-[#E27625]
                "
              >
                @Alenxim
              </div>
              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  text-[11px]
                  leading-[25px]
                  font-[600]
                  text-white
                "
              >
                Date of registration<br></br>
                10 June 2021, 20:37<br></br>
                3 years ago
              </div>
              <div
                className="
                  absolute
                  bottom-[10px]
                  right-5
                  w-[73px]
                  h-[73px]
                  rounded-full
                "
              >
                <img src={Profile} className="w-full" alt="" />
              </div>
              <div className="absolute top-6 gap-1 right-4 bg-[#F4F3FC] backdrop-blur-200 bg-opacity-30 rounded-md flex items-center py-2 px-3">
                <div className="w-2 h-2 bg-[#6FCF97] rounded-full">
                </div>
                <p
                  className="
                    text-[#F4F3FC]
                    text-[12px]
                    font-[500]
                    leading-[14px]
                  "
                >
                  Online
                </p>
              </div>
              <div
                className="
                  w-[360px]
                  h-[360px]
                  mx-auto
                  flex 
                  items-center
                  justify-center
                "
                style={bgImage}
              >
                <div
                  className="
                    w-[218px]
                    h-[218px]
                    border-[8.35px]
                    border-[#0000001A]
                    rounded-full
                    mt-2
                    ml-2
                    flex
                    justify-center
                    items-center
                    relative
                  "
                >
                  <div
                    className="
                      w-[160px]
                      h-[160px]
                      relative
                    "
                  >
                    <img src={Avarta} alt="" />
                    <img src={verified} className="absolute left-3 top-3" alt="" />
                    <img src={Name} className="absolute left-0 -bottom-6" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
                px-6
                pb-1
                pt-2
                bg-profile_user 
                rounded-[20px]
                border 
                border-[#FFFFFF26]
                mt-2
                flex
                justify-between
                items-center
              "
              style={gradientBorderStyle}
            >
              <div className="flex gap-6">
                {services.map((service, index) => (
                  <GameServiceItem
                    key={index}
                    service={service}
                  />
                ))}
              </div>

              <div
                className="gap-1 flex items-center"
              >
                <p
                  className="
                    font-inter
                    text-[16px]
                    leading-[18px]
                    font-[600]
                    text-white
                  "
                >
                  124
                </p>
                <div className="flex">
                  <div className="w-6 h-6">
                    <img src={star} alt="" />
                  </div>
                  <div className="w-6 h-6">
                    <img src={star} alt="" />
                  </div>
                  <div className="w-6 h-6">
                    <img src={star} alt="" />
                  </div>
                  <div className="w-6 h-6">
                    <img src={star} alt="" />
                  </div>
                  <div className="w-6 h-6">
                    <img src={star} alt="" />
                  </div>

                </div>
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-2
                "
              >
                <p
                  className="
                    font-[600]
                    text-[14px]
                    leading-5
                    text-[#F4F3FC]
                  "
                >
                  Achievement <span className="text-[#F7B84B]">(2)</span>
                </p>
                <div
                  className="
                    flex
                    gap-4
                    items-center
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                    "
                  >
                    <img src={MostWatched} alt="" />
                  </div>
                  <div
                    className="
                      w-10
                      h-10
                    "
                  >
                    <img src={Crown} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
                pl-[33px]
                pr-[29px]
                py-[14px]
                flex 
                g-profile_user 
                rounded-[20px]
                items-center
                justify-between
                border 
                border-[#FFFFFF26]
                mt-2
              "
              style={gradientBorderStyle}
            >
              <div
                className="
                  w-[150px]
                  h-[150px]
                "
              >
                <img src={Progress} alt="" />
              </div>
              <div
                className="
                  w-[125px]
                  h-[119px]
                "
              >
                <img src={Symbol} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </div>
      <div
        className="
          w-[950px]
          flex
          flex-col
          gap-[22px]    
        "
      >
        <ServiceCom owner={owner} />
        <ReviewCom />
      </div>
    </div>
  )
}



export default BuyerCom;

