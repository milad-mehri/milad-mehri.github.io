const experience = [
  {
    company: "Netverge Services",
    position: "Software Engineering Intern",
    date: "Apr 2025 - Aug 2025",
    tech: "Next.js, Django REST, PostgreSQL, Redis, Docker",
    bulletPoints: [
      <>Led development of an <b>AI-powered dashboard</b> for <b>Managed Service Providers</b> (300+ clients), featuring <b>real-time reports</b> and a <b>multi-agent LLM system</b> that predicts incidents and orchestrates <b>automated resolutions</b>.</>,
      <>Optimized the <b>Next.js + Django API</b> layer, reducing <b>page-load times by 40%</b> by consolidating overlapping endpoint requests and implementing <b>smart caching strategies</b>.</>,
      <>Shipped <b>80+ features and bug fixes</b> to production; automated repetitive workflows, reducing <b>manual workload by 80%</b>.</>,
      <>Presented the platform live at the <b>2025 Web Summit Tech Conference</b> to industry professionals, including customers, partners, and investors.</>,
    ],
    link: "https://www.linkedin.com/company/netverge-services/",
    image: `${process.env.PUBLIC_URL}/netverge.png`,
  },
  {
    company: "UBC Visual Cognition Lab",
    position: "Software Developer",
    date: "Feb 2025 - Present",
    tech: "React, MongoDB, Tailwind",
    bulletPoints: [
      <>Revamped the <b>Visual Cognition Lab's website</b> to improve <b>UI/UX, performance, and content accessibility</b>; implemented new features such as an <b>AI chatbot</b> that discusses the lab's research.</>,
      <>Collaborated in <b>weekly developer meetings</b> to plan features, review progress, and align technical decisions with research goals.</>,
    ],
    link: "https://viscoglab.psych.ubc.ca/",
    image: `${process.env.PUBLIC_URL}/vcl_logo.png`,
  },
  {
    company: "MINT Design Team",
    position: "Software Engineer",
    date: "Jan 2025 - Present",
    tech: "React Native, Python, scikit-learn",
    bulletPoints: [
      <>Developing the <b>MindTap app</b> in <b>React Native</b> enabling <b>hands-free mobile interactions</b> via <b>EEG signals</b>, integrating <b>iOS Switch Control</b> to enhance accessibility for users with motor impairments.</>,
      <>Engineered an <b>EEG calibration system</b> that maps <b>brain signals</b> to specific user actions, providing detailed and comprehensive metrics to facilitate advanced <b>neurotechnology research</b>.</>,
      <>Implemented a <b>machine learning pipeline</b> utilizing <b>supervised classifiers</b> to extract accurate, <b>real-time binary ON/OFF mental commands</b> directly from <b>EEG data</b>.</>,
    ],
    link: "https://ubcmint.github.io/",
    image: `${process.env.PUBLIC_URL}/mint_logo.png`,
  },
];

export default experience;
