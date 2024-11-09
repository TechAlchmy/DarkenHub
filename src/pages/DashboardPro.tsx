
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Heros from "../assets/dashboard/Component 2.png";
import DarkenHubIcon from "../assets/Picdash/DarkhubIcon.png";
import BlueEffect from "../assets/dashboard/gradient.png"
import BlueEffect1 from "../assets/dashboard/blueGradiant1.png"
import LineEffect from "../assets/dashboard/lingEffect.png"
import LineEffect1 from "../assets/dashboard/Lines.png"
import GreenRightEffect from "../assets/Picdash/green_side_effect.png"
import DivideLine from "../assets/Picdash/games/divide.png"
import Dota2 from "../assets/Picdash/games/dota2.png"
import Warcraft from "../assets/Picdash/games/warcraft.png"
import LeagueofLegend from "../assets/Picdash/games/leagueoflegend.png"
import Telegram from "../assets/Picdash/games/telegram.png"
import TankWar from "../assets/Picdash/games/tankwar.png"
import ThunderWar from "../assets/Picdash/games/thunderwar.png"
import TryBaseBackground from "../assets/tryBaseHub/background.png"
// import TopPriceImage from "../assets/toprice/top_price.png"
import yellowEffect from "../assets/dashboard/yellow_effect.png"

import GameSlider from "../components/Dashboard/GameSlider";
import Hexagons from "../components/Dashboard/hexagongs";
import NewPannel from "../components/Dashboard/NewPannel";
import GameCard from "../components/common/GameCard";
// import TopPrice from "../components/TopPrice";
import GlobalChat from "../components/layouts/GlobalChatPro";


const DashboardPro = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
  })

  const GameList = [
    {
      short: "dota2",
      name: "Dota 2",
      description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming",
      path: Dota2,
    },
    {
      short: "warcraft",
      name: "Warcraft",
      description: "Accounts, Coins, Top Up, Services, Other ",
      path: Warcraft,
    },
    {
      short: "leagueoflegend",
      name: "League of Legend",
      description: "Accounts, Riot Points, Top Up, Boosting, Services, Qualification, Coaching, Prime Gaming, Battle Pass, Other",
      path: LeagueofLegend,
    },
    {
      short: "telegram",
      name: "Telegram",
      description: "Accounts, Riot Points, Top Up, Boosting, Services, Qualification, Coaching, Prime Gaming, Battle Pass, Other",
      path: Telegram,
    },
    {
      short: "thunder",
      name: "War Thunder",
      description: "Accounts, Riot Points, Top Up, Boosting, Services, Qualification, Coaching, Prime Gaming, Battle Pass, Other",
      path: ThunderWar,
    },
    {
      short: "worldtank",
      name: "World of Tanks",
      description: "Accounts, Riot Points, Top Up, Boosting, Services, Qualification, Coaching, Prime Gaming, Battle Pass, Other",
      path: TankWar,
    },
  ]

  // const TopPrices = [
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 0,
  //     rate: 1.23,
  //     price: 87.32
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 0,
  //     rate: 1.23,
  //     price: 87.32
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 1,
  //     rate: 2.52,
  //     price: 324.82
  //   },
  //   {
  //     name: "item name",
  //     direction: 0,
  //     rate: 1.23,
  //     price: 87.32
  //   },
  // ]
  return (
    <motion.div className="w-full relative ">
      <div className="bg w-full overflow-hiddenabsolute">
        <img src={BlueEffect} className=" absolute w-[803px] h-[913px] -left-40 -top-32" alt="" />
        <img src={BlueEffect1} className="absolute w-[800px] h-[913px] z-10 -left-40 -top-32" alt="" />
        <img src={LineEffect} className="absolute w-[1920px] -top-24 -left-80 t-0" alt="" />
        <img src={LineEffect1} className="absolute top-[1000px] -z-20 w-[29200px] -left-[300px]" alt="" />
        <div className="absolute right-[0rem] top-[-2rem] w-[700px] h-[600px] ">
          <img src={Heros} alt="" />
        </div>
        <img src={yellowEffect} className="absolute w-full h-full top-[700px]" alt="" />
      </div>
      <div className="hero">
        <div className="">
          <h3 className="-ml-[500px] relative z-10 tracking-widest font-inter text-[46px] leading-[52px] text-center pt-[46px] text-[#909090]">
            The first tournament among clans<br></br>
            <span className="text-[#F3F3F3]">with a prize fund of 20,000₽</span>
          </h3>
        </div>
        <Hexagons />
        <div className="flex -mt-60 pl-[42px] pr-[100px] justify-between">
          <div className="w-[700px]">
            <GameSlider />
          </div>
          <div className="w-[30%]">
            <NewPannel />
          </div>
        </div>
        <div className="flex flex-row w-[300px] mx-auto gap-1 items-center rounded-full text-white text-[13px] mt-[166px] px-3 py-2">
          <img src={DarkenHubIcon} className="w-[9px] h-[12px]" alt="" />
          <span>BaseHub Is Now Open for Everyone</span>
        </div>
      </div>


      <div className="relative bg-[#040404] px-16 py-6 mt-12 overflow-hidden">
        <img src={GreenRightEffect} className="absolute right-[-200px] top-[-240px] z-0" />
        <div className="games_list flex flex-row justify-between relative z-[10]">
          <div className="flex flex-row items-center justify-between cursor-pointer">
            <img src={DarkenHubIcon} className="w-[9px] h-[12px]" />
            <span className="bg-[#221105] text-[#FF6C02] text-[11px] rounded-full px-2 py-1 ml-1">Public Beta</span>
            <span className="text-[#484B51] pl-2">/</span>
            <span className="text-[#484B51] pl-2">League of Legend</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Counter-Strike 2</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Dota 2</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Team Fight</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Apex Legend</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Destiny 2</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">Fortnite</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-between cursor-pointer">
            <img src={DivideLine} />
            <span className="text-[#484B51]">League of Legend</span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 px-8">
          {
            GameList.map((item, index) => {
              return <GameCard key={index} short={item.short} name={item.name} description={item.description} path={item.path} />
            })
          }
        </div>
      </div>

      {/* <div className="bg-[#040404] px-4 ">
        <img src={TopPriceImage} />
        <div className="flex flex-row gap-4 py-6 relative w-[1605px] z-[2] overflow-auto custom-scrollbar">
        {
          TopPrices.map((item, index) => {
            return <div key={index}>
                <TopPrice name={item.name} rate={item.rate} direction={item.direction} price={item.price} />
              </div>
          })
        }
        </div>
      </div> */}

      <div className="bg-[#040404] pt-4">
        <div className="relative">
          <img src={TryBaseBackground} className="w-full" />
          <div className="absolute w-full px-24 flex flex-row items-center justify-between top-[56px]">
            <div className="flex flex-col gap-3">
              <span className="text-white text-[24px] font-extrabold">Try BaseHub Today</span>
              <span className="text-white text-[14px]">Start for free, then gorw with your team</span>
            </div>
            <div className="cursor-pointer bg-[#FF6C00] rounded-full text-black text-[16px] font-semibold px-8 py-2">
              Get Started
            </div>
          </div>
        </div>
      </div>
      <GlobalChat roomId="dashboard" />
    </motion.div>
  );
}

export default DashboardPro;