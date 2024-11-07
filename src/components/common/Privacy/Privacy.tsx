import { useEffect, useState } from "react";

import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import Icon from "../../../assets/dashboard/22.png";
import PrivacyContent from "./PrivacyContent";

interface props {
  open: boolean,
}

const Privacy = ({open} : props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    if (open) {
      setIsOpen(open);
    }
  }, [open])

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth={'lg'}
      className="w-full bg-transparent"
    >
      <DialogContent>
        <div className="bg-privacy px-5 py-20">
          <div 
            className="flex text-[24px] rounded-lg  bg-privacy-btn leading-5 font-inter gap-3 items-centerp px-8 py-4 bg-black"
            style={{
              borderImageSource: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), 
                                  linear-gradient(180deg, rgba(39, 55, 207, 0) -4.69%, rgba(189, 252, 254, 0.5) 100%)`,
              borderImageSlice: 1,
            }}  
          >
            <div>
              <img src={Icon} alt="" />
            </div>
            <p className="text-white flex items-center gap-2">
              Please read our rules and accept the terms. 
              <svg className="mt-1" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 12.3332L6.66634 6.99984L1.33301 1.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </p>
          </div>
          {!isRead ? (
            <PrivacyContent />
          ) : (
            <div></div>
          )}
        </div>
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
  )
}


export default Privacy;