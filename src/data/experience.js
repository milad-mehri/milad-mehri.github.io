const experience = [
  {
    company: "Netverge",
    position: "Software Engineer Intern",
    date: "Apr 2025 - Present",
    tech: "React, Next.js, Python, Django, Full-Stack Development",
    bulletPoints: [
      "Built full-stack features for Netverge’s MSP platform using React, Next.js, and Django.",
      "Collaborated with customers and testers to gather feedback and improve UX and functionality.",
      "Helped shape scalable architecture and contributed to product demos, including at Web Summit.",
    ],
    link: "https://www.linkedin.com/company/netverge-services/",
    image: `${process.env.PUBLIC_URL}/netverge.png`,
  },
  {
    company: "Visual Cognition Lab",
    position: "Software Developer",
    date: "Feb 2025 - Present",
    tech: "React, Next.js, Web Development",
    bulletPoints: [
      "Working on the Content Platform Team, building the new version of the lab's website.",
      "Developing in React and Next.js to improve performance and user experience.",
    ],
    link: "https://viscoglab.psych.ubc.ca/",
    image: `${process.env.PUBLIC_URL}/vcl_logo.png`,
  },
  {
    company: "Multifaceted Innovation in NeuroTechnology (MINT)",
    position: "Software Engineer",
    date: "Jan 2025 - Present",
    tech: "React Native, Accessibility, EEG Signal Processing, Machine Learning",
    bulletPoints: [
      <>
        Developing and maintaining the <b>MindTap</b> app using <b>React Native</b>, ensuring accessibility via iOS Switch Control.
      </>,
      <>
        Designing and implementing an <b>EEG signal calibration game</b>, synchronizing real-time brain activity with user interactions.
      </>,
      <>
        Applying <b>machine learning and signal processing</b> to extract mental ON/OFF commands from EEG data for research applications.
      </>,
    ],
    link: "https://ubcmint.github.io/",
    image: `${process.env.PUBLIC_URL}/mint_logo.png`,
  },
];

export default experience;
