'use client';

import CharacterDialog from "../Base";

const Deval = () => {
  const data = {
    title: "Deval",
    description:
      "Deval is one of the central female figures in the Pabuji epic, a powerful leader and skilled cattle herder. As an incarnation of the goddess Hinglaj, she embodies both divine and human qualities, capable of transforming into animals to aid in travel. Her loyalty to Pabuji is unwavering, always by his side as a trusted advisor and sisterly figure. Deval&apos;s dual role as a spiritual guide and political advisor underscores the blend of the divine and earthly in the narrative, with her mission ensuring that Pabuji fulfills his sacred duties.",
    buttonColor: "bg-emerald-500",
    buttonHoverColor: "bg-emerald-700",
    triggerPosition: { top: "75%", left: "71%" },
    rippleColor: "bg-emerald-400",
  };

  return <CharacterDialog data={data} />;
};

export default Deval

