import { useState, useEffect } from "react";
import axios from "axios";

import { PostItem } from "../../../types";
import right from "../../../assets/Picdash/games/dota2/right.png";
import left from "../../../assets/Picdash/games/dota2/left.png";

import avatar from "../../../assets/Picdash/games/dota2/Person1.png";
import ItemCom from "./itemCom";
import * as dotenv from 'dotenv';
dotenv.config();
const ItemsCom = () => {
  const [postItemsList, setPostItemsList] = useState<PostItem[]>([]);
  const fetchItem = async () => {
    try {
      const response = await axios.get(`${process.env.VITE_APP_LOCAL_URL}/dota2/getMarketItem`);
      const data = response.data.data;
      setPostItemsList(data.reverse());
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div className="mt-16">
      <div className="grid item-scrollbar grid-cols-6 gap-6 h-[350px] pl-2 overflow-y-scroll">
        {postItemsList.map((item, index) => (
          <ItemCom key={index} item={item} />
        ))}
      </div>
      <div className="flex gap-20 mt-5 justify-center">
        <button className="flex items-center justify-center bg-item-bg1 h-12 rounded-lg w-[220px]">
          <img src={left} alt="" />
        </button>
        <button className=" flex items-center justify-center bg-item-bg1 h-12 rounded-lg w-[220px]">
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ItemsCom;