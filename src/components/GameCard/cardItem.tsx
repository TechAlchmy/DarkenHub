import { memo } from "react"
import GameCard1 from "../../assets/Picdash/game_card/game_card_1.png"
import GameCard2 from "../../assets/Picdash/game_card/game_card_2.png"
import { GameDetail } from "../../types"
import Card from "../../assets/dashboard/Card.png";

interface props {
  item: GameDetail;
}

const  CardItem = memo(({item} : props) => {

  const gradientBorderStyle = {
    backgroundImage: `url(${Card})`
  }
  return (
    <div className="w-[420px] border border-[#FFFFFF33] bg-cover backdrop-blur-2xl h-[300px] overflow-hidden relative gap-4 p-4 rounded-3xl flex flex-row" style={gradientBorderStyle}>
      {/* <img src={Bg1} className="absolute top-0 right-0" alt="" /> */}
      {/* <div className="-z-1 absolute backdrop-blur-custom w-[100px] h-[200px] bottom-0 right-0">

      </div> */}
      <div className="relative w-1/2">
        <img className="" src={item.path} alt="iamge" />
        <img src={GameCard1} className="absolute w-[87%] top-[136px]" alt="gamecard1" />
        <img src={GameCard2} className="absolute top-[118px] left-[-8px]" alt="image" />
        <span className="absolute z-2 top-[162px] left-[60px] text-white text-[24px] font-bold">{item.title}</span>
        <span className="absolute z-2 leading-[16px] top-[200px] left-[7px] w-[192px] text-white text-[13px] text-center">{item.description}</span>
      </div>
      <div className="flex w-1/2 flex-col justify-between h-full pb-2">
        <div className="flex flex-col gap-1">
          <span className="text-[14px] text-[#B7B6E7]">Game Discipline</span>
          <span className="text-white text-[24px] font-bold">{item.title}</span>
          <span className="text-[14px] text-[#B7B6E7]">Total Items</span>
          <div className="flex gap-1">
            <p className="text-white text-[24px] font-bold">{item.totalAmounts}</p>
            <div className="h-5 flex items-center w-5 justify-center rounded-full border border-[#00E5FF]">
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.32325 0.129144C4.14472 -0.0493817 3.85528 -0.0493817 3.67675 0.129144L0.767511 3.03838C0.588986 3.21691 0.588986 3.50636 0.767511 3.68488C0.946037 3.86341 1.23548 3.86341 1.41401 3.68488L4 1.09889L6.58599 3.68488C6.76452 3.86341 7.05396 3.86341 7.23249 3.68488C7.41101 3.50636 7.41101 3.21691 7.23249 3.03838L4.32325 0.129144ZM3.54286 6.54763C3.54286 6.8001 3.74753 7.00477 4 7.00477C4.25247 7.00477 4.45714 6.8001 4.45714 6.54763L3.54286 6.54763ZM3.54286 0.452393L3.54286 6.54763L4.45714 6.54763L4.45714 0.452393L3.54286 0.452393Z" fill="#00E6FF"/>
              </svg>
            </div>
            <p className="text-[14px] text-[#00E5FF] font-semibold">6.2%</p>
          </div>
          <span className="text-[14px] text-[#B7B6E7]">Total Items</span>
          <div className="flex gap-1">
            <p className="text-white text-[24px] font-bold">{item.totalAmounts}</p>
            <div className="h-5 flex items-center w-5 justify-center rounded-full border border-[#00E5FF]">
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.32325 0.129144C4.14472 -0.0493817 3.85528 -0.0493817 3.67675 0.129144L0.767511 3.03838C0.588986 3.21691 0.588986 3.50636 0.767511 3.68488C0.946037 3.86341 1.23548 3.86341 1.41401 3.68488L4 1.09889L6.58599 3.68488C6.76452 3.86341 7.05396 3.86341 7.23249 3.68488C7.41101 3.50636 7.41101 3.21691 7.23249 3.03838L4.32325 0.129144ZM3.54286 6.54763C3.54286 6.8001 3.74753 7.00477 4 7.00477C4.25247 7.00477 4.45714 6.8001 4.45714 6.54763L3.54286 6.54763ZM3.54286 0.452393L3.54286 6.54763L4.45714 6.54763L4.45714 0.452393L3.54286 0.452393Z" fill="#00E6FF"/>
              </svg>
            </div>
            <p className="text-[14px] text-[#00E5FF] font-semibold">6.2%</p>
          </div>
        </div>
        <div className="flex justify-center w-full">
              <button className="text-black z-10 font-semibold text-[16px] bg-white rounded-md border-1 border-black px-4 py-2">
                Start for free
              </button> 
        </div>
      </div>
    </div>
  );
})

export default CardItem;