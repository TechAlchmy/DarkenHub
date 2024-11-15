import Subtract from "../../assets/Picdash/game_card/Subtract.png"
import "swiper/css"
import "swiper/css/effect-cards"
// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import { useEffect, useMemo } from "react"
import CardItem from "../GameCard/cardItem"
import { GameDetail } from "../../types"
import Slider from "../common/Slider";

const GameSlider = () => {
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

  useEffect(() => {

  }, []);
  return (
    <Slider>
      {
        games.map((item, index) => (
          <CardItem key={index} item={item} />
        ))
      }
    </Slider>
  )
}



export default GameSlider;