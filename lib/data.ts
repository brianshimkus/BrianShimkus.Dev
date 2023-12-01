import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Front-End Developer",
    company: "Marex",
    location: "Chicago, IL",
    descriptionPoints: [
      {
        descriptionPoint: "Run and manage all front-end operations",
      },
      {
        descriptionPoint: "Built starter template for use on all of our products",
      },
      {
        descriptionPoint: "Implement E2E and unit testing across products",
      },
      {
        descriptionPoint: "Lead the design and user experience",
      },
      {
        descriptionPoint: "Mentor interns during their summer internship",
      },
      {
        descriptionPoint: "Work with back-end developers to help assist on the back-end",
      }
    ],
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
  {
    title: "Senior Front-End Developer",
    company: "ICF",
    location: "Chicago, IL",
    descriptionPoints: [
      {
        descriptionPoint: "Lead the front-end development lifecycle, including direct interaction with clients and project managers",
      },
      {
        descriptionPoint: "Mentorship of team members on technical design approaches",
      },
      {
        descriptionPoint: "Lead the standardization of web accessibility across projects",
      },
      {
        descriptionPoint: "Development of websites and applications using a variety of stacks and tools including: Gatsby, React, GraphiQL, Webpack, Wordpress, AEM, .NET, and Sitecore",
      },
      {
        descriptionPoint: "Manage staging and productions environments across multiple platforms including: Digital Ocean, Jenkins, and Netlify",
      },
      {
        descriptionPoint: "Key clients: California Lottery, New York University, and United Healthcare",
      }
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    company: "TransUnion",
    location: "Chicago, IL",
    descriptionPoints: [
      {
        descriptionPoint: "Build websites, landing pages, and featured components in a fast-paced environment",
      },
      {
        descriptionPoint: "Work with the Contentful API to build a CMS for our project owners and team to manage content",
      },
      {
        descriptionPoint: "Build prototypes with Angular 6",
      },
      {
        descriptionPoint: "Use of Webpack to bundle and compile assets",
      },
      {
        descriptionPoint: "Deployment of projects to AWS",
      },
      {
        descriptionPoint: "Build animations with JavaScript to be used on landing pages, infographics, and features",
      },
      {
        descriptionPoint: "Daily communication with stakeholders in establishing deadlines, expectations, and progress on projects",
      },
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
  {
    title: "UX Architect/Front-End Developer",
    company: "R1 RCM",
    location: "Chicago, IL",
    descriptionPoints: [
      {
        descriptionPoint: "Provided leadership in the design and development of user experience deliverables",
      },
      {
        descriptionPoint: "Worked with directors and stakeholders in identifying weaknesses within the application",
      },
      {
        descriptionPoint: "Created wireframes to explore ideas with business stakeholders using InDesign and Balsamiq",
      },
      {
        descriptionPoint: "Built working prototypes on the Front-End to demonstrate new concepts and features using AngularJS and Bootstrap",
      },
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2016-2017",
  },
  {
    title: "Junior Front-End Developer",
    company: "Kohactive",
    location: "Chicago, IL",
    descriptionPoints: [
      {
        descriptionPoint: "Developed responsive websites per approved client designs ",
      },
      {
        descriptionPoint: "Pair programmed with Senior Developers to learn and enhance my skill set in web development technologies such as HAML, SASS, JavaScript, Ruby, Rails, Git, and Wordpress",
      },
      {
        descriptionPoint: "Conducted meetings with clients such as Aon, Manchester United, and The Vitality Group to discuss project progress and also instruct on the use of Wordpress ",
      },
      {
        descriptionPoint: "Participated in monthly developer meetups",
      },
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2013-2015",
  },
] as const;

export const projectsData = [
  {
    title: "Shimstore Admin",
    description:
      "A CMS built from scratch to manage stores and their items for sale",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Shimstore",
    description:
      "The front-end for the Shimstore shop",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Witter",
    description:
      "A spin-off of twitter",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "MySQL",
  "Framer Motion",
] as const;