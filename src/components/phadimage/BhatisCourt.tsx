import CharacterDialog from "../Base";

const BhatisCourt = () => {
  const data = {
    title: "Bhati Court",
    description:
      "The Bhati court, located in present-day Jaisalmer, plays a pivotal role in the Pabuji epic. King Jaisingh Bhati forms an alliance with the Khinchis to steal Deval's cattle, setting the stage for Pabu's final battle. This betrayal leads to a chain of events that culminate in a dramatic confrontation, highlighting themes of loyalty, conflict, and revenge within the epic.",
    buttonColor: "bg-sky-500",
    buttonHoverColor: "bg-sky-700",
    triggerPosition: { top: "40%", left: "97%" },
    rippleColor: "bg-sky-400",
  };

  return <CharacterDialog data={data} />;
};

export default BhatisCourt;