/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thomas Hopkins",
  title: "Hello, I'm Thomas",
  subTitle: emoji(
    "An experienced SEO with a passion for coding, I leverage my expertise to drive organic traffic growth and enhance brand visibility for organizations big and small. With a focus on strategic SEO initiatives, data analysis, technical optimizations and internal tool development, I develop and implement innovative strategies to improve organic visbility and achieve measurable results."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1C1C4GGCWfHjfj39qfwsJeRbsbbba0WWJ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thomashopkins96",
  linkedin: "https://www.linkedin.com/in/whopkinsthomas/",
  gmail: "whopkinsthomas@gmail.com",
  facebook: "https://www.facebook.com/whopkinsthomas/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE, DATA-DRIVEN SEO WITH CODING CHOPS",
  skills: [
    emoji(
      "⚡ Extensive big data analysis that incorporates machine learning, AI, and NLP workflows"
    ),
    emoji("⚡ Develop internal tools that enhance visibility of data that many third-part applications don't provide"),
    emoji(
      "⚡ Plan, implement, and execute on white-hat SEO initiatives that deliver value for years to come"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress-simple"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "magento",
      fontAwesomeClassname: "fab fa-magento"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal"
    },
    {
      skillName: "elementor",
      fontAwesomeClassname: "fab fa-elementor"
    },
    {
      skillName: "google search\nconsole",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "google analytics",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "screaming frog",
      fontAwesomeClassname: "fas fa-frog"
    },
    {
      skillName: "semrush",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "inlinks",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Texas",
      logo: require("./assets/images/seal_of_university_of_north_texas.png"),
      subHeader: "Bachelor of Science in Digital Retailing, Minor in Consumer Experience Management",
      duration: "September 2014 - December 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "GDM SEO Specialist",
      company: "Gartner, Inc.",
      companylogo: require("./assets/images/gartnerLogo.png"),
      date: "November 2021 – January 2024",
      desc: "SEO Specialist for Capterra, a software recommendation site with 800K-1M monthly visitors.",
      descBullets: [
        "Orchestrated a successful reversal of organic traffic decline for Capterra, restoring previous traffic levels and achieving up to a 25% increase post-recovery.",
        "Conducted a comprehensive demand analysis utilizing approximately 70,000 queries to project total revenue for organic results, leveraging software product names and prevalent modifiers.",
        "Created ML-based workflow that assisted in analyzing the relationship between content, topics, and subtopics.",
        "Engineered a Google Search Console API application, enabling seamless organic search data retrieval for reporting and analysis.",
        "Devised automated workflows for SERP competitor content analysis, leveraging machine learning technologies for enhanced insights.",
      ]
    },
    {
      role: "CashForCars.com SEO Content Strategist",
      company: "Copart, Inc.",
      companylogo: require("./assets/images/copartLogo.png"),
      date: "September 2019 – November 2021",
      desc: "SEO Content Strategist in charged of CashForCars.com entire SEO strategy, including on-page, off-page, local, and technical optimization.",
      descBullets: [
        "Doubled organic traffic for CashForCars.com within 9 months, reaching 40,000 monthly visitors, while increasing time-on-page by 70%",
        "Directed and executed local SEO initiatives for nearly 200 locations, implementing an impactful SMS campaign that boosted Google reviews by 400%.",
        "Spearheaded a comprehensive data push to local aggregators, resulting in a 200,000+ increase in directory appearances and a 600% surge in local SEO query visibility.",
        "Formulated and executed a robust content strategy, elevating CashForCars.com's keyword rankings by over 400%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/midnightMushroomCoLogo.png"),
      projectName: "Midnight Mushroom Co.: Schema Automation and Optimization for Google Merchant Center",
      projectDesc: "Automated Schema.org Markup for all products and product variants across the site enabling Google Merchant Center to more accurately parse product data. This solved many issues the company had with Merchant Center showing inaccurate pricing, variants, sizes, among many other attributes.",
      footerLink: [
        { 
          name: "Visit Website",
          url: "https://midnightmushroomco.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle:
    "Certifications I have received",

  achievementsCards: [
    {
      title: "GA4 Certification",
      subtitle:
        "Certification for Google Analytics",
      image: require("./assets/images/googleAnalytics.png"),
      imageAlt: "Google Analytics Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://skillshop.credential.net/3129b81e-3817-42a7-adac-9536f485b317"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (682) 230-4572",
  email_address: "whopkinsthomas@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
