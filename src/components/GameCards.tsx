import Subtract from "../assets/Picdash/game_card/Subtract.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { A11y, Autoplay, EffectCards, Navigation } from "swiper/modules"
import { useMemo, useState } from "react"
import CardItem from "./GameCard/cardItem"
import { GameDetail } from "../types"

const GameCards = () => {
  const games: GameDetail[] = useMemo(() => {
    return [
      {
        description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
        path: Subtract,
        title: "Dota 2",
        totalAmounts: 250,
        updatedTotalAmounts: 250
      },
      {
        description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
        path: Subtract,
        title: "Dota 2",
        totalAmounts: 250,
        updatedTotalAmounts: 250
      },
      {
        description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
        path: Subtract,
        title: "Dota 2",
        totalAmounts: 250,
        updatedTotalAmounts: 250
      },
      {
        description: "Accounts, Points, Boosting, Services, Coaching, Other, Prime Gaming ",
        path: Subtract,
        title: "Dota 2",
        totalAmounts: 250,
        updatedTotalAmounts: 250
      },
    ];
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      // slidesPerView={1}
      className="mySwiper w-[560px] pt-[560px] ml-[180px]"
      onSlideChange={(swiper) => setActiveIndex((swiper.activeIndex + 4) % 4)} // Track active slide index
      onSwiper={(swiper) => setActiveIndex((swiper.activeIndex + 4) % 4)}
      autoplay={{
        delay: 2500, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Autoplay will not be disabled after interaction
      
      }}
      modules={[Navigation, A11y, Autoplay, EffectCards]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
    >
    {
      games.map((item, index) => (
        <SwiperSlide key={index}>
          <CardItem item={item} />
        </SwiperSlide>
      ))
    }
    </Swiper>
    </>
  )
}

export default GameCards;