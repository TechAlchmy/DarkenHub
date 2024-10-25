import { tBid } from "../../../types";

interface props {
  item: tBid
}
const ItemCom = ({item} : props) => {

  return (
    <div className="w-full overflow-hidden relative h-44 rounded-xl border-[3px] border-opacity-30 border-[#0000004D]">
      <img src={item.image} className="w-full bg-item-bg  h-full" alt="" />
      <div className="text-[20px] font-crimson text-center leading-[26px] text-white font-semibold border-[#0000004D] w-full left-0 absolute bottom-8">
        <p className="text-white">{item.title}</p>
        <p className="text-[#E27525]">{item.price}$</p>
      </div>
    </div>
  );
}

export default ItemCom;