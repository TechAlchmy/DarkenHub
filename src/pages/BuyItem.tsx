
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
interface BuyItem {
  item_id: string;
  seller: string;
  buyer: string | null;
  item: {
    itemName: string,
    iconUrl: string,
    quality: string,
    rarity: string,
    type: string,
    hero: string
  },
  price: number;
  tradeLink: string;
  status: number;
}

const BuyItem = () => {
  const [trandLink, setTrandLink] = useState('');
  const [buyItemData, setBuyItemData] = useState<BuyItem>({} as BuyItem);
  const [same, setSame] = useState(false);
  let buyer = localStorage.getItem("userID");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (data) {
      if(data.seller == buyer) setSame(true);
      setBuyItemData({
        item_id: data.item_id,
        seller: data.seller,
        buyer: buyer,
        item: {
          itemName: data.item.itemName,
          iconUrl: data.item.iconUrl,
          quality: data.item.quality,
          rarity: data.item.rarity,
          type: data.item.type,
          hero: data.item.hero
        },
        price: data.price,
        tradeLink: trandLink,
        status: 0
      });
    }
  }, [data, buyer, trandLink]);

  const buyHandler = async () => {
    console.log(buyItemData);
    if(buyItemData.tradeLink === "") return;
    try {
      const response = await axios.post(`${process.env.VITE_APP_LOCAL_URL}/dota2/buyItem`, buyItemData);
      const responseData = response.data.data;
      console.log(responseData);
      const currentPath = location.pathname;
      const newPath = currentPath.replace('/user/buyItem', '/user/transactionTable',);
      navigate(newPath, { state: responseData });
    } catch (error) {
      console.error('Error buying item:', error);
    }
  }
  return(
    <div className="flex justify-around items-center pt-10">
      <div className='relative flex gap-5 items-center'>
        <img src={data.item.iconUrl} alt="" className="w-[200px] h-[200px]" />
        <div className='text-[20px] font-crimson leading-[26px] text-white font-semibold border-[#0000004D] w-full'>
          <p className='text-white'>{`SellerSteamID: ${data.seller}`}</p>
          <p className='text-white'>{`ItemName: ${data.item.itemName}`}</p>
          <p className="text-[#E27525]">{`Price: $${data.price}`}</p>
          <p className="text-white">{`Quality: ${data.item.quality}`}</p>
          <p className="text-white">{`Rarity: ${data.item.rarity}`}</p>
          <p className="text-white">{`Type: ${data.item.type}`}</p>
          <p className="text-white">{`Hero: ${data.item.hero}`}</p>
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="tradeLink">LradeLink</label>
        <input 
          disabled={same}
          type="text" 
          id="tradeLink" 
          placeholder="Write your Trade Link"
          value={trandLink} 
          onChange={(e) => setTrandLink(e.target.value)} 
        />
        <button disabled={same}
          className="mt-3 p-2 bg-green-500 text-white text-[14px] rounded-md"
          onClick={buyHandler}
        >Buy
        </button>
      </div>
    </div>
  )
}

export default BuyItem;

// 