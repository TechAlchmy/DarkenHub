import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import ArrowRight from "../../../assets/Picdash/games/dota2/Item Market/Arrow Right.png";
import StrengthIcon from "../../../assets/Picdash/games/dota2/Item Market/Detail.png";
import AgileIcon from "../../../assets/Picdash/games/dota2/Item Market/Detail (1).png";
import IntelICon from "../../../assets/Picdash/games/dota2/Item Market/Detail (2).png";

import Ababbon from "../../../assets/Picdash/games/dota2/Item Market/strength/abaddon.png";
import alchi from "../../../assets/Picdash/games/dota2/Item Market/strength/Alchemist.png";
import axe from "../../../assets/Picdash/games/dota2/Item Market/strength/axe.png";
import beat from "../../../assets/Picdash/games/dota2/Item Market/strength/BeatMaster.png";
import brew from "../../../assets/Picdash/games/dota2/Item Market/strength/BrewMaster.png";
import bri from "../../../assets/Picdash/games/dota2/Item Market/strength/Bristal.png";
import cen from "../../../assets/Picdash/games/dota2/Item Market/strength/Centaur Warrunner.png";
import cha from "../../../assets/Picdash/games/dota2/Item Market/strength/Chaos Knight.png";
import clock from "../../../assets/Picdash/games/dota2/Item Market/strength/Clock werk.png";
import dawn from "../../../assets/Picdash/games/dota2/Item Market/strength/Dawnbreaker.png";
import doom from "../../../assets/Picdash/games/dota2/Item Market/strength/Doom.png";
import dragon from "../../../assets/Picdash/games/dota2/Item Market/strength/Dragon Knight.png";
import Spirit from "../../../assets/Picdash/games/dota2/Item Market/strength/Earth Spirit.png";
import snaker from "../../../assets/Picdash/games/dota2/Item Market/strength/Earthshaker.png";
import Elder from "../../../assets/Picdash/games/dota2/Item Market/strength/Elder Titan.png";
import Huskar from "../../../assets/Picdash/games/dota2/Item Market/strength/Huskar.png";
import Io from "../../../assets/Picdash/games/dota2/Item Market/strength/Io.png";
import Kunkka from "../../../assets/Picdash/games/dota2/Item Market/strength/Kunka.png";
import Commander from "../../../assets/Picdash/games/dota2/Item Market/strength/Legion Commander.png";
import stealer from "../../../assets/Picdash/games/dota2/Item Market/strength/Lifestealer.png";
import Lycan from "../../../assets/Picdash/games/dota2/Item Market/strength/Lycan.png";
import Magnus from "../../../assets/Picdash/games/dota2/Item Market/strength/mangnus.png";
import Marci from "../../../assets/Picdash/games/dota2/Item Market/strength/Marci.png";
import Mars from "../../../assets/Picdash/games/dota2/Item Market/strength/Mars.png";

import Stalker from "../../../assets/Picdash/games/dota2/Item Market/strength/NightSalker.png";
import Omniknight from "../../../assets/Picdash/games/dota2/Item Market/strength/Omniknight.png";
import Phoenix from "../../../assets/Picdash/games/dota2/Item Market/strength/Phonex.png";
import Pudge from "../../../assets/Picdash/games/dota2/Item Market/strength/Puge.png";
import Sand from "../../../assets/Picdash/games/dota2/Item Market/strength/Sand King.png";
import Slardar from "../../../assets/Picdash/games/dota2/Item Market/strength/Slardar.png";
import Snapfire from "../../../assets/Picdash/games/dota2/Item Market/strength/Snapfire.png";
import Breaker from "../../../assets/Picdash/games/dota2/Item Market/strength/Spirit Breaker.png";
import Sven from "../../../assets/Picdash/games/dota2/Item Market/strength/Sven.png";
import Tidehunter from "../../../assets/Picdash/games/dota2/Item Market/strength/Tidehunter.png";
import Tiny from "../../../assets/Picdash/games/dota2/Item Market/strength/Tiny.png";
import Treant from "../../../assets/Picdash/games/dota2/Item Market/strength/Treant.png";
import Tusk from "../../../assets/Picdash/games/dota2/Item Market/strength/tusk.png";
import Underlord from "../../../assets/Picdash/games/dota2/Item Market/strength/Underlord.png";
import Undying from "../../../assets/Picdash/games/dota2/Item Market/strength/Undying.png";
import Wraith from "../../../assets/Picdash/games/dota2/Item Market/strength/Waith King.png";

