'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Ramdevinfo = () => {
  const [showAnimations, setShowAnimations] = useState(false);

  const handleStartAnimation = () => {
    setShowAnimations(true);
  };

  return (
    <>
      <motion.button
        className="absolute top-[11%] left-[25%] cursor-pointer z-[50] rounded-full w-4 h-4 bg-pink-700 toggle-button-umarkot"
        onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full bg-pink-400 opacity-50"
          animate={{ scale: [1, 1.3, 1.5, 1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </motion.button>

      {/* ShadCN Dialog */}
      <Dialog open={showAnimations} onOpenChange={setShowAnimations}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Baba Ramdev</DialogTitle>
            <DialogDescription>
              Baba Ramdev is a beloved local deity of Rajasthan, revered by numerous communities.
              A semi-mythical figure, he was a 15th-century Rajput ruler of the Tanwar dynasty,
              governing the region of Runicha near Pokaran. In the Pabuji epic, Baba Ramdev appears
              as a wandering Yogi and a key advisor to Roop, guiding him on his quest for family
              and revenge. He also attends Pabu&apos;s wedding as an honored guest, symbolizing his
              important role in the narrative and his spiritual influence in Rajasthan&apos;s folklore.
            </DialogDescription>
          </DialogHeader>
          <button
            className="mt-4 bg-pink-400 text-white rounded px-4 py-2 hover:bg-pink-700"
            onClick={() => setShowAnimations(false)}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Ramdevinfo;
