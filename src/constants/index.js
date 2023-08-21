import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  nav,
  phicode,
  aws,
  jira,
  imgResizer,
  mine,
  nexus,
  notes,
  weather,
  heart
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"resume",
    title:"Resume"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Mentor",
    company_name: "NavGurukul",
    icon: nav,
    iconBg: "#383E56",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Teaching Python, JavaScript and Node.js concepts to more than 30 students",
      "Solving students' doubts and tell best practices",
      "Maintaining and conducting weekly tests",
    ],
  },
  {
    title: "SDE - I",
    company_name: "Phicode Pvt. Ltd.",
    icon: phicode,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Angular and other related technologies as per clients requirement.",
      "Deploy the developed applications, and perform testing to meet required quality standards."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nexus.point",
    description:
      "A web social media application inspired by facebook and instagram, enables users to post their thoughts among friends and it also includes a fully functional messenger app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: nexus,
    source_code_link: "https://github.com/SajjadMazhar/mern-social-media",
  },
  {
    name: "Minesweeper",
    description:
      "A logic puzzle video game genre generally played on personal computers. The game features a grid of clickable squares, with hidden 'mines' scattered throughout the board.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mine,
    source_code_link: "https://github.com/SajjadMazhar/Minesweeper",
  },
  {
    name: "Image Resizer",
    description:
      "A desktop application to resize your images. It is an easy to use application with a minimalistic UI design.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "electron.js",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: imgResizer,
    source_code_link: "https://github.com/SajjadMazhar/image_resizer-electronjs/tree/master",
  },
  {
    name: "Note It",
    description:
      "Make your own notes and never forget anything important. It is a note taking application with colorful note cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_code_link: "https://github.com/SajjadMazhar/NoteIt_Notes-App",
  },
  {
    name: "Weather App",
    description:
      "Wanted to know today's weather? Just type your city name and get the weather for today.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/SajjadMazhar/Weather-App",
  },
  {
    name: "Heart Disease prediction Model",
    description:
      "end-to-end heart disease prediction model trained from the real data from kaggle",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "green-text-gradient",
      }
    ],
    image: heart,
    source_code_link: "https://github.com/SajjadMazhar/Predicting_Heart_Disease_using_ML/tree/main",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
