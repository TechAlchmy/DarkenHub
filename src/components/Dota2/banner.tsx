import bannerBg from "../../../src/assets/Picdash/games/dota2/banner.png";


const Banner = () => {
  return (
    <div className="flex gap-2 justify-between items-end">
      <div className="backdrop-blur-29.7 border-1.5 border-solid border-banner px-5 border-image-filter  flex justify-between w-[90%] bg-banner items-center py-5 gap-5 rounded-xl" style={{backgroundImage: `url(${bannerBg})`}}>
        <p className="text-2xl text-white font-bold">Automatic purchase through the client</p>
        <p className="text-white font-bold w-1/2 text-center">The automated client allows you to send and <br></br>
        receive items by simply confirming the trade on your phone.</p>
        <button className="bg-buy_button py-2 px-6 rounded-lg  border-custom border">
          <p className="text-white">Buy <span className="ml-3">&gt;</span></p>
        </button>
      </div>
      <div className="text-[#5EEAD4] items-center flex">
        Show More <span className="ml-3 text-3xl -mt-1">&gt;</span>
      </div>
    </div>
  )
}

export default Banner;