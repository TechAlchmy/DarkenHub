import { useState, useEffect } from "react";
import axios from "axios";

import Dashlogo from "../assets/dashboard/Vector.png";

import { SellItem, SendData } from "../types";
import * as dotenv from 'dotenv';
dotenv.config();
interface PostItems {
  id: string;
  iconUrl: string;
  itemName: string;
  quality: string;
  rarity: string;
  type: string;
  hero: string;
}

const PostItems = () => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState("");
  const [sellItemData, setSellItemData] = useState<SellItem>();
  const [postItemsList, setPostItemsList] = useState<PostItems[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [itemSelect, setItemSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  let userID: string | null = localStorage.getItem("userID");

  useEffect(() => {
    const fetchPostItemData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.VITE_APP_LOCAL_URL}/dota2/postItems`);
        // const response = await axios.get(`${process.env.VITE_APP_LOCAL_URL}/dota2/postItems`, { params: { userID } });
        setLoading(false);
        const data = response.data.data;
        setPostItemsList(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
  
    fetchPostItemData();
  }, []);

  const itemData = (item: any, index: any) => {
    setSellItemData(item);
    setItemSelect(true);
    setSelectedItem(index);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const marketItem = async () => {
    if (!sellItemData) {
      console.error("No item selected to post.");
      return;
    }

    const newMarketItemData: SendData = {
      item_id: sellItemData.id,
      seller: userID || "",
      price: price,
      item: {
        iconUrl: `https://steamcommunity-a.akamaihd.net/economy/image/${sellItemData.iconUrl}` || "",
        itemName: sellItemData.itemName || "",
        quality: sellItemData.quality || "",
        rarity: sellItemData.rarity || "",
        type: sellItemData.type || "",
        hero: sellItemData.hero || "",
      },
    };

    const newRaceItemData: SendData = {
      item_id: sellItemData.id,
      seller: userID || "",
      price: price,
      status: 0,
      item: {
        iconUrl: `https://steamcommunity-a.akamaihd.net/economy/image/${sellItemData.iconUrl}` || "",
        itemName: sellItemData.itemName || "",
        quality: sellItemData.quality || "",
        rarity: sellItemData.rarity || "",
        type: sellItemData.type || "",
        hero: sellItemData.hero || "",
      },
    };
  
    try {
      if(!isChecked){
        console.log(newMarketItemData)
        const response = await axios.post(
          `${process.env.VITE_APP_LOCAL_URL}/dota2/marketItem`,
          newMarketItemData
        );
        console.log(response.data);
      } else {
        const response = await axios.post(
          `${process.env.VITE_APP_LOCAL_URL}/dota2/raceItem`,
          newRaceItemData
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!loading && (
        <div className="flex items-center">
          <div className="w-full h-[650px] overflow-y-scroll mr-4 flex flex-col justify-center items-center">
            {postItemsList.map((item, index) => (
              <div key={index} className={`w-[80%] flex items-center gap-5 text-white mb-3 cursor-pointer border-4 border-black ${selectedItem == index ? 'border-orange-500' :''}`} onClick={() => itemData(item, index)}>
                <img className="w-[150px] h-[120px]" src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.iconUrl}`} alt="" />
                <div>
                  <p>{`Name: ${item.itemName}`}</p>
                  <p>{`Quality: ${item.quality}`}</p>
                  <p>{`Rarity: ${item.rarity}`}</p>
                  <p>{`Type: ${item.type}`}</p>
                  <p>{`Hero: ${item.hero}`}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center">
            {itemSelect && (
              <div className="flex items-center gap-5 text-white mb-3 cursor-pointer">
                <img className="w-[150px] h-[120px]" src={`https://steamcommunity-a.akamaihd.net/economy/image/${sellItemData?.iconUrl}`} alt="" />
                <div>
                  <p>{`Name: ${sellItemData?.itemName}`}</p>
                  <p>{`Quality: ${sellItemData?.quality}`}</p>
                  <p>{`Rarity: ${sellItemData?.rarity}`}</p>
                  <p>{`Type: ${sellItemData?.type}`}</p>
                  <p>{`Hero: ${sellItemData?.hero}`}</p>
                </div>
              </div>
            )}
            <div className="mt-7">
    
              <label className="text-white" htmlFor="price">Price</label>
              <input 
                type="text" 
                name="price" 
                id="price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
              />
              <div className="mt-5">
                <label className="text-white" htmlFor="race">Auction</label>
                <input type="checkbox" name="race" id="race" className="mr-3" checked={isChecked} onChange={handleCheckboxChange}/>
                <button className="text-white bg-green-700 p-2" onClick={marketItem}>Post</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="w-full h-[640px] flex justify-center items-center flex-col">
          <p className='title'>
            <img src={Dashlogo} alt="" />
            <span>arkenHub</span>
          </p>
          <p className='loading'>Loading...</p>
          <div className='mt-5'>
              <div className="loaderBars">
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
                  <div className="loaderBar"></div>
              </div>
          </div>
        </div>
      )}
    </>
  )
};

export default PostItems;