import Agilehero1 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card.png";
import Agilehero2 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-1.png";
import Agilehero3 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-2.png";
import Agilehero4 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-3.png";
import Agilehero5 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-4.png";
import Agilehero6 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-5.png";
import Agilehero7 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-6.png";
import Agilehero8 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-7.png";
import Agilehero9 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-8.png";
import Agilehero10 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-9.png";
import Agilehero11 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-10.png";
import Agilehero12 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-11.png";
import Agilehero13 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-12.png";
import Agilehero14 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-13.png";
import Agilehero15 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-14.png";
import Agilehero16 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-15.png";
import Agilehero17 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-16.png";
import Agilehero18 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-17.png";
import Agilehero19 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-18.png";
import Agilehero20 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-19.png";
import Agilehero21 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-20.png";
import Agilehero22 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-21.png";
import Agilehero23 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-22.png";
import Agilehero24 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-23.png";
import Agilehero25 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-24.png";
import Agilehero26 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-25.png";
import Agilehero27 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-26.png";
import Agilehero28 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-27.png";
import Agilehero29 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-28.png";
import Agilehero30 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-29.png";
import Agilehero31 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-30.png";
import Agilehero32 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-31.png";
import Agilehero33 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-32.png";
import Agilehero34 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-33.png";
import Agilehero35 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-34.png";
import Agilehero36 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-35.png";
import Agilehero37 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-36.png";
import Agilehero38 from "../../../assets/Picdash/games/dota2/Item Market/agile/Hero card-37.png";


import Intelihero1 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card.png";
import Intelihero2 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-1.png";
import Intelihero3 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-2.png";
import Intelihero4 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-3.png";
import Intelihero5 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-4.png";
import Intelihero6 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-5.png";
import Intelihero7 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-6.png";
import Intelihero8 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-7.png";
import Intelihero9 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-8.png";
import Intelihero10 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-9.png";
import Intelihero11 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-10.png";
import Intelihero12 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-11.png";
import Intelihero13 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-12.png";
import Intelihero14 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-13.png";
import Intelihero15 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-14.png";
import Intelihero16 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-15.png";
import Intelihero17 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-16.png";
import Intelihero18 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-17.png";
import Intelihero19 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-18.png";
import Intelihero20 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-19.png";
import Intelihero21 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-20.png";
import Intelihero22 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-21.png";
import Intelihero23 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-22.png";
import Intelihero24 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-23.png";
import Intelihero25 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-24.png";
import Intelihero26 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-25.png";
import Intelihero27 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-26.png";
import Intelihero28 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-27.png";
import Intelihero29 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-28.png";
import Intelihero30 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-29.png";
import Intelihero31 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-30.png";
import Intelihero32 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-31.png";
import Intelihero33 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-32.png";
import Intelihero34 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-33.png";
import Intelihero35 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-34.png";
import Intelihero36 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-35.png";
import Intelihero37 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-36.png";
import Intelihero38 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-37.png";
import Intelihero39 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-38.png";
import Intelihero40 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-39.png";
import Intelihero41 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-40.png";
import Intelihero42 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-41.png";
import Intelihero43 from "../../../assets/Picdash/games/dota2/Item Market/Inteli/Hero card-42.png";

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



