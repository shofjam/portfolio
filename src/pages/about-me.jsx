import profileImage from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Card,
  CardBody,
  Slider,
} from "@material-tailwind/react";

const AboutMe = () => {
  var fullTimeExperiences = [
    {
      role: "Senior Full-Stack Developer",
      companyName: "Planally Sdn. Bhd.",
      companyLogo: "img/companies/planally.png",
      location: "Remote",
      yearFrom: "January 2024",
      yearTo: "Present",
      roleDescriptions: [
        "Diagnose and resolve complex bugs to ensure seamless application performance and user experience.",
        "Design and implement new features to enhance the functionality and usability of the platform.",
        "Refactor legacy code for better readability, maintainability, and performance optimization.",
        "Develop and maintain automated test suites using Playwright, improving code quality and reducing manual testing efforts.",
        "Conduct thorough code reviews on pull requests to maintain coding standards and ensure high-quality deliverables.",
        "Provide daily progress updates and collaborate closely with the CTO to align development tasks with business goals.",
      ],
    },
    {
      role: "Full-Stack Developer",
      companyName: "PT. Adaya Solusi Teknologi",
      companyLogo: "img/companies/adaya.png",
      location: "Bandung, Indonesia",
      yearFrom: "September 2021",
      yearTo: "November 2023",
      roleDescriptions: [
        "Developed dynamic and responsive web applications tailored to client requirements.",
        "Built and maintained scalable microservices with efficient database interactions.",
        "Provided debugging and technical support to ensure timely issue resolution and code quality improvements.",
        "Mentored and guided junior developers, fostering skill growth and high-quality code contributions.",
        "Collaborated with the project manager to design solutions, analyze problems, and implement client-requested features and enhancements.",
        "Managed code repositories and branches, ensuring streamlined version control and effective team collaboration.",
      ],
    },
    {
      role: "Web Developer",
      companyName: "PT. Jaringan Mega Komputasi",
      companyLogo: "img/companies/jmk.jpeg",
      location: "Bandung, Indonesia",
      yearFrom: "August 2017",
      yearTo: "August 2021",
      roleDescriptions: [
        "Developed and maintained a logistics platform, stock management system, payment gateway, and various other applications, ensuring optimal performance, scalability, and user experience.",
        "Resolved bugs and optimized application performance, reducing load times and improving responsiveness.",
        "Designed and implemented responsive and visually appealing landing pages to enhance client engagement and user experience.",
        "Collaborated with clients and supported the project manager in analyzing problems and gathering requirements to ensure solutions aligned with client needs and business goals.",
        "Mentored and supported junior developers, fostering skill growth and ensuring quality code contributions.",
      ],
    },
    {
      role: "Junior .NET Developer",
      companyName: "PT. Bentang MitraGuna",
      companyLogo: "img/companies/bmg.jpg",
      location: "Jakarta, Indonesia",
      yearFrom: "August 2016",
      yearTo: "July 2017",
      roleDescriptions: [
        "Developed employee management platform using ASP Web Forms, jQuery and Microsoft SQL Server Stored Procedures.",
      ],
    },
  ];

  var skills = [
    {
      name: ".NET Framework/Core",
      score: 8,
    },
    {
      name: "ASP.NET MVC",
      score: 8,
    },
    {
      name: "Blazor",
      score: 7,
    },
    {
      name: "Angular",
      score: 7,
    },
    {
      name: "ReactJS",
      score: 6,
    },
    {
      name: "Bootstrap",
      score: 7,
    },
    {
      name: "jQuery",
      score: 7,
    },
    {
      name: "Microsoft SQL Server",
      score: 7,
    },
    {
      name: "PostgreSQL",
      score: 6,
    },
    {
      name: "Microservices",
      score: 7,
    },
    {
      name: "Restful API",
      score: 7,
    },
    {
      name: "GIT",
      score: 7,
    },
  ];

  var educations = [
    {
      school: "Bina Sarana Informatika",
      degree: "Diploma 3",
      field: "Information Management",
      year: "2012 - 2015",
      description: "Studied computer programming and organization management.",
    },
  ];

  return (
    <>
      <Typography variant="h2" className="my-1">
        ABOUT ME
      </Typography>
      <Typography variant="lead" className="my-1">
        I love to make people happy by simplifying their jobs with my writings
      </Typography>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-10">
        <img
          src={profileImage}
          alt="card-image"
          className="h-80 w-80 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50 mx-auto"
        />
        <div className="py-10">
          <ul className="text-left">
            <li className="grid grid-cols-2">
              <Typography variant="lead">Full Name</Typography>
              <Typography variant="lead">Ahmad Shofhal Jamil</Typography>
            </li>
            <li className="grid grid-cols-2">
              <Typography variant="lead">Birthday</Typography>
              <Typography variant="lead">April 28th 1993</Typography>
            </li>
            <li className="grid grid-cols-2">
              <Typography variant="lead">Nationality</Typography>
              <Typography variant="lead">Indonesia</Typography>
            </li>
            <li className="grid grid-cols-2">
              <Typography variant="lead">Experience</Typography>
              <Typography variant="lead">8 years</Typography>
            </li>
            <li className="grid grid-cols-2">
              <Typography variant="lead">Address</Typography>
              <Typography variant="lead">
                Sukasari, Sumedang, <br /> West Java, Indonesia
              </Typography>
            </li>
          </ul>
          <Link
            to="../portfolio/docs/Resume-Ahmad_Shofhal_Jamil.pdf"
            target="_blank"
            download
          >
            <Button className="mt-5">Download My Resume</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h3" className="pt-10 mb-2">
          Experiences
        </Typography>
        <hr />
        <div>
          <Timeline className="mt-5 text-left">
            {fullTimeExperiences.map((experience, idx) => (
              <TimelineItem key={"experience-" + idx}>
                <TimelineConnector className="timeline-connector" />
                <TimelineHeader>
                  <TimelineIcon className="p-0 bg-amber">
                    <Avatar
                      size="xl"
                      src={experience.companyLogo}
                      alt="user 1"
                      withBorder
                      className="border-amber"
                    />
                  </TimelineIcon>
                  <div>
                    <Typography variant="h5">{experience.role}</Typography>
                    <Typography variant="lead">
                      {experience.companyName}
                    </Typography>
                    <Typography variant="lead">
                      {experience.yearFrom} - {experience.yearTo}
                    </Typography>
                    <Typography variant="lead">
                      {experience.location}
                    </Typography>
                  </div>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography className="font-normal">
                    Role Descriptions:
                  </Typography>
                  <ul className="list-disc">
                    {experience.roleDescriptions.map(
                      (roleDescriptions, idx) => (
                        <li
                          key={"experience-" + idx + "-roleDescriptions-" + idx}
                        >
                          {roleDescriptions}
                        </li>
                      )
                    )}
                  </ul>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <div className="my-10">
        <Typography variant="h3" className="pt-10 mb-2">
          Skills
        </Typography>
        <hr />
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-5">
            {skills.map((skill, idx) => (
              <Card
                className="mt-2 w-96 bg-gray-900 mx-1"
                key={"skills-" + idx}
              >
                <CardBody>
                  <Typography variant="h5" className="mb-2 text-white">
                    {skill.name}
                  </Typography>
                  <div className="flex">
                    <Slider
                      className="mt-3"
                      color="amber"
                      value={skill.score * 10}
                    />
                    <Typography variant="lead" className="ml-4 text-white">
                      {skill.score}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10">
        <Typography variant="h3" className="pt-10 mb-2">
          Educations
        </Typography>
        <hr />
        {educations.map((education, idx) => (
          <div className="text-left mt-5" key={"education-" + idx}>
            <Typography variant="h5" className="mb-2">
              {education.degree} of {education.field}
            </Typography>
            <Typography variant="lead">{education.school}</Typography>
            <Typography variant="lead">{education.year}</Typography>
            <Typography>{education.description}</Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutMe;
