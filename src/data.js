// Centralized Portfolio Data
// Modify this file to update the text, projects, hackathons, book details, and images throughout the website.


export const personalInfo = {
  name: "Mohit Mudgil",
  title: "Software Engineer | Full Stack Developer",
  subTitle: "Building high-performance, secure, and scalable web solutions",
  location: "Panipat, Haryana, India",
  email: "mohittt0011@gmail.com",
  phone: "+91 8168884901",
  github: "https://github.com/mohit4901",
  linkedin: "https://www.linkedin.com/in/mohitmudgil0011/",
  resumeUrl: "https://drive.google.com/file/d/1NVQausGXo-JKYo6NpIWxiTDN63vGJQ-G/view?usp=drive_link",
  resumeImage: "",
};

export const aboutMe = {
  tagline: "Engineering Scalable MERN & AI Systems",
  paragraphs: [
    "I am a Computer Science undergraduate specializing in Full Stack Web Development and scalable backend architectures. I have a passion for building production-grade MERN applications, API performance optimization, and robust security systems.",
    "With a strong interest in AI technologies, I integrate OpenAI, Gemini, and Hugging Face APIs to develop cognitive platforms, RAG-based systems, and agent evaluation tools. I have engineered systems that handle over 6,000+ monthly active users.",
    "Driven by the thrill of problem-solving, I regularly participate in national and international hackathons, where my teams have consistently finished in top spots. I also enjoy sharing knowledge and have written a technical guide book to help aspiring developers master key engineering concepts."
  ]
};

export const techStack = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vite", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend & Payments",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 92 },
      { name: "REST APIs", level: 95 },
      { name: "JWT Auth", level: 90 },
      { name: "WebSockets", level: 80 },
      { name: "Razorpay / Stripe", level: 88 }
    ]
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Supabase", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 88 },
    ]
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Gemini API", level: 85 },
      { name: "Hugging Face", level: 75 },
      { name: "OCR (Tesseract)", level: 80 },
      { name: "RAG Systems", level: 75 }
    ]
  }
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "GoGlobalways",
    period: "May 25, 2026 – June 15, 2026 (3 Weeks)",
    type: "Unpaid Internship",
    description: "Contributed to building full-stack academic and dashboard systems.",
    bulletPoints: [
      "Built and maintained core components of the BAIO website.",
      "Developed fully responsive Student, School, and Admin dashboards.",
      "Implemented secure user registration, multi-factor login systems, and JWT authentication.",
      "Integrated secure payment gateways and backend RESTful APIs.",
      "Ensured mobile, tablet, and desktop responsive layouts across all modules."
    ],
    offerLetterPdf: new URL('./assets/Mohit_Mudgil_Internship_Offer_Letter.pdf', import.meta.url).href,
    offerLetterImage: new URL('./assets/internship.png', import.meta.url).href,
  }
];

