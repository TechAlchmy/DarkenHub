import { useNavigate } from "react-router-dom"

interface GameInfo {
  short?: string,
  name?: string,
  description?: string,
  path?: any,
}

const GameCard = ({ short, name, description, path, ...rest}: GameInfo) => {
  
  const navigate = useNavigate();
  const onGameDetail = (e: any) => {
    navigate(`/user/${short}`);
  }

  return (
    <>
    <div 
      className="game_card cursor-pointer"
      onClick={onGameDetail}
    >
      <div className="relative">
        <img src={path} className="" />
        <div className="flex flex-col gap-2 absolute top-[290px] left-[40px] w-[300px] text-center">
          <span className="text-white text-[30px] font-bold">{name}</span>
          <span className="text-white text-[16px]">{description}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default GameCard;