import Image from "next/image";
import { IProjectCard } from "../../lib/interfaces";
import routes from "../../lib/routes";

const cards: Array<IProjectCard> = [
  {
    title: "TODO",
    image: <Image src="/images/projects/todo.png" width={345} height={190} alt="Screenshots of todo project" />,
    description:
      "Everyone knows our wonderful Todo list, where you can easily add, delete and mark your tasks. Nothing complicated! Simplicity is the key to genius! :) The framework uses PostgreSQL as the database and all actions are executed on the Next.js server. After the actions are executed, Next.js built-in method revalidatePath is called to refresh the page",
    linkToPage: routes.todo,
    linkToGit: "https://github.com/MaksimAndreevich/portfolio/blob/main/app/ui/Todo/index.tsx",
  },
  {
    title: "Weather",
    image: <Image src="/images/projects/weather.png" width={345} height={190} alt="Screenshots of todo project" />,
    description:
      "The weather app, developed using the OpenWeatherMap open API, provides a convenient and feature-rich user experience. When you open the page for the first time, the app asks for permission to use geo-positioning, which allows you to instantly provide information about the current weather in your region It also provides the ability to search and display weather in the selected city. The app provides two options for displaying data: the current weather and a 5-day forecast broken down by every 3 hours. This provides users with not only an instant view of the current situation, but also a detailed forecast for the coming days with a three-hour breakdown. The combination of easy city search, accurate current weather data and detailed forecast creates an intuitive and efficient user interface, making the use of the application as convenient and informative as possible.",
    linkToPage: routes.weather,
    linkToGit: "https://github.com/MaksimAndreevich/portfolio/blob/main/app/ui/WeatherView/index.tsx",
  },

  {
    title: "Calculator",
    image: <Image src="/images/projects/calc.png" width={345} height={190} alt="Screenshots of calc project" />,
    description:
      "A calculator whose logic is implemented using vanilla javascript - without the use of third-party libraries. An interesting feature is auto scalable input.",
    linkToPage: routes.calc,
    linkToGit: "https://github.com/MaksimAndreevich/portfolio/blob/main/app/ui/Calculator/index.tsx",
  },
];

export default cards;
