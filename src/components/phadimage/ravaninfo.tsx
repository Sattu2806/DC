'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Ravaninfo = () => {
  const [showAnimations, setShowAnimations] = useState(false);

  const handleStartAnimation = () => {
    setShowAnimations(true);
  };


  return (
    <>
      <motion.button
        className="absolute top-[46%] left-12 cursor-pointer z-[20] rounded-full w-4 h-4 bg-blue-900 toggle-button"
        onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500 opacity-50"
          animate={{ scale: [1, 1.3, 1.5, 1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </motion.button>

      {/* ShadCN Dialog */}
      <Dialog open={showAnimations} onOpenChange={setShowAnimations}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Ravan</DialogTitle>
            <DialogDescription>
              Ravana in the Pabu epic is often viewed as a counter-protagonist. Over time, due to
              Sanskritization, this character is sometimes identified with the Demon King of the
              Ramayana. However, historical sources suggest that Ravana in the Pabu narrative may
              have been a local ruler, not the same as the one from Valmiki&apos;s Ramayana. Some
              accounts point to him being a neighboring king from Mandore, near Jodhpur. This
              interpretation aligns with regional legends and local histories, offering a distinct
              cultural perspective on the rivalry between Pabu and Ravana.
            </DialogDescription>
          </DialogHeader>
          {/* <button
            className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
            onClick={handleCloseDialogue}
          >
            Close
          </button> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Ravaninfo;
