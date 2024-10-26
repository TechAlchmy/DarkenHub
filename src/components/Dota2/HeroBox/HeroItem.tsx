import { tHero } from "../../../types";

interface props {
  hero: tHero
}

const HeroItem = ({hero} : props) => {
  
  return (
    <div className="relative border-[3px] h-[90px] border-[#0000004D] rounded-lg">
      <img src={hero.img} className="w-full h-full" alt="" />
      <p className="text-center text-white text-wrap w-full absolute bottom-2 text-[12px] leading-[14px]">{hero.name}</p>
    </div>
  )
}

export default HeroItem;