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
    title: "Front-End Developer",
    company: "TransUnion",
    location: "Chicago, IL",
    description:
      "I worked as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
  {
    title: "Senior Front-End Developer",
    company: "ICF",
    location: "Chicago, IL",
    description:
      "I worked as a senior front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Lead Front-End Developer",
    company: "Marex",
    location: "Chicago, IL",
    description:
      "I worked as a lead front-end developer.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
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