export const projects = [
  {
    id: 1,
    title: "TRIAGE-X",
    subtitle: "AI SRE Incident Simulation Platform",
    description: "A deterministic Site Reliability Engineering (SRE) benchmark featuring graded incident environments for evaluation of AI agents.",
    bulletPoints: [
      "Built a deterministic SRE benchmark with 3 graded incident environments and 6+ infrastructure actions for reproducible AI agent evaluation.",
      "Engineered a multi-factor scoring engine using 5 evaluation metrics including SLA stability, budget utilization, and root-cause resolution."
    ],
    tech: ["Node.js", "React.js", "Docker", "OpenAI API", "OpenEnv"],
    githubUrl: "https://github.com/mohit4901/TriEdge-X",
  },
  {
    id: 2,
    title: "PyQ Platform",
    subtitle: "Automated Academic Extraction Engine",
    description: "An intelligent OCR-based search engine that processes, indexes, and queries historical university question papers with extremely low latency.",
    bulletPoints: [
      "Processed and indexed 10,264+ university papers using OCR-based ETL pipelines built with Tesseract.js, PDF.js, and Cheerio.",
      "Achieved <50ms search latency and 100% coverage of DCRUST sessions since 2018 through indexed MongoDB query optimization."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Tesseract.js", "PDF.js"],
    githubUrl: "https://github.com/mohit4901/examsbydcrust",
    liveUrl: "https://examsbydcrust-omega.vercel.app",
  },
  {
    id: 3,
    title: "Soni Moni Royal Collection",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description: "A secure MERN-based shopping solution featuring twin payment gateways, live order tracking, and high scalability.",
    bulletPoints: [
      "Integrated 2 payment gateways (Stripe + Razorpay) with secure transaction verification and real-time order lifecycle tracking.",
      "Built a scalable MERN architecture with JWT-protected admin APIs, Cloudinary CDN delivery, and responsive multi-device storefront handling 6k+ monthly users."
    ],
    tech: ["MERN Stack", "Stripe", "Razorpay", "Cloudinary", "JWT"],
    githubUrl: "https://github.com/mohit4901/soni-moni",
    liveUrl: "https://monisoniroyalcollection.in",
  },
  {
    id: 4,
    title: "Wobblix",
    subtitle: "Streetwear Commerce Ecosystem",
    description: "A modern, secure commerce application focused on custom fashion retail, highly optimized for search discovery.",
    bulletPoints: [
      "Secured payment workflows using Razorpay HMAC SHA256 verification, JWT authentication, and protection against 11+ web vulnerabilities via Helmet.js.",
      "Improved storefront discoverability with dynamic SEO metadata rendering and optimized media delivery using Cloudinary CDN integration."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Razorpay", "Helmet.js"],
    githubUrl: "https://github.com/mohit4901/wobblix",
    liveUrl: "https://www.wobblixclothing.in",
  },
  {
    id: 5,
    title: "IncidentMind",
    subtitle: "Neural SRE & Autonomous Troubleshooting Agent",
    description: "An autonomous agent built using Group Relative Policy Optimization (GRPO) that evaluates cluster states to diagnose and repair Kubernetes failures.",
    bulletPoints: [
      "Optimized a local 1.5B base model via GRPO with a multi-objective reward function to establish strict diagnostic checks before system remedies are run.",
      "Engineered the OpenEnv Gymnasium interface simulating OOM cascades, connection saturation, and partitions, achieving an 85% success rate in autonomous triage."
    ],
    tech: ["Qwen-2.5-1.5B", "GRPO", "PyTorch", "Transformers", "TRL", "OpenEnv"],
    githubUrl: "https://github.com/mohit4901/incidentmind",
  },
  {
    id: 6,
    title: "VendorBridge",
    subtitle: "Procurement & Vendor Management ERP",
    description: "An enterprise-grade ERP designed to digitize and automate the complete source-to-pay lifecycle with role-based dashboards.",
    bulletPoints: [
      "Built a secure MERN stack portal featuring custom RFQ builder, unit-price auto-compare matrix, and threshold-based serial manager approval flows.",
      "Optimized procurement administrative hours by 60% through automated RFQ to Purchase Order and Invoice generation with full system audit activity logs."
    ],
    tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/mohit4901/odoo_VendorBridge",
  }
];

export const hackathons = [
  {
    title: "Meta × Hugging Face × OpenEnv × PyTorch",
    achievement: "Finalist – Top 2.5%",
    scope: "Global · 71k+ Developers",
    year: "2026",
    description: "Demonstrated advanced AI agent frameworks and SRE problem solving under tight evaluation standards among 71,000+ global developers.",
    photo: new URL('./assets/meta.jpeg', import.meta.url).href,
  },
  {
    title: "Devcation Delhi (IIT Delhi)",
    achievement: "3rd Place",
    scope: "National",
    year: "2026",
    description: "Engineered innovative solutions tackling major real-world challenges at a top-tier Indian institute hackathon hosted at IIT Delhi.",
    photo: new URL('./assets/devcation.jpeg', import.meta.url).href,
  },
  {
    title: "SSH 1.0 Hackathon",
    achievement: "2nd Position",
    scope: "Satyaansh SoftTech Pvt. Ltd.",
    year: "2026",
    description: "Recognized for exceptional engineering design and code quality. Competed in a corporate-sponsored hackathon and secured runner-up position.",
    photo: new URL('./assets/ssh.jpeg', import.meta.url).href,
  },
  {
    title: "InnovAItion Hackathon",
    achievement: "3rd Runner-Up",
    scope: "Intuitive.ai",
    year: "2026",
    description: "Created robust AI-powered applications showcasing machine learning and smart analytics capabilities.",
    photo: new URL('./assets/innovaition.jpeg', import.meta.url).href,
  },
  {
    title: "HackRust",
    achievement: "Organizer",
    scope: "Open Source Rust Hackathon",
    year: "2026",
    description: "Organized and managed the open source Rust community hackathon, coordinating sessions and mentoring student developers.",
    photo: new URL('./assets/hackrust.jpeg', import.meta.url).href,
  },
  {
    title: "Google Student Ambassador Programme (GSA)",
    achievement: "Student Ambassador",
    scope: "Google On Campus",
    year: "May - Sept 2026",
    description: "Represented Google developer technologies on campus, organizing hackathons, study jams, and technical workshops for student developers.",
    photo: new URL('./assets/gsa.jpeg', import.meta.url).href,
  },
  {
    title: "RIFT",
    achievement: "Participant",
    scope: "RIFT Competition",
    year: "2026",
    description: "Competed in the RIFT hackathon developing creative solutions under time constraints.",
    photo: new URL('./assets/rift.jpeg', import.meta.url).href,
  },
  {
    title: "PIET Event",
    achievement: "2nd Runner-Up",
    scope: "PIET",
    year: "2026",
    description: "Secured 2nd Runner-Up position in the technical event at PIET, showcasing scalable engineering and problem-solving skills.",
    photo: new URL('./assets/piet.jpeg', import.meta.url).href,
  },
];

export const bookDetails = {
  title: "The Love Story",
  subtitle: "A Journey of Love, Dreams & Emotions",
  description:
    "A heartfelt story that explores love, friendship, dreams, heartbreak, and the beautiful emotions that shape our lives.",
  pdfUrl: "https://drive.google.com/file/d/19-BO24LZr6qi5cTsfIwQ_EIauLae5T5m/view?usp=drive_link",
  coverImage: ""
};

export const hobbies = [
  {
    name: "Writing & Content Creation",
    description: "Writing comprehensive technical books, guides, and articles to simplify full-stack software development topics for others.",
    icon: "BookOpen"
  },
  {
    name: "Competitive Coding",
    description: "Solving complex algorithmic puzzles and participating in coding contests to sharpen data structure knowledge.",
    icon: "Code"
  },
  {
    name: "AI & RAG Experimentation",
    description: "Building custom retrieval pipelines and playing with open-weight models to automate everyday engineering tasks.",
    icon: "Cpu"
  },
  {
    name: "Mentorship & GDG",
    description: "Serving as the Web Development Lead at GDG On Campus, hosting workshops, and mentoring juniors in building projects.",
    icon: "Users"
  }
];

export const education = {
  institution: "Deenbandhu Chhotu Ram University of Science and Technology, Haryana",
  period: "2024 – 2028",
  degree: "Bachelor of Technology in Computer Science Engineering",
  cgpa: "7.4 / 10 (Till 3rd Semester)"
};
