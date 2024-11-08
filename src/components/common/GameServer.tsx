import SellerExample from "../../assets/Picdash/games/dota2/seller_example.png"

interface ServerInfo {
  server?: string,
  salename?: string,
  review?: number,
  description?: string,
  price?: number,
  color?: string,
}

const GameServer = ({ server, salename, review, description, price, color, ...rest }: ServerInfo) => {
  const gradientColor = `${color}80`;

  return (
    <>
      <div
        className="rounded-3xl shadow-lg px-5 py-4 flex flex-row gap-4 items-center"
        style={{
          background: `linear-gradient(90deg, rgba(118, 114, 114, 1), ${gradientColor})`,
        }}
      >
        <span className="text-white text-xl">{server}</span>
        <div className="w-3/12 flex flex-row gap-2 items-center">
          <img src={SellerExample} className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <span className="text-bordered text-white text-normal">{salename}</span>
            <span className="text-bordered text-white text-normal">Reviews: {review}</span>
          </div>
        </div>
        <span className="w-5/12 text-bordered text-normal text-white">{description}</span>
        <span className={`font-semibold w-1/12 text-white-bordered`} style={{ color: color }}>$ {price}</span>
        <div className="w-2/12 flex justify-end">
          <button className={`w-full text-white text-xl px-6 py-2 rounded-lg shadow-2xl shadow-cyan-500/50`} style={{ backgroundColor: color }}>BUY</button>
        </div>
      </div>
    </>
  )
}

export default GameServer;