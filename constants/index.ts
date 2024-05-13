import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "mysql",
    Image: "/mysql.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Profile = {
  name: "Perfil",
  src: "/Perfil.png",
  width: 400,
  height: 300,
};
export const ProfilePhone = {
  name: "Perfil",
  src: "/Perfil.png",
  width: 170,
  height: 170,
};

export const Socials = [
  {
    name: "Linkedin",
    src: "/Linkedin.svg",
    link: "https://www.linkedin.com/in/rony-santiago/",
  },
  {
    name: "whatsApp",
    src: "/github.svg",
    link: "https://github.com/Rony-San",
  },
];
export const Projects = [
  {
    title: "ParkQApp",
    text: "Proyecto Ganador de la hackaton Colombia BlockChain ICP 2024",
    src: "/Hackaton.png",
    link: "https://uvyfx-hiaaa-aaaap-qhivq-cai.icp0.io/",
  },
  {
    title: "Estructura de datos",
    text: "Este es un Proyecto final. Cada perfil puede crear y buscar preguntas relacionadas con la materia, también se puede visitar los perfiles de los usuarios y el propio",
    src: "/Proyecto-Estructuras.png",
    link: "https://estructuras-q-a.vercel.app/",
  },
  {
    title: "Modulo de cancelaciones U de A",
    text: "Proyecto donde un usuario puede tener clases y el usuari odocente se encarga de cancelar una materia si el estudiante envia una petición de cancelación -> Front-only Pc-only",
    src: "/Cancelaciones-U-de-A.png",
    link: "https://fabrica-escuela-modulo-cancelacion-git-4dffa1-ronysans-projects.vercel.app/",
  },
  {
    title: "Proyecto Lógica 3",
    text: "En el problema aleatorio 2-SAT, Pc-only",
    src: "/Proyecto-Lófica-3.png",
    link: "https://logica-3-proyecto.vercel.app/",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "homeSection", // Identificador único para la sección de inicio
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "proyectosRef", // Identificador único para la sección de habilidades
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "Technologies", // Identificador único para la sección de proyectos
  },
];
