export type Project = {
  title: string;
  company: string;
  year: string;
  summary: string;
  stack: string[];
  category: string;
  accent: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type Skill = {
  name: string;
  level: number;
  group: string;
};

export const projects: Project[] = [
  {
    title: "Menumiz",
    company: "Universal Apps Pty Ltd",
    year: "2026",
    summary:
      "A POS restaurant management system for managing orders, inventory, invoices, and day-to-day operations across a distributed transport network.",
    stack: ["Solid.js", "TypeScript", "Tailwind", "Kobalte", "Storybook", "Playwright", ".NET Core", "SQL Server"],
    category: "Web application",
    accent: "sunset",
  },
  {
    title: "Planally",
    company: "Planally Sdn. Bhd.",
    year: "2025-2026",
    summary:
      "A project management platform for managing projects, tasks, and team members.",
    stack: ["Angular", "TypeScript", "PrimeNG", "Storybook", "Playwright", ".NET Core", "SQL Server"],
    category: "Web application",
    accent: "blue",
  },
  {
    title: "Global Logistics Platform",
    company: "PT. Jaringan Mega Komputasi",
    year: "2024",
    summary:
      "A logistics platform for managing orders, inventory, invoices, and day-to-day operations across a distributed transport network.",
    stack: ["Blazor", "Fluent UI", "DevExpress", "PostgreSQL"],
    category: "Product engineering",
    accent: "sunset",
  },
  {
    title: "Recipe Management Platform",
    company: "PT. Adaya Solusi Teknologi",
    year: "2022–2023",
    summary:
      "A reporting ecosystem that processes Oracle data through RabbitMQ services for data management, approvals, authentication, and exports.",
    stack: [".NET Core", "RabbitMQ", "Dapper", "SQL Server"],
    category: "Microservices",
    accent: "mint",
  },
  {
    title: "Pertamina Partnership Suite",
    company: "PT. Adaya Solusi Teknologi",
    year: "2022–2023",
    summary:
      "Connected registration and verification experiences for gas station and LPG partnerships, designed for reliable field operations.",
    stack: [".NET Core", "Highcharts", "RabbitMQ", "SQL Server"],
    category: "Web application",
    accent: "violet",
  },
  {
    title: "Vetting Operations Portal",
    company: "PT. Adaya Solusi Teknologi",
    year: "2023",
    summary:
      "A vessel management portal that helps teams coordinate ship owners, registrations, and product delivery workflows.",
    stack: [".NET Core", "MVC", "Microservices", "GitLab"],
    category: "Operations",
    accent: "blue",
  },
  {
    title: "Online Course Platform",
    company: "Playbook",
    year: "2021–2023",
    summary:
      "Marketing and product experiences for an online course platform, balancing clear storytelling with conversion-focused interfaces.",
    stack: ["React", "JavaScript", "Bootstrap", "Material UI"],
    category: "Frontend",
    accent: "peach",
  },
  {
    title: "Transport Management System",
    company: "PT. Jaringan Mega Komputasi",
    year: "2019",
    summary:
      "A platform for transportation companies to manage operations, orders, and invoicing in one dependable workspace.",
    stack: ["ASP.NET", "jQuery", "PostgreSQL", "SQL Server"],
    category: "Legacy modernization",
    accent: "green",
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Universal Apps Pty Ltd",
    period: "Jan 2026 — Present",
    location: "Remote",
    summary:
      "Building Menumiz, a POS restaurant management system and improving platform reliability in close collaboration with the CTO.",
    highlights: [
      "Led the front-end redesign of the Table-Side Order module, improving the ordering workflow and user experience for restaurant staff and diners.",
      "Built a new backend API for the POS restaurant management system, improving the performance and scalability of the application.",
      "Contributed to development planning and decision-making, helping prioritize features and guide the team's technical direction and progress.",
      "Conducted code reviews for team pull requests, ensuring code quality, adherence to development standards, and alignment with business requirements.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Planally Sdn. Bhd.",
    period: "Jan 2024 — Dec 2025",
    location: "Remote",
    summary:
      "Building product features and improving platform reliability in close collaboration with the CTO.",
    highlights: [
      "Built a new backend API for the platform, improving the performance and scalability of the application.",
      "Contributed to development planning and decision-making, helping prioritize features and guide the team's technical direction and progress.",
      "Conducted code reviews for team pull requests, ensuring code quality, adherence to development standards, and alignment with business requirements.",
      "Diagnose complex bugs and improve application performance.",
      "Design features that make the platform clearer and easier to use.",
      "Build automated Playwright coverage and review pull requests.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "PT. Adaya Solusi Teknologi",
    period: "Jul 2022 — Nov 2023",
    location: "Bandung, Indonesia",
    summary:
      "Delivered responsive applications and scalable microservices for business-critical client systems.",
    highlights: [
      "Built services with efficient database interactions and reliable integrations.",
      "Mentored junior developers and supported high-quality delivery.",
      "Collaborated with project managers to turn requirements into solutions.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "PT. Budi Jaya Group",
    period: "Sep 2021 — Jul 2022",
    location: "Bandung, Indonesia",
    summary:
      "Delivered responsive applications and scalable microservices for business-critical client systems.",
    highlights: [
      "Mentored junior developers through structured guidance and code reviews.",
      "Diagnosed and resolved defects in the GetzPay payment gateway to improve transaction reliability.",
      "Implemented new features for the stock management system to support evolving operational requirements.",
    ],
  },
  {
    role: "Web Developer",
    company: "PT. Jaringan Mega Komputasi",
    period: "Aug 2017 — Aug 2021",
    location: "Bandung, Indonesia",
    summary:
      "Developed logistics, stock management, payment, and marketing applications for growing businesses.",
    highlights: [
      "Resolved production bugs and optimized application responsiveness.",
      "Created landing pages and interfaces focused on user experience.",
      "Supported discovery, requirements gathering, and technical planning.",
    ],
  },
  {
    role: "Junior .NET Developer",
    company: "PT. Bentang MitraGuna",
    period: "Aug 2016 — Jul 2017",
    location: "Jakarta, Indonesia",
    summary:
      "Created employee management features using ASP.NET Web Forms, jQuery, and SQL Server.",
    highlights: [],
  },
];

export const skills: Skill[] = [
  { name: ".NET Core", level: 92, group: "Backend" },
  { name: "React", level: 84, group: "Frontend" },
  { name: "Solid.js", level: 84, group: "Frontend" },
  { name: "Angular", level: 84, group: "Frontend" },
  { name: "Blazor", level: 84, group: "Frontend" },
  { name: "Tailwind", level: 84, group: "Frontend UI" },
  { name: "Kobalte", level: 84, group: "Frontend UI" },
  { name: "PrimeNG", level: 84, group: "Frontend UI" },
  { name: "Mudblazor", level: 84, group: "Frontend UI" },
  { name: "Bootstrap", level: 84, group: "Frontend UI" },
  { name: "Material UI", level: 84, group: "Frontend UI" },
  { name: "Microservices", level: 86, group: "Architecture" },
  { name: "PostgreSQL, SQL Server", level: 88, group: "Data" },
  { name: "Playwright", level: 76, group: "Quality" },
  { name: "Cloud migrations", level: 78, group: "Architecture" },
  { name: "Code reviews & mentoring", level: 90, group: "Leadership" },
];
