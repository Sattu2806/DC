'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";



const Demajiinfo = () => {
    const [showAnimations, setShowAnimations] = useState(false); // Control both animations
    const [svgCompleted, setSvgCompleted] = useState(false); // Track when SVG animation completes
  
    // const handleStartAnimation = () => {
    //   setShowAnimations(true);
    //   setSvgCompleted(false); // Reset to allow sequential animations
    // };
  
    // Function to handle closing the card when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".card-umarkot") && !target.closest(".toggle-button-umarkot")) {
        setShowAnimations(false);
        setSvgCompleted(false)
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
          <span className="absolute top-12 left-[11%] z-20 w-full h-full">
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
            <motion.path xmlns="http://www.w3.org/2000/svg" d="M50.894025,205.407763c0,0,17.556111-77.955316,26.125188-86.702657s72.980787-16.001226,72.980787-16.001226" transform="matrix(.989116 0 0 0.968959 1.093266 4.782048)" fill="none"               
            stroke="#FFA500"
            stroke-width="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => setSvgCompleted(true)} // Trigger after SVG animation finishes
            />
            {/* <motion.path
              d="M27.568635,287.646206c0,0,40.881501-160.193759,49.450578-168.9411s72.980787-16.001226,72.980787-16.001226"
              transform="matrix(.989116 0 0 0.968959 1.093266 4.782048)"
              fill="none"
              stroke="#FFA500"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationComplete={() => setSvgCompleted(true)} // Trigger after SVG animation finishes
            /> */}
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
      </span>

      {/* Card Animation */}
      {svgCompleted && (
        <div className="absolute top-12 left-1/4 z-20 w-full h-full max-w-[300px] text-sm card-umarkot">
          <motion.div
            className="rounded-xl shadow-xl bg-white p-6 mt-4"
            initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }} // Anchor to bottom-left corner
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="text-xl font-bold pb-2">UmarKot</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* <Image src='/ravan.png' width={200} height={100} alt="ravan"/> */}
          </motion.div>
        </div>
      )}
      {/* <button
        className=" absolute bottom-10 left-10 toggle-button cursor-pointer z-[999]"
        onClick={handleStartAnimation}
      >
        Show
      </button> */}
      <motion.button
        className="absolute top-[65%] left-[27%] cursor-pointer z-[999] rounded-full w-4 h-4 bg-violet-700 hover:bg-purple-700 "
        // onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-500 opacity-50"
          animate={{ scale: [1, 1.3, 1.5,1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut",delay:5 }}
        />
      </motion.button>
      </>
  )
}

export default Demajiinfo