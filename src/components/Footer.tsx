import darkenHubIcon from "../assets/footer/darkenhubIcon.png"
import discordIcon from "../assets/footer/discord.png"
import githubIcon from "../assets/footer/github.png"
import twitterIcon from "../assets/footer/twitter.png"
import divideLine from "../assets/footer/divide.png"
import Privacy from "./common/Privacy/Privacy"

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-12 pb-12">
        <div className="px-2 flex flex-row items-center justify-between">
          <img src={darkenHubIcon} />
          <div className="flex flex-col gap-2 items-end">
            <div className="flex flex-row gap-3">
              <span className="text-white text-[13px] cursor-pointer">Home</span>
              <span className="text-white text-[13px] cursor-pointer">Changelog</span>
              <span className="text-white text-[13px] cursor-pointer">Docs</span>
            </div>
            <span className="text-white text-[13px] cursor-pointer">Privacy Policy</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-8">
          <span className="text-white tracking-widest pl-6">@ 2024 DarkenHub -</span>
          <div className="flex flex-row items-center gap-3 cursor-pointer">
            <img src={discordIcon} />
            <div className="flex flex-row items-center gap-3 cursor-pointer">
              <img src={divideLine} />
              <img src={githubIcon} />
            </div>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
              <img src={divideLine} />
              <img src={twitterIcon} />
            </div>
          </div>
        </div>
      </div>
      <Privacy open={true} />
    </>
  )
}

export default Footer;