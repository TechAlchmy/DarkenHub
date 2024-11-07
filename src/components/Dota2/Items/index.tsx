import { useMemo } from "react";
import { tBid } from "../../../types";
import bid1 from "../../../assets/Picdash/games/dota2/bid1.png";
import bid2 from "../../../assets/Picdash/games/dota2/Art.png";
import bid3 from "../../../assets/Picdash/games/dota2/Art1.png";
import bid4 from "../../../assets/Picdash/games/dota2/1Image.png";
import bid5 from "../../../assets/Picdash/games/dota2/Image.png";
import bid6 from "../../../assets/Picdash/games/dota2/1Art.png";
import right from "../../../assets/Picdash/games/dota2/right.png";
import left from "../../../assets/Picdash/games/dota2/left.png";

import avatar from "../../../assets/Picdash/games/dota2/Person1.png";
import ItemCom from "./itemCom";
const ItemsCom = () => {
  
  const items: tBid[] = useMemo(() => {
    return [
      {
        time: '02:32:07',
        heart: 232,
        title: "Stretch Of Time",
        price: 0.045,
        image:  bid1,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 172,
        title: "Arcade Land",
        price: 0.045,
        image:  bid2,
        avatar: avatar,
        filled: false
      },
      {
        time: '12:05::00',
        heart: 99,
        title: "ShineKai Portal",
        price: 0.045,
        image:  bid3,
        avatar: avatar,
        filled: false
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Paper Cut",
        price: 0.045,
        image:  bid4,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Cyper Brokers",
        price: 0.045,
        image:  bid5,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Akuma Origins",
        price: 0.045,
        image:  bid6,
        avatar: avatar,
        filled: true
      },
      {
        time: '02:32:07',
        heart: 232,
        title: "Stretch Of Time",
        price: 0.045,
        image:  bid1,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 172,
        title: "Arcade Land",
        price: 0.045,
        image:  bid2,
        avatar: avatar,
        filled: false
      },
      {
        time: '12:05::00',
        heart: 99,
        title: "ShineKai Portal",
        price: 0.045,
        image:  bid3,
        avatar: avatar,
        filled: false
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Paper Cut",
        price: 0.045,
        image:  bid4,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Cyper Brokers",
        price: 0.045,
        image:  bid5,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Akuma Origins",
        price: 0.045,
        image:  bid6,
        avatar: avatar,
        filled: true
      },
      {
        time: '02:32:07',
        heart: 232,
        title: "Stretch Of Time",
        price: 0.045,
        image:  bid1,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 172,
        title: "Arcade Land",
        price: 0.045,
        image:  bid2,
        avatar: avatar,
        filled: false
      },
      {
        time: '12:05::00',
        heart: 99,
        title: "ShineKai Portal",
        price: 0.045,
        image:  bid3,
        avatar: avatar,
        filled: false
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Paper Cut",
        price: 0.045,
        image:  bid4,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Cyper Brokers",
        price: 0.045,
        image:  bid5,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Akuma Origins",
        price: 0.045,
        image:  bid6,
        avatar: avatar,
        filled: true
      },
      {
        time: '02:32:07',
        heart: 232,
        title: "Stretch Of Time",
        price: 0.045,
        image:  bid1,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 172,
        title: "Arcade Land",
        price: 0.045,
        image:  bid2,
        avatar: avatar,
        filled: false
      },
      {
        time: '12:05::00',
        heart: 99,
        title: "ShineKai Portal",
        price: 0.045,
        image:  bid3,
        avatar: avatar,
        filled: false
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Paper Cut",
        price: 0.045,
        image:  bid4,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Cyper Brokers",
        price: 0.045,
        image:  bid5,
        avatar: avatar,
        filled: true
      },
      {
        time: '00:00:00',
        heart: 43,
        title: "Akuma Origins",
        price: 0.045,
        image:  bid6,
        avatar: avatar,
        filled: true
      },
    ]
  }, []);
  return (
    <div className="mt-16">
      <div className="grid item-scrollbar grid-cols-6 gap-6 h-[350px] pl-2 overflow-y-scroll">
        {items.map((item, index) => (
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