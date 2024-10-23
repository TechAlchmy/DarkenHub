import ProfileImage from "../assets/toprice/profile.png"
import DownIcon from "../assets/toprice/down.png"
import UpIcon from "../assets/toprice/up.png"

interface TopPrice {
  name?: string,
  rate?: number,
  direction?: number,
  price?: number
}

const TopPrice = ({ name, rate, direction, price, ...rest }: TopPrice) => {
  const disp_price = "(+$" + price + ")";
  return (
    <>
    <div className="min-w-[210px] flex flex-row gap-4 items-center">
      <img src={ProfileImage} />
      <div className="flex flex-col gap-2">
        <span className="text-white font-bold text-[14px]">{name}</span>
        <div className="flex flex-row items-center gap-1">
        {
          direction == 1 ?
          <>
          <div className="flex flex-row items-center gap-1">
            <img src={UpIcon} />
            <span className="text-[#00FF00] text-[13px]">{rate}%</span>
          </div>
          <span className="text-[#00FF00] text-[13px] tracking-wide">{disp_price}</span>
          </> :
          <>
          <div className="flex flex-row items-center gap-1">
            <img src={DownIcon} />
            <span className="text-[#FF0000] text-[13px]">{rate}%</span>
          </div>
          <span className="text-[#FF0000] text-[13px] tracking-wide">{disp_price}</span>
          </>
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default TopPrice;