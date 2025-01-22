'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type CharacterData = {
  title: string;
  description: string;
  buttonColor: string;
  buttonHoverColor: string;
  triggerPosition: {
    top: string;
    left: string;
  };
  rippleColor: string;
};

type CharacterDialogProps = {
  data: CharacterData;
};

const CharacterDialog: React.FC<CharacterDialogProps> = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleStartAnimation = () => {
    setShowDialog(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".toggle-button")) {
      setShowDialog(false);
    }
  };

  useEffect(() => {
    if (showDialog) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDialog]);

  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{data.title}</DialogTitle>
            <DialogDescription>{data.description}</DialogDescription>
          </DialogHeader>
          <button
            className={`mt-4 text-white rounded px-4 py-2 ${data.buttonColor} hover:${data.buttonHoverColor}`}
            onClick={() => setShowDialog(false)}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      <motion.button
        className={`absolute cursor-pointer z-[50] rounded-full w-4 h-4 ${data.buttonColor}`}
        style={data.triggerPosition}
        onClick={handleStartAnimation}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className={`absolute top-0 left-0 w-full h-full rounded-full ${data.rippleColor} opacity-50`}
          animate={{ scale: [1, 1.3, 1.5, 1], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.button>
    </>
  );
};

export default CharacterDialog;
 