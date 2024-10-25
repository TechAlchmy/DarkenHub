import ProIcon from "../../assets/dashboard/Pro.png";
import mobileIcon from "../../assets/dashboard/Mobile.png";

interface props {
  image: string;
  extr?: string;
  pro?: boolean;
  mobile?: boolean;
}
const Hexagon = ({image, extr, pro, mobile} : props) => {

  const gradientBorderStyle = {
    backgroundImage: `url(${image})`
  }
  return (
    <div className="w-[175px] relative h-[150px] -ml-6 flex items-center justify-center" style={gradientBorderStyle}>
      {extr && (
        <img src={extr} alt="" />
      )}
      {pro && (
        <img src={ProIcon} className="absolute bottom-[-20px] right-10" alt="" />
      )}
      {mobile && (
        <img src={mobileIcon} className="absolute top-[-20px] left-[20px]" alt="" />
      )}
    </div>
  )
}

export default Hexagon;