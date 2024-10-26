import { memo, useMemo } from "react";
import place1 from "../../../src/assets/Picdash/games/dota2/place1.png";
import place2 from "../../../src/assets/Picdash/games/dota2/place2.png";
import { tPlace, tSeller } from "../../types";
import PlaceBidItem from "./placeBidItem";
import TopSellerItem from "./topSellerItem";
import Seller1 from '../../assets/Picdash/games/dota2/seller1.png';
import Seller2 from '../../assets/Picdash/games/dota2/1.png';
import Seller3 from '../../assets/Picdash/games/dota2/1.png';
import bg1 from '../../assets/Picdash/games/dota2/Blue6.png';

import FilterPannel from "./filterPannel";
import Banner from "./banner";
import HotBids from "./hotBid/hotBid";
import Items from "./Items";

const ItemMarket = memo(() => {
  
  const highLights: tPlace[] = useMemo(() => {
    return [
      {image: place1, time: '18 : 17m : 29s', amount: 17.53},
      {image: place2, time: '18 : 17m : 29s', amount: 17.53}
    ]
  }, []);
  const TopSellers: tSeller[] = useMemo(() => {
    return [
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller2,
        userId: '@astroo2',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller3,
        userId: '@mikle',
        amount: '232,102',
        premium: false
      },
      {
        avatar: Seller1,
        userId: '@11erorD.',
        amount: '232,102',
        premium: false
      },
      {
        avatar: Seller2,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller3,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
      {
        avatar: Seller1,
        userId: '@dicar',
        amount: '232,102',
        premium: true
      },
    ]
  }, [])
  const gradientBorderStyle = {
    border: '1px solid',
    borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(39, 55, 207, 0) -4.69%, rgba(189, 252, 254, 0.5) 100%)',
    borderImageSlice: 1,
  };
  return (
    <div>
      <div className="px-2 relative z-10">
        <Banner />
        <div className="mt-5 flex">
          <FilterPannel />
          <div className="pl-5 w-3/4">
              <div className="grid grid-cols-2 gap-10">
                {highLights.map((item) => (
                  <PlaceBidItem data={item} />
                ))}
              </div>
              <div className="mt-5">
                <div className="text-2xl text-[#6EE7B7] font-bold">
                <span className="px-1 pr-2">⭐</span>
                  Top Sellers
                </div> 
                <div className="flex flex-row gap-8 py-6 relative z-[2] overflow-auto custom-scrollbar">
                {
                  TopSellers.map((item) => (
                    <TopSellerItem seller={item} />
                  ))
                }
                </div> 
                <HotBids />
                <Items />
              </div>
          </div>
        </div>
      </div>
      <div className="px-[300px] -mt-10">
        <div className="">
          <button className="text-white w-[166px] h-11 bg-[linear-gradient(180deg,_rgba(61,_66,_68,_0)_-40.91%,_rgba(158,_170,_176,_0.62)_132.95%)] rounded" style={gradientBorderStyle}>more offers <span className="ml-5">{`>`}</span> </button>
        </div>
        <div className="text-[15px] left-[22px] text-white mt-9">
          <p>Want to increase your MMR in Dota 2? Contact professional boosters on DarkenHub for help!<br></br>
          We guarantee security, direct communication with performers, competitive prices and the required rating in Dota 2.<br />
          <br></br>
          <span className="text-[20px] leading-[30px]">How to order an MMR boost on <span className="text-[#7879F1]">Darken</span><span className="text-[#F5841F]">Hub</span>:</span>
          <br></br>
            Select an offer from the list and contact the booster directly.<br></br>
            Pay for the service through our secure payment system.<br></br>
            Wait for the work to be completed and complete the transaction.<br></br>
            After completion, you will be able to rate the performer's work and leave a review.<br></br>
            For boosters<br></br>
            If you want to make a Dota 2 rating boost a source of your additional income, then the DarkenHub platform is always happy to see you! Every day, our resource is visited by players who lack time or skills, so the MMR boost service is always in demand. Do not waste hours at the computer in vain - earn money on your favorite business, getting not only pleasure, but also additional income!<br></br>
            <br></br>
            DarkenHub is your path to success in Dota 2!<br></br>
          </p>
        </div>
      </div> 
      <div className="bg">
        <img src={bg1} className="absolute w-[1054px] h-[1054px] top-[1502px] left-[100px]" alt="" />
      </div>         
    </div>
  );
})

export default ItemMarket;
