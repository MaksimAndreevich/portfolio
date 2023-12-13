import Image from "next/image";
import { IProjectCard } from "../../lib/interfaces";
import routes from "../../lib/routes";

const cards: Array<IProjectCard> = [
  {
    title: "TODO",
    image: (
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    ),
    discription: "blabla0",
    link: routes.todo,
  },
];

export default cards;
