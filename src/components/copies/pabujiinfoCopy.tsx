'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PabujiinfoCopy = () => {
  const [showAnimations, setShowAnimations] = useState(false); // Control both animations

  const handleStartAnimation = () => {
    setShowAnimations(true);
  };

  // Function to handle closing the dialog when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".toggle-button-umarkot")) {
      setShowAnimations(false);
    }
  };

  useEffect(() => {
    if (showAnimations) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAnimations]);

  return (
    <>
      {/* <span className="absolute -top-28 left-[11%] z-20 w-full h-full">
        {showAnimations && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            className="w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              d="M50.894025,205.407763c0,0,17.556111-77.955316,26.125188-86.702657s72.980787-16.001226,72.980787-16.001226"
              transform="matrix(.989116 0 0 0.968959 1.093266 4.782048)"
              fill="none"
              stroke="#FFA500"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationComplete={() => setSvgCompleted(true)} // Trigger after SVG animation finishes
            />
            <motion.path
              d="M149.460666,104.297897l-10.142418,7.348882l10.142418-7.348882-9.88068-5.476313"
              transform="translate(0 0.000001)"
              fill="none"
              stroke="#FFA500"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            />
          </motion.svg>
        )}
      </span> */}

      {/* ShadCN Dialog */}
      <Dialog open={showAnimations} onOpenChange={setShowAnimations}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Pabu Ji</DialogTitle>
            <DialogDescription>
            Pabu (or Pabu Ji, with the respectful suffix &quot;-ji&quot; commonly used in India), a semi-mythical prince born around 1239 AD in Kolumand near Phalodi (Jodhpur), is remembered not for his rule but for his devotion to protecting animals, especially livestock. The son of King Buro and a celestial nymph, his story blends history, myth, and spirituality. As ruler of Kolumand, Pabuji was renowned for his care for animals, a value cherished by Rajasthan’s pastoral communities. His ultimate sacrifice to defend his kingdom’s livestock is said to have elevated him to divine status. Pabuji is celebrated as a protector deity, particularly by those who depend on cattle and camels. His legacy reflects Rajasthan’s values of loyalty, sacrifice, and harmony with nature, securing his place as an enduring symbol of protection and reverence.
            </DialogDescription>
          </DialogHeader>
          <button
            className="mt-4 bg-emerald-700 text-white rounded px-4 py-2 hover:bg-orange-700"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      {/* Trigger Button */}
      <motion.button
        className="absolute top-[36%] left-[50%] cursor-pointer z-[50] rounded-full w-4 h-4 bg-emrald-700 hover:bg-emerald-700 "
        onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full bg-emerald-500 opacity-50"
          animate={{ scale: [1, 1.3, 1.5,1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut",delay:0 }}
        />
      </motion.button>
    </>
  );
};

export default PabujiinfoCopy

