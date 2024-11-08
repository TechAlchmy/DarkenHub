import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

interface GameInfo {
  short?: string,
  name?: string,
  description?: string,
  path?: any,
}

const GameCard = ({ short, name, description, path }: GameInfo) => {
  
  const navigate = useNavigate();
  const onGameDetail = () => {
    navigate(`/user/${short}`);
  }

  return (
    <>
    <div 
      className="game_card cursor-pointer"
      onClick={onGameDetail}
    >
      <div className="relative">
        <Link to='/dota2'>
          <img src={path} className="" />
          <div className="flex flex-col gap-2 absolute top-[290px] left-[40px] w-[300px] text-center">
            <span className="text-white text-[30px] font-bold">{name}</span>
            <span className="text-white text-[16px]">{description}</span>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default GameCard;