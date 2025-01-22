'use client';

import CharacterDialog from "../Base";

const Chando = () => {
  const data = {
    title: "Chando",
    description:
      "Chando, one of Pabu’s loyal ministers and Dhebo’s brother, stands out not through appearance but intellect. Modest in stature, clean-shaven, with a thin mustache and dressed in simple white, he might seem ordinary at first glance. But Chando’s true strength lies in his wisdom. As the court’s scribe and keeper of records, he is highly educated, skilled in reading, writing, and preserving the kingdom’s knowledge. A trusted messenger, Chando embodies quiet intelligence and thoughtfulness, proving that strength isn’t always about physical might—it’s also about the power of the mind.",
    buttonColor: "bg-rose-500",
    buttonHoverColor: "bg-rose-700",
    triggerPosition: { top: "36%", left: "57%" },
    rippleColor: "bg-rose-400",
  };

  return <CharacterDialog data={data} />;
};

export default Chando;