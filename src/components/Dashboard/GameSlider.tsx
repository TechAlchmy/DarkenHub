import Subtract from "../../assets/Picdash/game_card/Subtract.png"
import "swiper/css"
import "swiper/css/effect-cards"
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import { useEffect, useMemo } from "react"
import CardItem from "../GameCard/cardItem"
import { GameDetail } from "../../types"

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
    // Initialize the carousel elements
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, { indicators: false, duration: 0, });

    // Set an interval to move to the next slide
    const interval = setInterval(() => {
        instances.forEach((instance: { next: () => any; }) => instance.next());
    }, 2000);

    // Cleanup function to clear the interval and destroy carousel instances
    return () => {
        clearInterval(interval);
        instances.forEach((instance: { destroy: () => any; }) => instance.destroy());
    };
}, []);
  return (
    <div className="carousel -ml-[34rem]">
      {
        games.map((item) => (
          <div className="carousel-item" style={{opacity: 1}}>
            <CardItem item={item} />
          </div>
        ))
      }
    </div>
  )
}

export default GameSlider;