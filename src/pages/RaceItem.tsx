import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { use } from 'i18next';
import * as dotenv from 'dotenv';
dotenv.config();
interface RaceItem {
  item_id: string;
  seller: string;
  buyer: Array<{ buyer: string | null; bidPrice: number; tradeLink: string }>;
  item: {
    itemName: string;
    iconUrl: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  }
  price: number;
  status: number;
}

interface RaceItemList {
  item_id: string;
  seller: string;
  buyer: Array<{ buyer: string | null; bidPrice: number; tradeLink: string; date: string }>;
  item: {
    itemName: string;
    iconUrl: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  }
  price: number;
  startDate: Date;
  status: number;
}

const RaceItem = () => {
  const [trandLink, setTrandLink] = useState('');
  const [bidPrice, setBidPrice] = useState<number>(0);
  const [topPrice, setTopPrice] = useState<number>(0);
  const [same, setSame] = useState(false);
  const location = useLocation();
  const data = location.state;
  let buyer = localStorage.getItem("userID");
  const [raceItemData, setRaceItemData] = useState<RaceItem>({} as RaceItem);
  const [raceItemList, setRaceItemList] = useState<RaceItemList>({} as RaceItemList);
  
  useEffect(() => {
    if (data.seller == buyer) setSame(true);
    const newBuyerData = {
      buyer: buyer,
      bidPrice: bidPrice,
      tradeLink: trandLink,
    };
    setRaceItemData({
      item_id: data.item_id,
      seller: data.seller,
      buyer: [newBuyerData],
      item: {
        itemName: data.item.itemName,
        iconUrl: data.item.iconUrl,
        quality: data.item.quality,
        rarity: data.item.rarity,
        type: data.item.tyoe,
        hero: data.item.hero,
      },
      price: data.price,
      status: data.status,
    });

    const fetchRaceItem = async () => {
      const response = await axios.post(`${process.env.VITE_APP_LOCAL_URL}/dota2/raceTransactionList`, {item_id: data.item_id});
      const raceBidList = response.data.data;
      if (raceBidList && raceBidList.buyer && raceBidList.buyer.length > 0) {
        setTopPrice(raceBidList.buyer[raceBidList.buyer.length - 1].bidPrice);
      }
      setRaceItemList(raceBidList);
    }
    fetchRaceItem();
  }, [bidPrice, trandLink])
  const sendData = async () => {
    if(Object.keys(raceItemData).length !== 0) {
      try {
        const response = await axios.post(`${process.env.VITE_APP_LOCAL_URL}/dota2/upgradeRaceTransactionList`, raceItemData);
        const raceBidList = response.data.data;
        setRaceItemList(raceBidList);
        console.log(raceBidList);
      } catch (error) {
        console.error('Error upgrade Race item:', error);
      }
    }
  }
  const raceHandler = async () => {
    if(!trandLink) {alert("Trade Link must be valid"); return;}
    else if(bidPrice < 0) {alert("bid Price must be valid"); return;}
    else if(bidPrice < topPrice) {alert("bid Price must be bigger than top price"); return;}
    else if(bidPrice < data.price) {alert("bid Price must be bigger than start Price"); return;}
    else sendData();
  }
  return (
    console.log(raceItemList),
    <div>
      <div className="flex justify-around items-center pt-10">
        <div className='relative flex gap-5 items-center'>
          <img src={data.item.iconUrl} alt="" className="w-[200px] h-[200px]" />
          <div className='text-[20px] font-crimson leading-[26px] text-white font-semibold border-[#0000004D] w-full'>
            <p className='text-white'>{`SellerSteamID: ${data.seller}`}</p>
            <p className='text-white'>{`ItemName: ${data.item.itemName}`}</p>
            <p className="text-[#E27525]">{`Price: ${data.price}`}</p>
            <p className="text-white">{`Quality: ${data.item.quality}`}</p>
            <p className="text-white">{`Rarity: ${data.item.rarity}`}</p>
            <p className="text-white">{`Type: ${data.item.type}`}</p>
            <p className="text-white">{`Hero: ${data.item.hero}`}</p>
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <label className="text-white font-bold text-sm font-jakarta mb-1 block pl-3" htmlFor="tradeLink">TradeLink</label>
          <input
            disabled={same}
            type="text" 
            id="tradeLink" 
            placeholder="Write your Trade Link"
            value={trandLink} 
            onChange={(e) => setTrandLink(e.target.value)} 
          />
          <label className="mt-3 text-white font-bold text-sm font-jakarta mb-1 block pl-3" htmlFor="bidPrice">Bid Price</label>
          <input
            disabled={same}
            type="number" 
            id="bidPrice" 
            placeholder="Write your Trade Link"
            value={bidPrice}
            onChange={(e) => setBidPrice(Number(e.target.value))} 
          />
          <button
            disabled={same}
            className="mt-3 p-2 bg-green-500 text-white text-[14px] rounded-md"
            onClick={raceHandler}
          >Place A Bid
          </button>
        </div>
      </div>
      <div className="px-10 mt-10 flex flex-col gap-4">
        {raceItemList && raceItemList.buyer && raceItemList.buyer.length > 0 ? (
          [...raceItemList.buyer].reverse().map((item, index) => (
            <div key={index} className="border-b py-2 text-white flex justify-around items-center">
              <p className='w-[20%]'>{item.buyer}</p>
              <p className='w-[20%]'>{new Date(item.date).toLocaleString()}</p>
              <p className='w-[20%]'>{`$${item.bidPrice}`}</p>
            </div>
          ))
        ) : (
          <p className="text-white">No bids available.</p>
        )}
      </div>
    </div>
  )
}

export default RaceItem;