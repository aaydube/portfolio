import { Icons } from "@/components/icons";
import { HomeIcon, CodeXml, Notebook } from "lucide-react";

export const DATA = {
  name: "Aayush",
  initials: "AD",
  url: "https://google.com/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description: "The Developer Who Makes It Work ⚡",
  summary:
  "A full-stack web developer based in Delhi, India. I build fast, responsive websites and develop AI-powered applications. I enjoy turning ideas into real-world products that are easy to use and visually appealing. Currently, I'm pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I'm always learning, building, and looking for new challenges that push me to grow as a developer.",
  // avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "Postgres",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeXml, label: "Projects" },
  ],
  contact: {
    email: "dubeyaayush019@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aaydube",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aaydube/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ayusdube",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:dubeyaayush019@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Resume.pdf",
        icon: Notebook,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "KR Mangalam University",
      href: "https://www.krmangalam.edu.in/",
      degree: "BTech CSE (AI & ML)",
      logoUrl: "/.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "VedaWell",
      href: "https://github.com/aaydube/vedawell",
      dates: "May 2025",
      active: true,
      description:
        "A full-stack AI wellness chatbot powered by Ayurveda and Atharvaveda, RAG-based document search, and personalized health insights using LLaMA 3 and LangChain. 🌿🧘‍♂️",
      technologies: [
        "TypeScript",
        "Tailwind CSS",
        "LangChain",
        "LLaMA 3",
        "FastAPI",
        "Hugging Face",
        "Python",
      ],
      links: [
        {
          type: "Wesbite",
          href: "https://vedawell.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aaydube/vedawell",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img7.png",
    },
    {
      title: "Uber Clone",
      href: "https://github.com/aaydube/uber-clone",
      dates: "March 2025",
      active: true,
      description:
        "A full-stack Uber clone with real-time ride booking, live tracking, and fare estimation using the Google Maps API. 🚗💨",
      technologies: [
        "React",
        "Tailwind CSS",
        "Socket.io",
        "Google Maps API",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aaydube/uber-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img3.png",
    },
    {
      title: "Medium Clone",
      href: "https://github.com/aaydube/medium",
      dates: "April 2025",
      active: true,
      description:
        "A full-stack Medium clone with user authentication, blog publishing, and seamless routing—powered by edge-deployed APIs and PostgreSQL. ✍️🚀",
      technologies: [
        "React",
        "Tailwind CSS",
        "Hono",
        "Cloudflare Workers",
        "Prisma",
        "TypeScript",
      ],
      links: [
        {
          type: "Wesbite",
          href: "https://medium-seven-eta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aaydube/medium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img1.png",
    },
    {
      title: "Drive",
      href: "https://github.com/aaydube/drive",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "A Google Drive clone for secure file storage, upload, and management using Supabase, Node.js, Express, and MongoDB. 📂🚀",
      technologies: ["Express", "EJS", "Node.js", "MongoDB", "Supabase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aaydube/drive",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img2.png",
    },
    {
      title: "Movie Website",
      href: "https://github.com/aaydube/movieApp",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "A movie website to search for films, TV shows, and celebrities, featuring trending content, infinite scroll, and TMDB API integration. 🎬🍿",
      technologies: [
        "React",
        "Tailwind CSS",
        "TMDB API",
        "Redux",
        "Infinite-scroll",
      ],
      links: [
        {
          type: "Wesbite",
          href: "https://movie-app-rho-pearl.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aaydube/movieApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img4.png",
    },
  ],
} as const;
