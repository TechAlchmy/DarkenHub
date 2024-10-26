import { useNavigate } from "react-router-dom"

interface MenuProps {
  short?: string,
  source: any,
  name: string
} 

const DashboardMenu = ({short, source, name, ...rest}: MenuProps) => { 
  const navigate = useNavigate();
  const onGoMenu = (e: any) => {
    navigate(`/user/${short}`);
  }
  return (
    <div 
      onClick={onGoMenu}
      className="mt-4 z-50 relative min-h-[48px] px-8 py-2 flex flex-row items-center gap-3 text-white text-[14px] cursor-pointer hover:rounded-full hover:bg-[#8a8a8a] hover:text-black hover:text-[16px] hover:border-2 hover:border-[#00FF00]">
      <img className="w-[22px] h-[22px]" src={source}></img>
      <span className="">{name}</span>
    </div>
  )
}

export default DashboardMenu