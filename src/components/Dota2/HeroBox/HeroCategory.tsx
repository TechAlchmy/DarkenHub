import HeroItem from "./HeroItem";

interface props {
  title: string,
  cateImg: string,
  heros: any[];
}
const HeroCategory = ({ heros, cateImg } : props) => {

  return (
    <div className="px-2">
      <div className="flex justify-between items-center">
        <div className="bg-[#FFFFFF33] h-[1px] w-2/5"></div>
        <div className="flex gap-1 items-center">
          <img src={cateImg} alt="" />
        </div>
        <div className="bg-[#FFFFFF33] h-[1px] w-2/5"></div>
      </div>
      <div className="grid grid-cols-6 gap-0">
        {heros.map((hero, index) => (
          <HeroItem key={index} hero={hero} />
        ))}
      </div>
    </div>
  )
}

export default HeroCategory;