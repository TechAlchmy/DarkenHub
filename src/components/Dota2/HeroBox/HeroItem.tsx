import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage  from "../../../assets/dota2_logo.png"
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css'
interface Props {
  hero: any;
}

const HeroItem = ({ hero }: Props) => {

  return (
    <div className="relative border-[3px] h-[90px] border-[#0000004D] rounded-lg imgCss">
      { !hero.img1 && <LazyLoadImage src={hero.img2} className="w-full h-full object-cover"
                       alt={hero.name} placeholderSrc={PlaceholderImage} effect="blur"
      />}
      { hero.img1 && <LazyLoadImage src={hero.img1} className="w-full h-full object-cover"
                      alt={hero.name} placeholderSrc={PlaceholderImage} effect="blur"
      />}
      <p className="text-center text-white text-wrap w-full absolute bottom-2 text-[12px] leading-[14px]">{hero.name}</p>
    </div>
  );
};

export default HeroItem;