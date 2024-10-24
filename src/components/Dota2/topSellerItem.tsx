import { tSeller } from "../../types";
import IconVerification from "../../assets/Picdash/games/dota2/Verification.png"
interface props {
  seller: tSeller
}
const TopSellerItem = ({seller} : props) => {

  return (
    <div className="flex gap-2 w-[200px]">
      <div className="w-[60px] h-[60px]">
        <img src={seller.avatar} alt="" />
      </div>
      <div className="flex gap-2">
        <div className="text-white">
          <p className="text-lg font-bold">{seller.userId}</p>
          <p className="text-sm text-[#5EEAD4]">${seller.amount}</p>
        </div>
        {seller.premium && (
          <div className="w-10 h-10">
            <img src={IconVerification} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default TopSellerItem;