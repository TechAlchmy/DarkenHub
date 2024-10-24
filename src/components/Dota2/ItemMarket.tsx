import { memo, useMemo, useState } from "react";
import DownIcon from "../../assets/Picdash/games/dota2/downIcon.png"
import Lightning from "../../assets/Picdash/games/dota2/lightning.png"
import SearchIcon from "../../assets/Picdash/games/dota2/search.png"
import Ship from "../../assets/Picdash/games/dota2/ship.png"
import { Switch } from "antd"
import GameServer from "../../components/common/GameServer";

const ItemMarket = memo(() => {

  const [activeBtn, setActiveBtn] = useState(0);
  const gameServers = useMemo(() => {
    return [
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Duo, 3000-3500 (price for one win)",
        price: 13.39,
        color: "#166708"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Solo, 8000+ (price for one win)",
        price: 13.39,
        color: "#166708"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Solo, 8000+ (price for one win)",
        price: 13.39,
        color: "#C86C00"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "LOTS OF SKINS AUTO-ISSUE ",
        price: 13.39,
        color: "#770577"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Duo, 3000-3500 (price for one win)",
        price: 13.39,
        color: "#166708"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Solo, 8000+ (price for one win)",
        price: 13.39,
        color: "#166708"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "Solo, 8000+ (price for one win)",
        price: 13.39,
        color: "#C86C00"
      },
      {
        server: "EU",
        salename: "Name",
        review: 328,
        description: "LOTS OF SKINS AUTO-ISSUE ",
        price: 13.39,
        color: "#770577"
      },
    ]
  }, []); 
  return (
    <div className="relative bg-black/[0.4] z-[2] rounded-sm mx-4 px-4 pt-12 pb-4 mb-6">
      <div className="flex flex-row gap-8 justify-end">
        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <span className="text-white text-[16px]">Server</span>
          <img src={DownIcon} alt="" />
        </div>
        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <span className="text-white text-[16px]">Rank</span>
          <img src={DownIcon} alt="" />
        </div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <span className="text-white text-[16px]">Online Sellers</span>
          <Switch />
        </div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <img src={Lightning} alt="" />
          <span className="text-white text-[16px]">Automatic Delivery</span>
          <Switch defaultChecked={false} />
        </div>
      </div>
      <div className="flex flex-row gap-8 justify-end mt-4 px-4">
        <div
          className={`w-[110px] rounded-full px-4 py-1 cursor-pointer text-white text-[14px] text-center border-[1px] ${activeBtn == 0 ? 'bg-gradient-to-r from-indigo-500' : ''}`}
        >
          All
        </div>
        <div
          className={`w-[110px] rounded-full px-4 py-1 cursor-pointer text-white text-[14px] text-center border-[1px] ${activeBtn == 1 ? 'bg-gradient-to-r from-indigo-500' : ''}`}
        >
          Sale
        </div>
        <div
          className={`w-[110px] rounded-full px-4 py-1 cursor-pointer text-white text-[14px] text-center border-[1px] ${activeBtn == 2 ? 'bg-gradient-to-r from-indigo-500' : ''}`}
        >
          Rent
        </div>
        <div className="relative">
          <div className="absolute rounded-full bg-transparent top-[5px] left-[8px]">
            <img src={SearchIcon} alt="" />
          </div>
          <input 
            className="rounded-full bg-transparent min-h-[32px] w-[200px] text-white text-[12px] italic pl-[40px] border-[1px] border-white"
            placeholder="Search By Description"
          ></input>
        </div>
        <div className="flex flex-row cursor-pointer items-center bg-[#1A1D1E] px-4 py-1 rounded-full gap-2">
          <img src={Ship} alt="" />
          <span className="text-white text-[13px]">Price</span>
        </div>
      </div>
      <div className="px-4 mt-2">
        <tr className="text-white text-[16px]">
          <th className="text-bordered">Server</th>
          <th className="text-bordered">Salesman</th>
          <th className="text-bordered">Description</th>
          <th className="text-bordered">Price</th>
        </tr>
        {
          gameServers.map((item) => {
            return <div className="mt-4">
              <GameServer server={item.server} salename={item.salename} review={item.review} description={item.description} price={item.price} color={item.color} />
            </div>
          })
        }
      </div>
      <div className="mt-48 px-4">
        <button className="text-white text-[14px] px-4 py-2 bg-slate-700 rounded shadow-2xl shadow-cyan-500/50 tracking-wider">More Offers</button>
      </div>
      <div className="mt-8 px-4 flex flex-col gap-2">
        <span className="text-white text-[16px] text-bordered">
          Want to increase your MMR in Dota 2? Contact professional boosters on DarkenHub for help!
        </span>
        <span className="text-white text-[16px] text-bordered">
          We guarantee security, direct communication with performers, competitive prices and the required rating in Dota 2.
        </span>
      </div>
      <div className="mt-8 px-4 flex flex-row">
        <span className="text-white text-[20px] tracking-wider">How to order an MMR boost on</span>
        <span className="text-[#7879F1] font-extrabold text-[20px] tracking-widest pl-2">Darken</span>
        <span className="text-[#F5841F] font-extrabold text-[20px] tracking-widest">Hub</span>
      </div>
      <div className="mt-8 px-4 flex flex-col gap-2">
        <span className="text-white text-[16px] tracking-wider">Select an offer from the list and contact the booster directly.</span>
        <span className="text-white text-[16px] tracking-wider">Pay for the service through our secure payment system.</span>
        <span className="text-white text-[16px] tracking-wider">Wait for the work to be completed and complete the transaction.</span>
        <span className="text-white text-[16px] tracking-wider">After completion, you will be able to rate the performer's work and leave a review.</span>
        <span className="text-white text-[16px] tracking-wider">For boosters</span>
        <span className="text-white text-[16px] tracking-wider">If you want to make a Dota 2 rating boost a source of your additional income, then the DarkenHub platform is always happy to see you! Every day, our resource is visited by players who lack time or skills, so the MMR boost service is always in demand. Do not waste hours at the computer in vain - earn money on your favorite business, getting not only pleasure, but also additional income!</span>
        <span className="text-white text-[16px] tracking-wider mt-4">DarkenHub is your path to success in Dota 2!</span>
      </div>
    </div>
  );
});


export default ItemMarket;