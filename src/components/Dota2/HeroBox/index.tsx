import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import ArrowRight from "../../../assets/Picdash/games/dota2/Item Market/Arrow Right.png";
import StrengthIcon from "../../../assets/Picdash/games/dota2/Item Market/Detail.png";
import AgileIcon from "../../../assets/Picdash/games/dota2/Item Market/Detail (1).png";
import IntelIcon from "../../../assets/Picdash/games/dota2/Item Market/Detail (2).png";

import "../../../components/Dota2/HeroBox/style.css";
import HeroCategory from "./HeroCategory";
interface props {
  onClose: () => void
}

// Define the Hero interface
interface Hero {
  id: number; // Assuming there is an id or similar property
  name: string; // Assuming there is a name or similar property
  type: string; // This can be 'str', 'agi', or 'int'
}

// Define the structure of the category
interface Category {
  title: string;
  cateImg: string | any; // Adjust type based on your actual image type
  heros: Hero[];
}

// Initialize the res array with the correct type



const HeroBox = ({ onClose }: props) => {
  const [rawHeroData, setRawHeroData] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_APP_LOCAL_URL}/dota2/heroes`);
        setLoading(false);
        const data = response.data.data;
        setRawHeroData(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  const heroData = useMemo(() => {
    const res: Category[] = [
      { title: 'Strength', cateImg: StrengthIcon, heros: [] },
      { title: 'Agility', cateImg: AgileIcon, heros: [] },
      { title: 'Intelligence', cateImg: IntelIcon, heros: [] }
    ];

    rawHeroData.forEach((obj) => {
      if (obj.type === 'str') res[0].heros.push(obj);
      if (obj.type === 'agi') res[1].heros.push(obj);
      if (obj.type === 'int') res[2].heros.push(obj);
    });

    return res;
  }, [rawHeroData]);

  return (
    <div className="w-full custom-border bg-[#1E1E1E] bg-hero_box border-[5px] rounded-md pb-20 ">
      <div className="flex cursor-pointer w-fit items-center gap-[14px] px-6 py-2 border border-[#FFFFFF99] rounded mx-auto mt-3 text-[#FFFFFF99]" onClick={onClose}>
        <p>
          Close
        </p>
        <img src={ArrowRight} alt="" />
      </div>
      {!loading && (<div className="mt-3 grid grid-cols-3 gap-10">
        {heroData.map(item => (
          <HeroCategory key={item.title} title={item.title} cateImg={item.cateImg} heros={item.heros} />
        ))}
      </div>)}
      {loading && (
        <div className="w-full h-[640px] flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  )
}

export default HeroBox;
