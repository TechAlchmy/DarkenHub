import { tPlace } from "../../types"
import Timming from "../../assets/Picdash/games/dota2/time.png"
interface props {
  data: tPlace 
}

const PlaceBidItem = ({data} : props) => {

  return (
    <div className="h-[300px] w-full relative rounded-2xl overflow-hidden">
      <img src={data.image} className="absolute w-full h-full left-0 top-0" alt="" />
      <div className="absolute backdrop-blur-10 bg-[#00000066] opacity-60 border border-[#06B6D4] rounded-xl p-5 left-4 bottom-4">
        <div className="flex justify-between text-white font-bold text-sm">
          <div className="flex">
            <div>
              <img src={Timming} alt="" />
            </div>
            <div>
              <p>{data.time}</p>
              <p>Time Remaining</p>
            </div>
          </div>
          <div>
            <p>{data.amount} <span className="ml-1">$</span></p>
            <p>Highest Bid</p>
          </div>
        </div>
        <div className="mt-4 w-[260px] bg-[#161A42B2] p-2 rounded-md border-2 border-[#06B6D4] text-white text-xl text-center font-bold">
          Place A Bid
        </div>
      </div>
    </div>
  )
}

export default PlaceBidItem;