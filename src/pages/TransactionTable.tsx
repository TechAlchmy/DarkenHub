import { useState, useEffect, useRef } from "react";
import axios from "axios";
require('dotenv').config();

interface TransactionData {
  item_id: string;
  seller: string;
  buyer: string;
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

const TransactionTable = () => {
  const [status, setStatus] = useState(0);
  const [transactionList, setTransactionList] = useState<TransactionData[]>([]);
  const isFirst = useRef(true);
  const userID: string = localStorage.getItem('userID') || '';

  useEffect(() => {
    const fetchTransaction = async () => {
      if (isFirst.current) {
        isFirst.current = false;
        try {
          const response = await axios.get(`${process.env.VITE_APP_LOCAL_URL}/dota2/transactionDB`, { params: { userID } });
          setTransactionList(response.data.data.reverse());
        } catch (error) {
          console.error("Failed to fetch transactions:", error);
        }
      }
    };
    fetchTransaction();
  }, [userID]);

  const updateTransactionStatus = async (index: number, newStatus: number) => {
    const item = transactionList[index];
    if (item.item_id) {
      try {
        await axios.post(`${process.env.VITE_APP_LOCAL_URL}/dota2/upgradeTransactionDB`, { item_id: item.item_id, status: newStatus });
        setTransactionList(prevList => prevList.map((trans, i) => (i === index ? { ...trans, status: newStatus } : trans)));
      } catch (error) {
        console.error("Failed to update transaction status:", error);
      }
    }
  };

  const renderTransaction = (item: TransactionData, index: number) => {
    const isSeller = userID === item.seller;
    const statusText = item.status === 0 ? "Waiting" : item.status === 1 ? "Completed" : "Sent";
    const buttonText = isSeller ? "Sent" : "Received";
    const buttonClickHandler = isSeller ? () => updateTransactionStatus(index, 1) : () => updateTransactionStatus(index, 2);

    return (
      <div key={index} className="my-5">
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
          <p>{isSeller ? `Seller: ${item.seller}` : `Buyer: ${item.buyer}`}</p>
          {item.status === 0 && <button className="bg-green-800 rounded-2xl p-3" onClick={buttonClickHandler}>{buttonText}</button>}
          {item.status === 1 && <p className="bg-yellow-500 rounded-2xl p-3">{statusText}</p>}
          {item.status === 2 && <p className="bg-green-800 rounded-2xl p-3">Completed</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="p-5">
      <div>
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(0)}>View All</button>
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(1)}>Seller</button>
        <button className="bg-lime-700 py-2 px-10 rounded-md mt-2 mr-2 text-white" onClick={() => setStatus(2)}>Buyer</button>
      </div>
      
      {transactionList.reverse().map((item, index) => {
        if ((status === 0) || (status === 1 && userID === item.seller) || (status === 2 && userID !== item.seller)) {
          return renderTransaction(item, index);
        }
        return null;
      })}
    </div>
  );
};

export default TransactionTable;