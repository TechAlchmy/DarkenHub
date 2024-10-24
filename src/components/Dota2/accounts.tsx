import { memo, useMemo } from "react";
import banner from "../../../src/assets/Picdash/games/dota2/banner.png";
import place1 from "../../../src/assets/Picdash/games/dota2/place1.png";
import place2 from "../../../src/assets/Picdash/games/dota2/place2.png";
import { tPlace, tSeller } from "../../types";
import PlaceBidItem from "./placeBidItem";
import TopSellerItem from "./topSellerItem";
import Seller1 from '../../assets/Picdash/games/dota2/seller1.png';
import Seller2 from '../../assets/Picdash/games/dota2/1.png';
import Seller3 from '../../assets/Picdash/games/dota2/1.png';
import FilterPannel from "./filterPannel";

const Accounts = memo(() => {
  
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

  return (
    <div className="px-2 relative z-10">
      <div className="flex gap-2 justify-between items-end">
        <div className="px-5 border-image-filter  flex justify-between w-[90%] bg-banner items-center py-5 gap-5 rounded-xl" style={{backgroundImage: `url(${banner})`}}>
          <p className="text-2xl text-white font-bold">Automatic purchase through the client</p>
          <p className="text-white font-bold w-1/2 text-center">The automated client allows you to send and <br></br>
          receive items by simply confirming the trade on your phone.</p>
          <button className="bg-buy_button py-2 px-6 rounded-lg  border-custom border">
            <p className="text-white">Buy <span className="ml-3">&gt;</span></p>
          </button>
        </div>
        <div className="text-[#5EEAD4] items-center flex">
          Show More <span className="ml-3 text-3xl -mt-1">&gt;</span>
        </div>
      </div>
      <div className="mt-5 flex">
        <FilterPannel />
        <div className="px-10 w-3/4">
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
            </div>
        </div>
      </div>
    </div>
  );
})

export default Accounts;
