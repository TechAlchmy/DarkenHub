import { useMemo } from "react";

import OVerwatch from "../../assets/profile/overwatch-2.png";
import Dota2 from "../../assets/profile/dota-2-logo-A8CAC9B4C9-seeklogo 1.png";
import Lol from "../../assets/profile/LoL_icon 1.png";
import Apex from "../../assets/profile/Apex-Legends-Emblem 1.png";
import Valo from "../../assets/profile/valorant-logo-3D72D9117F-seeklogo 1.png";
import EditButton from "../../components/common/EditButton";

interface props {
  owner?: boolean
}
const ServiceCom = ({owner} : props) => {

  const gameServices = useMemo(() => {
    return [
      {
        bg: "#FA9C1E4D",
        name: "Overwatch",
        img: OVerwatch
      },
      {
        bg: "#EA473B4D",
        name: "Dota 2",
        img: Dota2
      },
      {
        bg: "#28ACA64D",
        name: "League of ...",
        img: Lol
      },
      {
        bg: "#9C68C64D",
        name: "Apex Lege...",
        img: Apex
      },
      {
        bg: "#7166FF4D",
        name: "Valorant",
        img: Valo
      },
    ]
  }, []);
  return (
    <div
      className="
        bg-service_bg
        h-[800px]
        rounded-[30px]
        backdrop-blur-40
        relative
      "
    >
      <div
        className="
          pl-[86px]
          pr-[47px]
          mt-3
          flex
          justify-between
          items-center
        "
      >
        <div
          className="
            flex
            gap-2
            items-center
          "
        >
          <GameServiceItem 
            service={gameServices[1]} 
          />
          <div
            className="
              font-inter
              font-[600]
              text-[36px]
              leading-[36px]
              text-white
            "
          >
            Services
          </div>
        </div>
        {owner && (
          <EditButton />
        )}
        <div
          className="
            flex gap-3
          "
          >
            {gameServices.map((service, index) => (
              <GameServiceItem key={index} service={service} />
            ))}
        </div>
      </div>
      <div
        className="
          flex
          flex-col
          mt-2
          pr-10
          gap-2
        "
      >
        <ServiceRow />
        <ServiceRow />
        <ServiceRow />
        <ServiceRow />
        <ServiceRow />
        <ServiceRow />
      </div>
      <div
        className="
          bg-view-more
          h-[46px]
          w-[216px]
          rounded-[10px]
          absolute
          bottom-[22px]
          left-[367px]
          flex
          items-center
          justify-center
          text-[15px]
          font-[500]
          font-inter
        "
      >
          View More
      </div>
    </div>
  )
}

const ServiceRow = () => {
  return (
    <div
      className="
        min-h-[94px]
        bg-service
        boder-service
        flex
        items-center
        pl-4
        pr-3
        rounded-tr-xl
        rounded-br-xl
      "
    >
      <div
        className="
          w-[46px]
          h-[46px]
          bg-[#C5CCDE]
          rounded-full
        "
      >

      </div>
    </div>
  )
}


interface props {
  service: any
}

export const GameServiceItem = ({service} : props) => {

  return (
    <div
      className="
        flex
        flex-col
        gap-2
      "
    >
      <div
        className={`
          w-[60px]
          h-[60px]
          bg-[${service.bg}]
          rounded-[22px]
          flex
          justify-center
          items-center
        `}
        style={{backgroundColor: service.bg}}
      >
        <img src={service.img} alt="" />
      </div>
      <p
        className="
          font-[500]
          text-[10px]
          leading-[15px]
          text-center
          text-[#F4F3FC]
        "
      >
        {service.name}
      </p>
    </div>
  )
}

export default ServiceCom;