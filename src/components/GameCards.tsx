import GameCard1 from "../assets/Picdash/game_card/game_card_1.png"
import GameCard2 from "../assets/Picdash/game_card/game_card_2.png"
import Subtract from "../assets/Picdash/game_card/Subtract.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"
import { useState } from "react"

const GameCards = () => {
  const contents = [
    {
      description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
      path: Subtract,
      discipline: "Dota 2",
      totalItems1: 250,
      totalItems2: 250
    },
    {
      description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
      path: Subtract,
      discipline: "Dota 2",
      totalItems1: 250,
      totalItems2: 250
    },
    {
      description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
      path: Subtract,
      discipline: "Dota 2",
      totalItems1: 250,
      totalItems2: 250
    },
    {
      description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
      path: Subtract,
      discipline: "Dota 2",
      totalItems1: 250,
      totalItems2: 250
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      spaceBetween={40} // Adjust the space between slides
      // slidesPerView={1}
      modules={[EffectCards]}
      className="mySwiper w-[480px] pt-[560px] ml-[180px]"
      onSlideChange={(swiper) => setActiveIndex((swiper.activeIndex + 4) % 4)} // Track active slide index
      onSwiper={(swiper) => setActiveIndex((swiper.activeIndex + 4) % 4)}
    >
    {
      contents.map((item, index) => {
        return <SwiperSlide>
          <div className="blurred-gradient-div flex flex-row">
            <div className="relative top-[-30px]">
              <img src={item.path}></img>
              <img src={GameCard1} className="absolute top-[136px]"></img>
              <img src={GameCard2} className="absolute top-[118px] left-[-8px]"></img>
              <span className="absolute z-2 top-[162px] left-[60px] text-white text-[24px] font-bold">{item.discipline}</span>
              <span className="absolute z-2 top-[200px] left-[7px] w-[192px] text-white text-[13px] text-center">{item.description}</span>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#B7B6E7]">Game Discipline</span>
                <span className="text-white text-[24px] font-bold">{item.discipline}</span>
                <span className="text-[14px] text-[#B7B6E7]">Total Items</span>
                <span className="text-white text-[24px] font-bold">{item.totalItems1}</span>
                <span className="text-[14px] text-[#B7B6E7]">Total Items</span>
                <span className="text-white text-[24px] font-bold">{item.totalItems2}</span>
              </div>
              <div className="flex justify-center">
                {
                  activeIndex == index ?
                    <button className="text-black font-semibold text-[16px] bg-white rounded-md border-1 border-black px-4 py-2">
                      Start for free
                    </button> : <></>
                }
              </div>
            </div>
          </div>
        </SwiperSlide>
      })
    }
    </Swiper>
    </>
  )
}

export default GameCards;