/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yasser Laroussi Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yasser Laroussi Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Yasser Laroussi",
  logo_name: "Yasser Laroussi",
  nickname: "Yasser_Tech",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1GoQmfGaFe0W-XkESSghUqQft5SoCQbcY/view?usp=drive_link",
  portfolio_repository: "https://github.com/yas2003/portfolio-",
  githubProfile: "https://github.com/yas2003ser",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yas2003ser",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yasser-laroussi-43b451258/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:larouyasser28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/yasser.laroussi.39",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yasser_tech",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Pentrations Testing",
      fileName: "cyber",
      skills: [
        "⚡ Experience in network scanning and vulnerability assessment",
        "⚡ Proficient in penetration testing methodologies and tools",
        "⚡ Knowledge of web application security testing",
        "⚡ Familiarity with wireless network security testing",
        "⚡ Understanding of social engineering techniques",
      ],
      softwareSkills: [
        {
          skillName: "linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            backgroundColor: "white",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:metasploit",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly interactive mobile applications for Android and iOS",
        "⚡ Creating application backend in firebase",
        "⚡ Building application control panel for admin",
        "⚡ Experience in creating and managing ",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Getx",
          fontAwesomeClassname: "simple-icons:getx",
          style: {
            color: "#FA7343",
          },
        },
        {
          skillName: "bloc",
          fontAwesomeClassname: "simple-icons:bloc",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Sponsoring in Social Media (facebook, instagram)",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creating and managing social media campaigns",
        "⚡ Up to 1.5 years experience with ads manager in facebook and instagram",
        "⚡ Developing strategies for increasing followers",
        "⚡ Creating and managing social media ads",
        "⚡ Experience in creating and managing ",
      ],
      softwareSkills: [
        {
          skillName: "facebook",
          fontAwesomeClassname: "simple-icons:facebook",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "instagram",
          fontAwesomeClassname: "simple-icons:instagram",
          style: {
            color: "#E4405F",
          },
        },
        {
          skillName: "meta",
          fontAwesomeClassname: "simple-icons:meta",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "High School Diploma",
      subtitle: "Lycée Mostapha Ben Boulaid",
      logo_path: "lycee.jpeg",
      alt_name: "Lycée Mostapha Ben Boulaid",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic high school subjects like Mathematics, Physics, Chemistry, Biology, English, Arabic, French.",
        "⚡ I have built strong foundation in computer science subjects.",
        "⚡ I have scored 54% in high school.",
      ],
      website_link: "",
    },
    {
      title: "CS50's Introduction to Computer Science",
      subtitle: "Online Harvard University",
      logo_path: "harvard.png",
      alt_name: "Harvard University",
      duration: "2022 - 2023",
      descriptions: [
        " ⚡ I have gained a solid understanding of computer science fundamentals through the CS50's Introduction to Computer Science course offered by Harvard University",
        "⚡ Learned the basics of programming languages like C, Python, and JavaScript.",
        "⚡ Developed problem-solving skills through various programming assignments and projects.",
        "⚡ Explored topics such as algorithms, data structures, memory management, and recursion.",
        "⚡ Learned about computer architecture, file I/O, and working with libraries.",
        "⚡ Developed an understanding of web development concepts and built web applications using HTML, CSS, and JavaScript.",
      ],
      website_link: "https://cs50.harvard.edu/x/2024/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "cs50x Introduction to Computer Science",
      subtitle: "- David J. Malan",
      logo_path: "harvard.png",
      certificate_link:
        "https://cs50.harvard.edu/certificates/2bbbf5c6-0242-49f9-ba99-3e292fa0c953",
      alt_name: "Harvard University",
      color_code: "#8C151599",
    },
    {
      title: " Flutter Development ",
      subtitle: " Hassan Fulaih",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7485d6bc-cf3d-4f3b-9a4e-2f29d8dbbef1/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Cyber Security Course دورة الأمن السيبراني الشاملة",
      subtitle: "- Sami Almashqbah",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b65a1413-3d2d-41c6-aa00-74ed389b68d4/",
      alt_name: "Cyber Security",
      color_code: "#ffffff",
    },
    {
      title: "Digital Marketing",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1NWRKfYj754GYeXXo7ppwlzZfwtw9ljSu/view?usp=drive_link",
      alt_name: "google",
      color_code: "#4285F499",
    },
    {
      title: "Offensive Hacking Unfolded - The Beginner's Edition",
      subtitle: "- Avinash Yadav",
      logo_path: "comproavi.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/13-4ofnQ9GV4XM3AGaRR5GBLO2Gig5d07/view?usp=drive_link",
      alt_name: "comproavi",
      color_code: "#ffffff",
    },
    {
      title: "Startup Certificate - Patent",
      subtitle: "- Romeo Kienzler",
      logo_path: "univbatna.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1FpAIDqv90xEs6Bu0YO7YAV0O_CZszEC6/view?usp=drive_link",
      alt_name: "Startup Certificate - Patent",
      color_code: "#ffffff",
    },
    {
      title: "احترف إعلانات فيسبوك وانستغرام من الصفر: دورة شاملة 2024",
      subtitle: "- Sponsoring in social media",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-20465395-96c8-48f7-b7e8-f9a2f69c3a8f/",
      alt_name: "udemy",
      color_code: "#ffffff",
    },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, competitions and Events",
  description:
    " I have worked with a variety of technologies in mobile development, pentrations testing, and social media sponsoring. I have also participated in various competitions and events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mobile Dev freelancer",
          company: "Yasser Tech",
          company_url: "",
          logo_path: "logos.png",
          duration: "aug 2023 - Present",
          location: "Algeria",
          description:
            "I am working as a freelancer in mobile development. I have developed many mobile applications. ",
          color: "#000000",
        },
        {
          title: "Sponsoring in social media",
          company: "Yasser Tech",
          company_url: "",
          logo_path: "logos.png",
          duration: "jan 2023 -  present",
          location: "Algeria",
          description:
            "I am working as a freelancer in social media sponsoring. I have developed many social media campaigns. i have up to 1.5 years experiance with ads manger in facebook and instagram",
          color: "#0879bf",
        },
        {
          title: "Pentrations Testing",
          company: "Yasser Tech",
          company_url: "",
          logo_path: "logos.png",
          duration: "May 2024 - Present",
          location: "Algeria",
          description: "Not Yet",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "competitions",
      experiences: [
        {
          title: "O2R Oil and gas competition",
          company: "Spe .",
          company_url: "https://www.spe.org/en/",
          logo_path: "spe.jpeg",
          duration: "nov 2023 - nov 2023",
          location: "Algeria",
          description:
            "I win  second place in the O2R Oil and Gas competition where we created a website based on the theme of oil and gas",
          color: "#000000",
        },
        {
          title: "Project 0 challenges competition",
          company: "Elec Club Msila",
          company_url: "",
          logo_path: "project0.png",
          duration: "avril 2024 - avril 2024",
          location: "Algeria",
          description:
            "as a pentration tester, I achieved 3rd place in Project-0 💻🥉, a fantastic event! by ELEC CLUB. Participating in Project-0 allowed me to showcase my cyber security skills, collaborate with tech enthusiasts, and immerse myself in the dynamic world of innovation.ld a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Events",
      experiences: [
        {
          title: "DevFest Gdg Batna 2023",
          company: "GDG Batna",
          company_url: "",
          logo_path: "gdgbatna.jpeg",
          duration: "Dec 2023 - Dec 2023",
          location: "Algeria",
          description:
            "best devfest with best team ,devfest batna 2023 , i organed this event and best moment with my secound family 🔥",
          color: "#4285F4",
        },
        {
          title: "Qse expo 2024",
          company: "Spe",
          company_url: " https://www.spe.org/en/",
          logo_path: "spe.jpeg",
          duration: "mai 2024 - mai 2024",
          location: "Algeria",
          description:
            "I orgnazed this event for the first time in my university, it was a great experience",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create mobile applications projects and deploy them to mobile applications stores. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yasserLaroussi.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with mobile dev with flutter, sponsoring in social media, cyber security, Android.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Algeria, Batna",
    locality: "Batna",
    country: "Algeria",
    region: "Batna",
    postalCode: "05000",
    streetAddress: "Bouakal 03",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
