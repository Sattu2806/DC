'use client';

import CharacterDialog from "../Base";

const Demajiinfo = () => {
  const data = {
    title: "Dhema Ji with Opium",
    description:
      "Dhebo (also called Dhema), one of Pabu’s four loyal ministers, stands out for his unmatched loyalty and raw physical strength. Each of Pabu’s ministers has a unique quality that complements the others, and Dhema’s defining traits are his devotion and readiness to sacrifice anything for his master. He is a symbol of unshakable dedication, with his immense strength taking center stage in stories about him. A striking example of this is when he consumes opium, an act that highlights both his fearless nature and his unwavering willingness to serve Pabu, no matter the cost.",
    buttonColor: "bg-purple-700",
    buttonHoverColor: "bg-orange-700",
    triggerPosition: { top: "80%", left: "27%" },
    rippleColor: "bg-purple-500",
  };

  return <CharacterDialog data={data} />;
};

export default Demajiinfo;