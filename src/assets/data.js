import React from "react";
import { FaPalette, FaReact, FaCode, FaVuejs } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "In Sovai",
  title: "Front-End Developer",
  social: {
    github: "https://github.com/insovaideveloper",
    facebook: "https://www.facebook.com/insovaideveloper",
    telegram: "https://t.me/insovai",
    email: "insovaidev@gmail.com!",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    // {
    //   skillName: "Frontend",
    //   skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    // },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "VueJS",
      skillIcon: <FaVuejs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Stuff checkin/checkout",
      description: "⚡ This project built with VueJS, Vuetify and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "vuejs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ]
};
export default data;
