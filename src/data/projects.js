const projects = [
  {
    isFavorite: true,
    name: "ThenStep",
    tech: "Next.js, Bun, OpenStreetMap, Google Maps API, Puppeteer",
    bulletPoints: [
      "Developed a map application enabling natural language search for safer, scenic, and eco-friendly routes.",
      "Integrated OpenStreetMap and Google Maps API for dynamic and interactive mapping.",
      "Scraped local data with Puppeteer to enhance route variety and community-focused features.",
    ],
    github: "https://github.com/milad-mehri/thenstep",
    video: "https://www.youtube.com/embed/mIPAovu09cM",
    link: "https://www.youtube.com/watch?v=mIPAovu09cM",
    image:  `${process.env.PUBLIC_URL}/thenstep.png`,
    badges: [
      { color: "#FF0000", text: "Video" }
    ]
  },
  {
    isFavorite: true,
    name: "Pinpoint",
    tech: "Next.js, Node.js, Tailwind CSS",
    bulletPoints: [
      "Built and deployed a viral category-guessing game with daily challenges.",
      "Serves over 100K monthly views, monetized and supported by a growing player community.",
      "Used Next.js and Node.js for smooth gameplay and backend efficiency.",
      "Styled with Tailwind CSS for a clean, responsive experience.",
    ],

    link: "https://playpinpoint.co/",
    image: `${process.env.PUBLIC_URL}/pinpoint.png`,
    badges: [
      { color: "#3b82f6", text: "100k+ views/month" },  
      { color: "#FFD586", text: "Trending" },
      { color: "#10b981", text: "Live" }  
    ],
  },
  {
    isFavorite: true,
    name: "UBC Talks",
    tech: "Typescript, Next.js, Supabase, Google, Tailwind CSS",
    bulletPoints: [
      "Reddit-esque web application for student discussion about UBC courses, built with Next.js and Supabase",
      "Authorization using OAuth2.0 flow with Google account",
      "User can pin course channels, make posts, and upvote/downvote posts when logged in",
    ],
    github: "https://github.com/alantensor/ubc-talks",
    link: "https://ubc-talks-264ncfoefq-uw.a.run.app/home",
    image: `${process.env.PUBLIC_URL}/ubctalks.png`,
    badges: [
      { color: "#10b981", text: "Live" }
    ],
  },
  {
    name: "NBA Career Length Predictor",
    link: "/nba-career-length-predictor/",
    tech: "Scikit-learn, HTML, CSS, JS",
    bulletPoints: [
      "Trained a machine learning model to estimate the career lengths of NBA players based on various statistics and trends.",
      "Achieved high predictive accuracy (MSE ≈ 1.38) and presented results through a user-friendly website",
    ],
    github: "https://github.com/milad-mehri/nba-career-length-predictor",
    image: `${process.env.PUBLIC_URL}/2544.png`,
    badges: [
      { color: "#10b981", text: "Live" }
    ],
  },
  {
    name: "SEO Snap",
    link: "https://seo-snap.vercel.app/",
    tech: "Next.js, Node.js, Tailwind CSS, Web Scraping",
    bulletPoints: [
      "Developed and deployed a web application that leverages web scraping to provide insights on optimizing search engine visibility and performance for web applications.",
      "Delivered feedback tools within the application to help users maximize website effectiveness, attracting about 100 users within the first month of deployment.",
    ],
    github: "https://github.com/milad-mehri/seo-snap",
    image: `${process.env.PUBLIC_URL}/SEO.png`,
    badges: [
      { color: "#10b981", text: "Live" }
    ],
  },
  {
    isFavorite: true,

    name: "Bongo, Discord Bot",
    link: false,
    tech: "Discord.js, Node.js, MongoDB",
    bulletPoints: [
      "Designed and developed a multiplayer economy-themed game where users interact with a Discord bot to carry out in-game transactions with the goal of gathering as many coins as possible.",
      "Gathered a user base of approximately 200,000 active users, directly managing the platform’s deployment and ongoing operational management.",
    ],
    github: "http://github.com/milad-mehri/bongo",
    image: `${process.env.PUBLIC_URL}/bongo.png`,
    badges:[
      { color: "#9333ea", text: "200K+ users" },
      { color: "#9ca3af", text: "Discontinued" },
    ]
  },
  {
    name: "Schedular, Power Up Hacks",
    link: "https://devpost.com/software/schedular",
    tech: "Node.js, EJS, CSS, HTML, Express.js, Twilio, bcrypt, MongoDB",
    bulletPoints: [
      "Constructed a user-friendly web application that allows employers and applicants to efficiently schedule interviews",
      "Integrated tools like MongoDB to store user information, bcrypt for a login system, and Twilio to send reminders once an interview is booked",
    ],
    github: "https://github.com/milad-mehri/Schedular",
    image: `${process.env.PUBLIC_URL}/mlh.png`,
    badges: [
      { color: "#facc15", text: "Hackathon Winner" },
    ],
  },
  {
    name: "Shift, Chat Room",
    link: false,
    tech: "EJS, CSS, HTML, JS, Express.js, Node.js, MongoDB, Socket.io",
    bulletPoints: [
      "Developed a temporary chat room web application, where users can enter a unique 10-digit code to get access to a live chat room that can host an unlimited number of users",
      "Wrote a script to make all messages and user information disappear after 24 hours",
      "Used Socket.io to enable communication among users, and MongoDB to store them",
    ],
    github: "https://github.com/milad-mehri/shift",
    image: `${process.env.PUBLIC_URL}/shift.png`,
  },
  {
    name: "RegexTester",
    link: "/RegexTester",
    tech: "HTML, CSS, JS",
    bulletPoints: [
      "Designed and implemented a web application that helps users visualise and debug regular expressions in an easy to understand and convenient manner",
      "Allow users to input regular expressions as well as text, then the elements in the text that correspond to the regular expression are highlighted",
    ],
    github: "https://github.com/milad-mehri/shift",
    image: `${process.env.PUBLIC_URL}/rtlogo.png`,
    badges: [
      { color: "#10b981", text: "Live" }
    ],
  },
];

export default projects;
