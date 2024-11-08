import { memo, useMemo, useState } from "react"
import { motion } from "framer-motion";

import Dota2Background from "../../assets/Picdash/games/dota2/dota2.png"
import DivideLine from "../../assets/Picdash/games/dota2/divide.png"
import Arcana from "../../assets/Picdash/games/dota2/arcana.png"
import Effect from "../../assets/Picdash/games/dota2/App & Mask.png"
import Rec from "../../assets/Picdash/games/dota2/non_acvtive.png";

import AccountMarket from "../../components/Dota2/AccountMarket"
import ItemMarket from "../../components/Dota2/ItemMarket"
import GlobalChat from "../../components/layouts/GlobalChatPro"

const Dota2 = memo(() => {

  const [activeBtn, setActiveBtn] = useState(1);
  const renderGame = useMemo(() => {
    switch(activeBtn) {
      case 0: return (
        <ItemMarket />
      )
      case 1: return (
        <AccountMarket />
      );
    }
  }, [activeBtn]);
  return (
    <motion.div className="bg-black overflow-hidden">
      <div className="relative ">
        <div className="bg">
          <img src={Dota2Background} className="absolute left-0 -top-20 w-full h-[500px] -z-0" alt="bg" />
          <div className="absolute -top-3 z-10 right-0 ">
            <img src={Arcana} alt="" />
          </div>
          <div className="absolute top-80 left-[-260px] w-full z-[1]">
            {/* <img src= alt="" /> */}
            <img src={Effect} className="w-[1824px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[800px]" alt="" />
          </div>
          <div className="absolute bg-custom-gradient w-full h-[265px] left-0 top-[160px]">

          </div>
        </div>
        <div className="relative z-2 w-2/3 px-10 mt-12">
          <div className="flex flex-row items-center tracking-widest">
            <span className="text-[#999999] text-[36px] font-bold text-bordered pr-2">Dota2 Accounts On </span>
            <span className="text-[#7879F1] text-[36px] font-bold text-bordered">Darken</span>
            <span className="text-[#E27525] text-[36px] font-bold text-bordered">Hub</span>
          </div>
          <div className="mt-5">
            <p className="text-white font-bold text-xl">DarkenHub is a new and modern platform for buying and selling game accounts, guaranteeing maximum security and fair transactions. If you are looking for a Dota 2 account, we have the largest selection at affordable and market prices. We ensure the protection of each user and ensure that all transactions are legal and transparent. Only legally acquired accounts are allowed to be sold on DarkenHub, guaranteeing quality and security at every stage of the transaction.</p>
          </div>
        </div>
        <div className="relative flex flex-row gap-4 px-10 mt-8">
          <button className="min-w-[180px] rounded-full px-4 py-2 bg-[#7879F1] text-[white] text-[14px]">place an ad</button>
          <button className="min-w-[180px] rounded-full px-4 py-2 text-[#7879F1] text-[14px] border-[#7879F1] border-2">buy</button>
        </div>
        <div className="flex flex-row gap-12 mt-8 relative px-10">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[48px] text-[#7879F1] font-extrabold">10K</span>
            <span className="text-white text-[14px]">sellers</span>
          </div>
          <div className="flex flex-row gap-12">
            <img src={DivideLine} alt="" />
            <div className="flex flex-col justify-center items-center">
              <span className="text-[48px] text-[#7879F1] font-extrabold">32K</span>
              <span className="text-white text-[14px]">announcements</span>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <img src={DivideLine} alt="" />
            <div className="flex flex-col justify-center items-center">
              <span className="text-[48px] text-[#7879F1] font-extrabold">42K</span>
              <span className="text-white text-[14px]">transactions</span>
            </div>
          </div>
        </div>
        <div className="px-10 flex items-center mt-10">
          <div>
            <div className="w-40 h-40 justify-center relative flex items-center cursor-pointer z-50" onClick={() => setActiveBtn(0)}>
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Item Market</p>
            </div>
            <div className="w-40 h-40 justify-center relative flex items-center cursor-pointer z-50" onClick={() => setActiveBtn(1)}>
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Accounts</p>
            </div>
          </div>
          <div className="-ml-5">
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Boost MMR</p>
            </div>
          </div>
          <div className="-ml-5">
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Coaching</p>
            </div>
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Calibration</p>
            </div>
          </div>
          <div className="-ml-5">
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">VHS Links</p>
            </div>
          </div>
          <div className="-ml-5">
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold">Other</p>
            </div>
            <div className="w-40 h-40 justify-center relative flex items-center">
              <img src={Rec} alt="" className="absolute left-0 top-0" />
              <p className="relative pb-5 text-xl text-white font-bold"></p>
            </div>
          </div>
        </div>
      </div>
      {renderGame}
      <GlobalChat roomId="dota2" />
    </motion.div>
  )
})

export default Dota2;