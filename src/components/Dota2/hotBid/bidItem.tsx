import { useNavigate, useLocation } from "react-router-dom";

import { PostItem } from "../../../types";
import { tBid } from "../../../types";

import Bg from "../../../assets/Picdash/games/dota2/Bg.png";
import heart from "../../../assets/Picdash/games/dota2/Icon - Heart.png";
import heartFilled from "../../../assets/Picdash/games/dota2/Icon -  Heart.png";

interface props {
  bid: tBid,
  item: PostItem
}

const BidItem = ({ bid, item }: props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onclickHandler = () => {
     const currentPath = location.pathname;
     const newPath = currentPath.replace('/user/dota2', '/user/buyItem',);
     navigate(newPath, { state: item });
  }

  return (
    <div className="relative" onClick={onclickHandler}>
      <div className="flex justify-between items-center">
        <div className="text-white text-[14px] leading-6 font-bold pl-3 pt-2 pr-9 pb-6 bg-no-repeat" style={{backgroundImage: `url(${Bg})`}}>
          {bid.time}
        </div>
        <div className="flex -mt-5 items-center gap-2">
          <div className="text-[#FAFAFB] font-medium text-[14px] leading-6">{bid.heart}</div>
          <div className="">
            <img src={bid.filled ? heartFilled : heart} alt="" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden -mt-4">
        <img className="size-[175px]" src={item.item.iconUrl} alt="" />
      </div>
      <div className="mt-4 px-2">
        <p className="text-[#FAFAFB] text-[14px] leading-6 font-semibold">{item.item.itemName}</p>
        <p className="text-[14px] leading-6 font-bold mt-1 gradient-text">${item.price}</p>  
      </div>
      <div className="w-6 h-6 absolute right-8 bottom-0">
        <img src={bid.avatar} alt="" />
      </div>
    </div>
  );
}

export default BidItem;