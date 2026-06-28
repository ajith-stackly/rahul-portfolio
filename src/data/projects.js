import PortfolioBg from "../assets/Images/PortfolioBg.png";
import Portfolio from "../assets/Images/Portfolio.png";
import WeatherBanner from "../assets/Images/weatherBanner.png";
import Weather from "../assets/Images/Weather.png";
import CredCloneBanner from "../assets/Images/CredCloneBanner.png";
import CredClone from "../assets/Images/CredClone.png";
import UserAuthBanner from "../assets/Images/UserAuthBanner.png";
import UserAuth from "../assets/Images/UserAuth.png";
import Todo from "../assets/Images/TodoTemp.png";
import TodoBanner from "../assets/Images/TodobannerTemp.png";
import ProjectIcons from "../assets/Images/ProjectIcons.png";
import QRBanner from "../assets/Images/QRBanner.png";
import QR from "../assets/Images/QR.png";
import PlayListBanner from "../assets/Images/PlayListBanner.png";
import PlayList from "../assets/Images/PlayList.png";
import ReactJS from "../assets/logo/React.js.png";
import JavaScript from "../assets/logo/JavaScript.png";
import CSS from "../assets/logo/CSS.png";
import Figma from "../assets/logo/Figma.png";

export const projects = [
    {
        id: 1,
        title: "Portfolio",
        category: "Frontend",
        description: "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
        background: PortfolioBg,
        preview: Portfolio,
        technologies: ProjectIcons,
    },
    {
        id: 2,
        title: "Weather App",
        category: "Frontend",
        description: "Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.",
        background: WeatherBanner,
        preview: Weather,
        technologies: ProjectIcons,
    },
    {
        id: 3,
        title: "Cred Clone",
        category: "Frontend",
        description: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
        background: CredCloneBanner,
        preview: CredClone,
        technologies: ProjectIcons,
    },

    {
        id: 4,
        title: "User Authentication",
        category: "Frontend",
        description:
            "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
        background: UserAuthBanner,
        preview: UserAuth,
        technologies: ProjectIcons,
    },
    {
        id: 5,
        title: "To-Do App",
        category: "Frontend",
        description: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
        background: TodoBanner,
        preview: Todo,
        technologies: ProjectIcons,
    },

    {
        id: 6,
        title: "QR Generator",
        category: "Frontend",
        description: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
        background: QRBanner,
        preview: QR,
        technologies: ProjectIcons,
    },

    {
        id: 7,
        title: "Music Playlist",
        category: "Frontend",
        description: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
        background: PlayListBanner,
        preview: PlayList,
        technologies: ProjectIcons,
    },
];