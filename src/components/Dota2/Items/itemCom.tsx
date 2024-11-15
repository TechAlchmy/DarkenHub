import { useNavigate, useLocation } from "react-router-dom";
import { PostItem } from "../../../types";

interface PostItems {
  item: PostItem
}

const ItemCom = ({item} : PostItems) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onclickHandler = () => {
     const currentPath = location.pathname;
     const newPath = currentPath.replace('/user/dota2', '/user/buyItem',);
     navigate(newPath, { state: item });
  }

  return (
    <div 
      className="w-full cursor-pointer overflow-hidden relative h-44 rounded-xl border-[3px] border-opacity-30 border-[#0000004D]"
      onClick={onclickHandler}
    >
      <img src={item.item.iconUrl} className="w-full bg-item-bg  h-full" alt="" />
      <div className="text-[20px] font-crimson text-center leading-[26px] text-white font-semibold border-[#0000004D] w-full left-0 absolute bottom-8">
        <p className="text-white">{item.item.itemName}</p>
        <p className="text-[#E27525]">{item.price}$</p>
      </div>
  </div>
  ); 
}

export default ItemCom;