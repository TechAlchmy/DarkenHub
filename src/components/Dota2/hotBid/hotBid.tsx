import { useMemo } from "react";
import { tBid } from "../../../types";
import bid1 from "../../../assets/Picdash/games/dota2/bid1.png";
import bid2 from "../../../assets/Picdash/games/dota2/Art.png";
import bid3 from "../../../assets/Picdash/games/dota2/Art1.png";
import bid4 from "../../../assets/Picdash/games/dota2/1Image.png";
import bid5 from "../../../assets/Picdash/games/dota2/Image.png";
import bid6 from "../../../assets/Picdash/games/dota2/1Art.png";

import avatar from "../../../assets/Picdash/games/dota2/Person1.png";
import BidItem from "./bidItem";
const HotBids = () => {

  const bids: tBid[] = useMemo(() => {
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
    ]
  }, []);
  return (
    <div className="mt-10">
      <div className="text-[#BABEE1] text-2xl font-semibold">
        🔥 Hot Bids
      </div>
      <div className="grid grid-cols-6 gap-6 mt-5">
        {bids.map((bid) => (
          <BidItem bid={bid} />
        ))}
      </div>
    </div>
  );
}

export default HotBids;