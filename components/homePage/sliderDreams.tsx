import DreamShowcase from "../dreams/dreamShowcaseItem";

const SliderDreams = () => {
  const dream1 = {
    name: "Christian Bale",
    dreamName: "An ax",
    description:
      "Today I dreamt about grabbin an ax and killing an innocent woman. She was screaming so bad. After that I exercised and drank 3 gallons of pure water. I took a great stroll around my neighborhood breathing clean, fresh air. I got into cafe and got some soda for myself. After that I embraced the unbelievably pure blue sky. I thought the sun is the greatest invention of this world and should shine forever. Thoughts wouldnt ever leave me. I thought she was like my mother, what do you think?",
  };

  const dream2 = {
    name: "Tomas Shelby",
    dreamName: "Smoke pipe",
    description:
      "This pipe wouldnt leave me alone. I dream about it every night. The scenario is pretty similar in every one of these dreams: I smoke it and smoke and smoke until the vapor, the dark gray smoke fills the room and I suffocate. I wake up sweating after each occurence of this dream. My wife told me to quit smoking. Is there a solution to this?",
  };

  const dream3 = {
    name: "Walter White",
    dreamName: "Jesse Pinkman",
    description:
      "There is this good fella, Jesse Pinkman hes called. I met him pretty randomly and we make a good couple with each other. There is one thing tho: I dream about being him every damn night. I have cancer and he does not. In those dreams Im just young and fresh and never ending life envelopes me. Is there a way to stop this other than dying?",
  };
  return (
    <>
      <DreamShowcase fakeDream={dream1} /> <DreamShowcase fakeDream={dream2} />{" "}
      <DreamShowcase fakeDream={dream3} />{" "}
    </>
  );
};
export default SliderDreams;
