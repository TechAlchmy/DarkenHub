import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hexagons from "../assets/Picdash/Hexagons.png"
import GradientBlur from "../assets/Picdash/gradient.png"
import Heroes from "../assets/Picdash/heroes.png"
import Chocolate from "../assets/Picdash/chocolate.png"
import Symbol from "../assets/Picdash/Symbol.png"
import NewsIcon from "../assets/Picdash/NewsIcon.png"
import DiscordIcon from "../assets/Picdash/DiscordIcon.png"
import TgIcon from "../assets/Picdash/TgIcon.png"
import Pro from "../assets/Picdash/Pro.png"
import Napal from "../assets/Picdash/Napal.png"
import Mobile from "../assets/Picdash/Mobile.png"
import Hexagon from "../assets/Picdash/Hexagon.png"
import DarkenhubIcon from "../assets/Picdash/DarkhubIcon.png"
import YellowEffect from "../assets/Picdash/yellow_effect.png"
import GreenRightEffect from "../assets/Picdash/green_side_effect.png"
import DarkenHubIcon from "../assets/Picdash/DarkhubIcon.png"
import DivideLine from "../assets/Picdash/games/divide.png"

import Dota2 from "../assets/Picdash/games/dota2.png"
import Warcraft from "../assets/Picdash/games/warcraft.png"
import LeagueofLegend from "../assets/Picdash/games/leagueoflegend.png"
import Telegram from "../assets/Picdash/games/telegram.png"
import TankWar from "../assets/Picdash/games/tankwar.png"
import ThunderWar from "../assets/Picdash/games/thunderwar.png"
import TryBaseBackground from "../assets/tryBaseHub/background.png"
import TopPriceImage from "../assets/toprice/top_price.png"

import GameCards from "../components/GameCards";
import GameCard from "../components/common/GameCard";
import TopPrice from "../components/TopPrice";

const Dashboard = () => {
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

  const TopPrices = [
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 0,
      rate: 1.23,
      price: 87.32
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 0,
      rate: 1.23,
      price: 87.32
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 1,
      rate: 2.52,
      price: 324.82
    },
    {
      name: "item name",
      direction: 0,
      rate: 1.23,
      price: 87.32
    },
  ]
  
  return (
    <>
    <div className="flex flex-row">
      <div className="w-3/5">
        <div className="relative">
          <img src={GradientBlur} 
            className="absolute z-1 left-[-160px] top-[-40px]"></img>
          <img src={Hexagons} 
            className="absolute z-2 left-[50px] top-[30px]"></img>
          <div className="absolute text-white tracking-wider text-[48px] left-[100px] top-[60px]">
            The first tournament among clans
          </div>
          <div className="absolute text-white tracking-wider text-[48px] left-[140px] top-[130px]">
            with a prize fund of 20,000₽
          </div>
          <button className="absolute top-[250px] left-[364px] text-black font-semibold text-[16px] bg-white rounded-md border-1 border-black px-4 py-2">
            Start for free
          </button>
          <div className="absolute top-[410px] left-[80px] text-white font-black text-[24px]">Game List</div>
          <div className="absolute top-[496px] left-[240px] text-[#615FB3] font-extrabold text-[16px]">(4 Games)</div>
          <GameCards />
        </div>
      </div>
      <div className="w-2/5">
        <div className="relative">
          <img src={Chocolate} className="pt-18"></img>
          <img src={Heroes} className="absolute top-0 left-[180px]"></img>
          <img src={Symbol} className="absolute top-[510px] left-[500px]"></img>
          <div className="absolute top-[560px] left-[240px]">
            <div className="relative">
              <img src={Hexagon}></img>
              <img src={Mobile} className="absolute top-[-20px] left-[30px]"></img>
              <img src={DiscordIcon} className="absolute top-[40px] left-[54px] cursor-pointer"></img>
            </div>
          </div>
          <div className="absolute top-[716px] left-[240px]">
            <div className="relative">
              <img src={Hexagon}></img>
              <img src={Pro} className="absolute top-[125px] left-[108px]"></img>
              <img src={TgIcon} className="absolute top-[40px] left-[54px] cursor-pointer"></img>
            </div>
          </div>
          <div className="absolute top-[640px] left-[376px]">
            <div className="relative">
              <img src={Hexagon}></img>
              <img src={Napal} className="absolute top-[-16px] left-[108px]"></img>
              <img src={NewsIcon} className="absolute top-[40px] left-[54px] cursor-pointer"></img>
            </div>
          </div>
          <div className="absolute top-[700px] flex flex-row items-center cursor-pointer">
            <img src={DarkenhubIcon}></img>
            <span className="text-white text-[16px] pl-1">Darken</span>
            <span className="text-[#FF6C00] text-[16px]">Hub</span>
          </div>
        </div>
      </div>
    </div>
    <div className="relative flex justify-center">
      <img src={YellowEffect} className="absolute w-full top-0" />
      <div className="flex flex-row gap-1 items-center rounded-full text-white text-[13px] mt-48 bg-slate-900 px-3 py-2">
        <img src={DarkenHubIcon} className="w-[9px] h-[12px]" />
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
          return <GameCard short={item.short} name={item.name} description={item.description} path={item.path} /> 
        })
      }
      </div>
    </div>
    <div className="bg-[#040404] px-4">
      <img src={TopPriceImage} />
      <div className="flex flex-row gap-4 py-6 relative z-[2] overflow-auto custom-scrollbar">
      {
        TopPrices.map((item, index) => {
          return <div key={index}>
              <TopPrice name={item.name} rate={item.rate} direction={item.direction} price={item.price} />
            </div>
        })
      }
      </div>
    </div>
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
    </>
  )
}

export default Dashboard;