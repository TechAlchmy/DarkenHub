import { memo, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles'; 

import FilterBg1 from '../../assets/Picdash/games/dota2/filter_bg.png';
import FilterBg2 from '../../assets/Picdash/games/dota2/fliterBg2.png';
import FliterBgline from '../../assets/Picdash/games/dota2/Lines.png';
import Rarity from '../../assets/Picdash/games/dota2/down.png';
import General from '../../assets/Picdash/games/dota2/active.png';
import HeroBox from "./HeroBox";

const FilterPannel = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMoreHero, setIsMoreHero] = useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const handleClickOpen = () => {
    setIsMoreHero(true);
  };

  const handleClose = () => {
    setIsMoreHero(false);
  };

  const onClickHandler = () => {
    const currentPath = location.pathname;
     const newPath = currentPath.replace('/user/dota2', '/user/postItem',);
     navigate(newPath);
  }

  const filters = useMemo(() => {
    return [
      {title: 'Rarity', placeholder: 'All qualities', icon: Rarity},
      {title: 'Quality', placeholder: 'All qualities', icon: General},
      {title: 'Type', placeholder: 'All', icon: General},
      {title: 'Hero selection', placeholder: 'All qualities', icon: General},
    ]
  }, []);
  return (
    <>
      <div className="bg-filter h-[820px] pb-32 w-1/4 rounded-2xl pt-[26px] py-5 relative">
        <div>
          <img src={FilterBg1} className="absolute right-0 top-0" alt="" />
          <img src={FilterBg2} className="absolute bottom-0 left-0" alt="" />
          <img src={FliterBgline} className="absolute top-0 left-10" alt="" />
        </div>
        <div className="flex font-inter px-16 justify-between items-center">
          <div className="text-3xl leading-[48px] opacity-20 font-bold">Fliters</div>
          <p className="text-lg font-semibold text-black">Reset</p>
        </div>
        <div className="px-16 mt-5">
          <p className="text-sm font-inter font-semibold leading-5">Price</p>
          <div className="w-3/4 text-[10px] font-inter font-medium mt-5 text-black">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Up to CA$6000</span>
              <span className="font-semibold">clear</span>
            </div>
            <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 w-[85%] h-2.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="px-10 mt-10 flex flex-col gap-4">
          {filters.map((item, index) => (
            <div key={index} className="py-3 rounded-bl-none rounded-tl-none flex gap-12 items-center border-l-0 border rounded-xl border-custom1 border-image-custom1">
              <div className={`-m-7 rounded-full p-5 ${index == 0 ? 'custom-background1' : 'bg-filter1'}`}>
                <img src={item.icon} alt="" />
              </div>
              <div className="font-inter">
                <p className="text-lg font-bold">{item.title}</p>
                {item.title === 'Hero selection' ? (
                  <button className="bg-custom-multiple py-2 px-10 rounded-md mt-2" onClick={handleClickOpen}>
                      View More 
                  </button>
                ): (
                  <input type="text" className="bg-white w-[95%] opacity-60 p-2 rounded-xl mt-2" placeholder={item.placeholder} />
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              className="relative z-50 opacity-100 bg-custom-multiple py-2 px-10 text-black font-bold rounded-md mt-2"
              onClick={onClickHandler}>
                Post My Items
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={isMoreHero}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
        maxWidth={'xl'}
        className="w-full bg-transparent"
      >
        <DialogContent>
          <HeroBox onClose={handleClose}/>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>    
    </>
  )
});

export default FilterPannel;