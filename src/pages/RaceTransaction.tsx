import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();
interface RaceTransactionData {
  item_id: string;
  seller: string;
  buyer: Array<{ buyer: string | null; bidPrice: number; tradeLink: string; date: string }>;
  price: number;
  status: number;
  item: {
    iconUrl: string;
    itemName: string;
    quality: string;
    rarity: string;
    type: string;
    hero: string;
  };
}

const RaceTransaction = () => {
  const [status, setStatus] = useState(0);
  const [raceTransactionList, setRaceTransactionList] = useState<RaceTransactionData[]>([]);
  const isFirst = useRef(true);
  const userID: string = localStorage.getItem('userID') || '';
  
  useEffect(() => {
    const fetchRaceTransaction = async () => {
      if (isFirst.current) {
        isFirst.current = false;
        try {
          const response = await axios.get(`${process.env.VITE_APP_LOCAL_URL}/dota2/raceTransactionDB`, { params: { userID } });
          setRaceTransactionList(response.data.data);
        } catch (error) {
          console.error("Failed to fetch race transactions:", error);
        }
      }
    };
    fetchRaceTransaction();
  }, [userID]);

  const updateTransactionStatus = async (index: number, newStatus: number) => {
    const item = raceTransactionList[index];
    if (item.item_id) {
      try {
        await axios.post(`${process.env.VITE_APP_LOCAL_URL}/dota2/upgradeRaceTransactionDB`, { item_id: item.item_id, status: newStatus });
        setRaceTransactionList(prevList => prevList.map((trans, i) => (i === index ? { ...trans, status: newStatus } : trans)));
      } catch (error) {
        console.error("Failed to update transaction status:", error);
      }
    }
  };

  const renderRaceTransaction = (item: RaceTransactionData, index: number) => {
    const isSeller = userID === item.seller;
    const statusText = item.status === 0 ? "Racing" : item.status === 1 ? "Waiting" : item.status === 2 ? "Completed" : "Failed";

    return (
      <div key={index} className="mb-4">
        <div className="flex justify-around items-center text-white font-bold text-[14px]">
          <div className="flex items-center">
            <img src={item.item.iconUrl} alt={item.item.itemName} />
            <div className="ml-5">
              <p>{`Item Name: ${item.item.itemName}`}</p>
              <p>{`Price: $${item.price}`}</p>
              <p>{`Quality: ${item.item.quality}`}</p>
              <p>{`Rarity: ${item.item.rarity}`}</p>
              <p>{`Type: ${item.item.type}`}</p>
              <p>{`Hero: ${item.item.hero}`}</p>
            </div>
          </div>
          <p>{isSeller ? `Seller: ${userID}` : `Buyer: ${userID}`}</p>
          {isSeller && item.status === 0 && <p className="bg-fuchsia-700 rounded-2xl p-3">{statusText}</p>}
          {isSeller && item.status === 1 && <button className="bg-green-800 rounded-2xl p-3" onClick={() => updateTransactionStatus(index, 2)}>Sent</button>}
          {isSeller && item.status === 2 && <p className="bg-green-800 rounded-2xl p-3">{statusText}</p>}
          {!isSeller && item.status === 0 && <p className="bg-fuchsia-700 rounded-2xl p-3">{statusText}</p>}
          {!isSeller && item.status === 1 && <p className="bg-yellow-500 rounded-2xl p-3">{statusText}</p>}
          {!isSeller && item.status === 2 && <button className="bg-green-800 rounded-2xl p-3" onClick={() => updateTransactionStatus(index, 3)}>Received</button>}
          {!isSeller && item.status === 3 && <p className="bg-green-800 rounded-2xl p-3">{statusText}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="p-5">
      <div className="mb-5">
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(0)}>View All</button>
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(1)}>Seller</button>
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(2)}>Buyer</button>
      </div>
      
      {raceTransactionList.map((item, index) => {
        if ((status === 0) || (status === 1 && userID === item.seller) || (status === 2 && userID !== item.seller)) {
          return renderRaceTransaction(item, index);
        }
        return null;
      })}
    </div>
  );
};

export default RaceTransaction;