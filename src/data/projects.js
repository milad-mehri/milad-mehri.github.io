const projects = [
  {
    name: "Pinpoint",
    tech: "Next.js, Node.js, Tailwind CSS",
    bulletPoints: [
      "Built and deployed a fast-paced category-guessing game with daily challenges.",
      "Used Next.js and Node.js for smooth gameplay and efficient backend.",
      "Styled with Tailwind CSS for a clean, interactive user experience.",
    ],
    github: "https://github.com/milad-mehri/pinpoint/",

    link: "https://milad-mehri.github.io/pinpoint/",
    image: `${process.env.PUBLIC_URL}/placeholder-300x300.png`,
  },
  {
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
  },
  {
    name: "NBA Career Length Predictor",
    link: "/nba-career-length-predictor/",
    tech: "Scikit-learn, HTML, CSS, JS",
    bulletPoints: [
      "Developed a predictive model to estimate the career lengths of NBA players based on various statistics and trends",
      "Gathered data, built the model, and presented results on a user-friendly website.",
      "Achieved high predictive accuracy (MSE ≈ 1.38), significantly improving the models reliability",
    ],
    github: "https://github.com/milad-mehri/nba-career-length-predictor",
    image: `${process.env.PUBLIC_URL}/2544.png`,
  },
  {
    name: "SEO Snap",
    link: "https://seo-snap.vercel.app/",
    tech: "Next.js, Node.js, Tailwind CSS, Web Scraping",
    bulletPoints: [
      "Provided insights regarding SEO for websites through web scraping techniques",
      "Helps maximize website visibility and performance in search engine results",
    ],
    github: "https://github.com/milad-mehri/seo-snap",
    image: `${process.env.PUBLIC_URL}/SEO.png`,
  },
  {
    name: "Bongo, Discord Bot",
    link: false,
    tech: "Discord.js, Node.js, MongoDB",
    bulletPoints: [
      "Built, deployed, and managed a multiplayer economy themed application that consisted of about 200 000 users",
      "Users interacted with a discord bot to carry out in-game transactions to try and gather as many coins as possible",
      "Called the Discord API using the discord.js module, in which I received commands from users and sent responses",
    ],
    github: "http://github.com/milad-mehri/bongo",
    image: `${process.env.PUBLIC_URL}/bongo.png`,
  },
  {
    name: "Schedular, Power Up Hacks Hackathon Winner",
    link: "https://devpost.com/software/schedular",
    tech: "Node.js, EJS, CSS, HTML, Express.js, Twilio, bcrypt, MongoDB",
    bulletPoints: [
      "Constructed a user-friendly web application that allows employers and applicants to efficiently schedule interviews",
      "Integrated tools like MongoDB to store user information, bcrypt for a login system, and Twilio to send reminders once an interview is booked",
    ],
    github: "https://github.com/milad-mehri/Schedular",
    image: `${process.env.PUBLIC_URL}/mlh.png`,
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
  },
];

export default projects;