const HeroBox = ({onClose} : props) => {
  const [heroData, setHeroData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/dota2/heroes`);
        const data = response.data.data;
        console.log(data)
        const res: Category[] = [
          { title: 'Strength', cateImg: StrengthIcon, heros: [] },
          { title: 'Agility', cateImg: AgileIcon, heros: [] },
          { title: 'Intelligence', cateImg: IntelICon, heros: [] }
        ];
        data.forEach((obj: any) => {
          if (obj.type === 'str') res[0].heros.push(obj);
          if (obj.type === 'agi') res[1].heros.push(obj);
          if (obj.type === 'int') res[2].heros.push(obj);
        });
        setHeroData(res);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);
  
  const data = useMemo(() => {
    return [
      {
        title: 'Strength',
        cateImg: StrengthIcon,
        heros: [
          {img: Ababbon, name: 'Abaddon'},
          {img: alchi, name: 'Alchemist'},
          {img: axe, name: 'Axe'},
          {img: beat, name: 'Beatmaster'},
          {img: brew, name: 'Brewmaster'},
          {img: bri, name: 'Bristleback'},
          {img: cen, name: 'Centaur Warrunner'},
          {img: cha, name: 'Chaos Knight'},
          {img: clock, name: 'Clock werk'},
          {img: dawn, name: 'Dawn breaker'},
          {img: doom, name: 'Doom'},
          {img: dragon, name: 'Dragon Knight'},
          {img: Spirit, name: 'Earth Spirit'},
          {img: snaker, name: 'Earth snaker'},
          {img: Elder, name: 'Elder Titan'},
          {img: Huskar, name: 'Huskar'},
          {img: Io, name: 'Io'},
          {img: Kunkka, name: 'Kunkka'},
          {img: Commander, name: 'Legion Commander'},
          {img: stealer, name: 'Life stealer'},
          {img: Lycan, name: 'Lycan'},
          {img: Magnus, name: 'Magnus'},
          {img: Marci, name: 'Marci'},
          {img: Mars, name: 'Mars'},
          {img: Stalker, name: 'Night Stalker'},
          {img: Omniknight, name: 'Omniknight'},
          {img: Phoenix, name: 'Phoenix'},
          {img: Pudge, name: 'Pudge'},
          {img: Sand, name: 'Sand King'},
          {img: Slardar, name: 'Slardar'},
          {img: Snapfire, name: 'Snapfire'},
          {img: Breaker, name: 'Spirit Breaker'},
          {img: Sven, name: 'Sven'},
          {img: Tidehunter, name: 'Tidehunter'},
          {img: Tiny, name: 'Tiny'},
          {img: Treant, name: 'Treant Protector'},
          {img: Tusk, name: 'Tusk'},
          {img: Underlord, name: 'Underlord'},
          {img: Undying, name: 'Undying'},
          {img: Wraith, name: 'Wraith King'},
        ]
      },
      {
        title: 'agility',
        cateImg: AgileIcon,
        heros: [
          {img: Agilehero1, name: 'Anti-Mage'},
          {img: Agilehero2, name: 'Arc Warden'},
          {img: Agilehero3, name: 'Blood mother'},
          {img: Agilehero4, name: 'Bounty Hunter'},
          {img: Agilehero5, name: 'Brood mother'},
          {img: Agilehero6, name: 'Clinkz'},
          {img: Agilehero7, name: 'Drow Ranger'},
          {img: Agilehero8, name: 'Ember Spirit'},
          {img: Agilehero9, name: 'Faceless Void'},
          {img: Agilehero10, name: 'Gyrocopter'},
          {img: Agilehero11, name: 'Hoodwink'},
          {img: Agilehero12, name: 'Juggernaut'},
          {img: Agilehero13, name: 'Lone Druid'},
          {img: Agilehero14, name: 'Luna'},
          {img: Agilehero15, name: 'Medusa'},
          {img: Agilehero16, name: 'Meepo'},
          {img: Agilehero17, name: 'Mirana'},
          {img: Agilehero18, name: 'Monkey King'},
          {img: Agilehero19, name: 'Mophling'},
          {img: Agilehero20, name: 'Naga Siren'},
          {img: Agilehero21, name: 'Nyx Assassin'},
          {img: Agilehero22, name: 'Pangolier'},
          {img: Agilehero23, name: 'Phantom Assassin'},
          {img: Agilehero24, name: 'Phantom Lancer'},
          {img: Agilehero25, name: 'Razor'},
          {img: Agilehero26, name: 'Riki'},
          {img: Agilehero27, name: 'Shadow Fiend'},
          {img: Agilehero28, name: 'Slark'},
          {img: Agilehero29, name: 'Sniper'},
          {img: Agilehero30, name: 'Spectre'},
          {img: Agilehero31, name: 'Templar Assassin'},
          {img: Agilehero32, name: 'Terror blade'},
          {img: Agilehero33, name: 'Troll Warlord'},
          {img: Agilehero34, name: 'Ursa'},
          {img: Agilehero35, name: 'Vengeful Spirit'},
          {img: Agilehero36, name: 'Venomancer'},
          {img: Agilehero37, name: 'Viper'},
          {img: Agilehero38, name: 'Weaver'},
        ]
      },
      {
        title: 'intelligence',
        cateImg: IntelICon,
        heros: [
          {img: Intelihero1, name: 'Ancient'},
          {img: Intelihero2, name: 'Bane'},
          {img: Intelihero3, name: 'Batrider'},
          {img: Intelihero4, name: 'Chen'},
          {img: Intelihero5, name: 'Crystal Maiden'},
          {img: Intelihero6, name: 'Dark Seer'},
          {img: Intelihero7, name: 'Dark Willow'},
          {img: Intelihero8, name: 'Dazzle'},
          {img: Intelihero9, name: 'Death Prophet'},
          {img: Intelihero10, name: 'Distrupter'},
          {img: Intelihero11, name: 'Enchantress'},
          {img: Intelihero12, name: 'Enigma'},
          {img: Intelihero13, name: 'Grimstroke'},
          {img: Intelihero14, name: 'Invoker'},
          {img: Intelihero15, name: 'Jakiro'},
          {img: Intelihero16, name: 'Keeper of the Light'},
          {img: Intelihero17, name: 'Leshrac'},
          {img: Intelihero18, name: 'Lich'},
          {img: Intelihero19, name: 'Lina'},
          {img: Intelihero20, name: 'Lion'},
          {img: Intelihero21, name: 'Natures Prophet'},
          {img: Intelihero22, name: 'Necrophos'},
          {img: Intelihero23, name: 'Ogre Magi'},
          {img: Intelihero24, name: 'Oracle'},
          {img: Intelihero25, name: 'Outworld destroyer'},
          {img: Intelihero26, name: 'Puck'},
          {img: Intelihero27, name: 'Pugna'},
          {img: Intelihero28, name: 'Queen of Pain'},
          {img: Intelihero29, name: 'Rubick'},
          {img: Intelihero30, name: 'Shadow Demon'},
          {img: Intelihero31, name: 'Shadow Shaman'},
          {img: Intelihero32, name: 'Silencer'},
          {img: Intelihero33, name: 'Skywrath Mage'},
          {img: Intelihero34, name: 'Storm Spirit'},
          {img: Intelihero35, name: 'Techies'},
          {img: Intelihero36, name: 'Tinker'},
          {img: Intelihero37, name: 'Visage'},
          {img: Intelihero38, name: 'Void Spirit'},
          {img: Intelihero39, name: 'Warlock'},
          {img: Intelihero40, name: 'Windranger'},
          {img: Intelihero41, name: 'Winter Wyvern'},
          {img: Intelihero42, name: 'Witch Doctor'},
          {img: Intelihero43, name: 'Zeus'},
        ]
      }
    ]
  }, []);

  return (
    <div className="w-full custom-border bg-[#1E1E1E] bg-hero_box border-[5px] rounded-md pb-20 ">
      <div className="flex cursor-pointer w-fit items-center gap-[14px] px-6 py-2 border border-[#FFFFFF99] rounded mx-auto mt-3 text-[#FFFFFF99]" onClick={onClose}>
        <p>
          Close 
        </p>
        <img src={ArrowRight} alt="" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-10">
        {heroData.map(item => (
          <HeroCategory title={item.title} cateImg={item.cateImg} heros={item.heros} />
        ))}
      </div>
    </div>
  )
}

export default HeroBox;
