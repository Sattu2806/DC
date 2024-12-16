'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PabujiWeddinginfo = () => {
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
            <DialogTitle>Pabu’s Wedding: </DialogTitle>
            <DialogDescription>
            Pabuji was initially reluctant to marry, as his primary focus was on protecting cattle and his adventures. However, when the King of Umarkot in Sindh proposed a marriage to Pabu on behalf of his daughter, Phulvanti, Pabu reluctantly agreed. The princess had fallen in love with Pabu, and despite his reservations, he eventually accepted the proposal. However, he delayed the journey by demanding saffron to dye the clothes of his wedding procession, which sparked a war with Lakkhu Pathan, the saffron owner. After the battle, Pabu set off for Umarkot, but Deval, whom he had promised to protect, tried to convince him to stay or leave some men behind. Pabu, however, insisted that he would come immediately if she needed him, even during the wedding. As they journeyed, ominous signs, including a tiger killed by Dhebo, appeared, but they continued to Umarkot, where preparations for the wedding were underway. Just before the ceremony, Deval arrived in the form of a bird, bringing the news that Khinchi had stolen her cattle, setting the stage for further conflict.
            </DialogDescription>
          </DialogHeader>
          <button
            className="mt-4 bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-700"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      {/* Trigger Button */}
      <motion.button
        className="absolute top-[58%] left-[16%] cursor-pointer z-[50] rounded-full w-4 h-4 bg-purple-700"
        onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-400 opacity-50"
          animate={{ scale: [1, 1.3, 1.5, 1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.button>
    </>
  );
};


export default PabujiWeddinginfo;
