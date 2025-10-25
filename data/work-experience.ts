type WorkExperienceItem = {
  id: string;
  companyName: string;
  position: string;
  logo: string;
  startDate: Date;
  endDate: Date;
  technologies: {
    name: string;
    icon: string;
  }[];
  jobDescription: string[];
};

export const WorkExperience: WorkExperienceItem[] = [
  {
    id: "dlfslfsd",
    companyName: "DataOn (PT Indodev Niaga Internet)",
    position: "Implementation Consultant (Technical Customization Focus)",
    logo: "./images/dataon-logo.png",
    startDate: new Date("2024-05-27"),
    endDate: new Date(),
    technologies: [
      { name: "CFML", icon: "https://via.placeholder.com/20" },
      { name: "React JS", icon: "https://via.placeholder.com/20" },
      { name: "HTML", icon: "https://via.placeholder.com/20" },
      { name: "CSS", icon: "https://via.placeholder.com/20" },
      { name: "JavaScript", icon: "https://via.placeholder.com/20" },
      { name: "Git", icon: "https://via.placeholder.com/20" },
    ],
    jobDescription: [
      "Developing and implementing custom web applications using React.js, Golang, CFML, HTML, CSS, and JavaScript to meet specific client requirements and maintained web applications",
      "Collaborating closely with Implementation Consultants to ensure deliverables align with client expectations and business objectives",
      "Maintaining consistent code quality through Git version control, Gitlab for CI/CD, and SonarQube for code quality assurance",
      "Adapting and extending DataOn's core applications to create customized solutions for enterprise clients",
      "Troubleshooting and resolving technical issues to ensure smooth application deployment and operation",
      "Consistently achieving high performance ratings, with a current score of 4.32/5",
    ],
  },
  {
    id: "kdlgkndfklgndl",
    companyName: "PT. QATROS TEKNOLOGI NUSANTARA",
    position: "Frontend Web Engineer",
    logo: "./images/qatros-logo.png",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-12-01"),
    technologies: [
      { name: "Nuxt.js", icon: "https://via.placeholder.com/20" },
      { name: "Vue.js", icon: "https://via.placeholder.com/20" },
      { name: "Vuex", icon: "https://via.placeholder.com/20" },
    ],
    jobDescription: [
      "Developed of high-performance web applications utilizing Nuxt.js, covering the application of core Vue.js concepts such as Vue Router, Vuex, and data reactivity",
      "Developed website interface with booking system and Midtrans payment integration",
      "Instrumental in building the Gompu application, applying the Scrum method in a collaborative team environment",
    ],
  },
];
