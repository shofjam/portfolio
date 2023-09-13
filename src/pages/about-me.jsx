import React from 'react'
import profileImage from '../assets/images/profile.jpg'
import { Link } from 'react-router-dom';
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
    Slider
} from '@material-tailwind/react'

const AboutMe = () => {
    var fullTimeExperiences = [
        {
            role: "Middle .NET Developer",
            companyName: "PT. Adaya Solusi Teknologi",
            companyLogo: "img/companies/adaya.png",
            yearFrom: "April 2022",
            yearTo: "Present",
            projects: [
                "EBR (Medical Formula Mangement & Reporting System) for Kalbe",
                "Gas Station Partnership Registration for Pertamina - Indonesian State Owned Corporation",
                "LPG Station Partner Dashboards for Pertamina - Indonesian State Owned Corporation"
            ]
        },
        {
            role: "Middle .NET Developer",
            companyName: "PT. Budi Jaya Group",
            companyLogo: "img/companies/bjg.png",
            yearFrom: "June 2021",
            yearTo: "March 2022",
            projects: [
                "Payment Gateway for Getz Pay Singapore",
                "Stock Management System",
                "E-Chruch (Mobile App)"
            ]
        },
        {
            role: "Web Developer",
            companyName: "PT. Jaringan Mega Komputasi",
            companyLogo: "img/companies/jmk.jpeg",
            yearFrom: "August 2017",
            yearTo: "March 2021",
            projects: [
                "Transport Management System (TMS)",
                "Speed Audit for Korlantas - Indonesian Traffic Police Dept",
                "SIMAN for Kemenkeu - Indonesian Ministry of Finance",
                "Internal homepages",
                "Internal schedulers"
            ]
        },
        {
            role: "Junior .NET Developer",
            companyName: "PT. Bentang MitraGuna",
            companyLogo: "img/companies/bmg.jpg",
            yearFrom: "February 2017",
            yearTo: "July 2017",
            projects: [
                "Employee Management System for Garuda Food"
            ]
        }
    ]

    var freelanceExperiences = [
        {
            role: "Frontend Developer",
            companyName: "Playbook Indonesia",
            companyLogo: "img/companies/playbook.png",
            yearFrom: "January 2023",
            yearTo: "April 2023",
            projects: [
                "Main website development"
            ]
        },
        {
            role: "Frontend Developer",
            companyName: "Alkelio",
            companyLogo: "img/companies/alkelio.png",
            yearFrom: "June 2021",
            yearTo: "October 2021",
            projects: [
                "Registration wizard"
            ]
        },
        {
            role: "Frontend Developer",
            companyName: "Playbook Indonesia",
            companyLogo: "img/companies/playbook.png",
            yearFrom: "November 2020",
            yearTo: "February 2021",
            projects: [
                "Main product development"
            ]
        },
    ]

    var skills = [
        {
            name: ".NET Framework/Core",
            score: 8
        },
        {
            name: "ASP.NET MVC",
            score: 8
        },
        {
            name: "ReactJS",
            score: 7
        },
        {
            name: "Bootstrap",
            score: 7
        },
        {
            name: "Angular",
            score: 6
        },
        {
            name: "jQuery",
            score: 7
        },
        {
            name: "Microsoft SQL Server",
            score: 7
        },
        {
            name: "PostgreSQL",
            score: 6
        },
        {
            name: "Microservices",
            score: 7
        },
        {
            name: "Restful API",
            score: 7
        },
        {
            name: "GIT",
            score: 7
        }
    ]

    var educations = [
        {
            school: "Bina Sarana Informatika",
            degree: "Diploma 3",
            field: "Informatics Management",
            year: "2012 - 2015",
            description: "Studied computer programming and organization management."
        }
    ]

    return (
        <>
            <Typography variant='h2' className='my-1'>ABOUT ME</Typography>
            <Typography variant='lead' className='my-1'>I love to make people happy by simplifying their jobs with my writings</Typography>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-10'>
                <img
                    src={profileImage}
                    alt="card-image"
                    className="h-80 w-80 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50 mx-auto"
                />
                <div className='py-10'>
                    <ul className='text-left'>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Full Name</Typography>
                            <Typography variant='lead'>Ahmad Shofhal Jamil</Typography>
                        </li>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Pronounce</Typography>
                            <Typography variant='lead'>He / Him</Typography>
                        </li>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Birthday</Typography>
                            <Typography variant='lead'>April 28th 1993</Typography>
                        </li>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Nationality</Typography>
                            <Typography variant='lead'>Indonesia</Typography>
                        </li>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Experience</Typography>
                            <Typography variant='lead'>6 years</Typography>
                        </li>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Address</Typography>
                            <Typography variant='lead'>Cipagalo Girang, Margasari, <br /> Buah Batu, Bandung, <br /> West Java, Indonesia</Typography>
                        </li>
                    </ul>
                    <Link to="../portfolio/docs/Resume-Ahmad_Shofhal_Jamil.pdf" target="_blank" download>
                        <Button className='mt-5'>Download My CV</Button>
                    </Link>
                </div>
            </div>
            <div className='mt-10'>
                <Typography variant="h3" className='pt-10 mb-2'>
                    Experiences
                </Typography>
                <hr />
                <div>
                    <Timeline className='mt-5 text-left'>
                        {
                            fullTimeExperiences.map((experience, idx) => (
                                <TimelineItem key={"experience-" + idx}>
                                    <TimelineConnector className='timeline-connector' />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-0 bg-amber">
                                            <Avatar size="xl" src={experience.companyLogo} alt="user 1" withBorder className='border-amber' />
                                        </TimelineIcon>
                                        <div>
                                            <Typography variant="h5">
                                                {experience.yearFrom} - {experience.yearTo}
                                            </Typography>
                                            <Typography variant="lead">
                                                {experience.role} at {experience.companyName}
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography className="font-normal">
                                            Projects:
                                        </Typography>
                                        <ul className='list-disc'>
                                            {
                                                experience.projects.map((project, idProject) => (
                                                    <li>{project}</li>
                                                ))
                                            }
                                        </ul>
                                    </TimelineBody>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </div>
                <div>
                    <Typography variant="h4" className='pt-10 mb-2 text-left'>
                        Experiences as a Freelancer
                    </Typography>
                    <Timeline className='mt-5 text-left'>
                        {
                            freelanceExperiences.map((experience, idx) => (
                                <TimelineItem key={"freelance-" + idx}>
                                    <TimelineConnector className='timeline-connector' />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-0 bg-amber">
                                            <Avatar size="xl" src={experience.companyLogo} alt="user 1" withBorder className='border-amber' />
                                        </TimelineIcon>
                                        <div>
                                            <Typography variant="h5">
                                                {experience.yearFrom} - {experience.yearTo}
                                            </Typography>
                                            <Typography variant="lead">
                                                {experience.role} at {experience.companyName}
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography className="font-normal">
                                            Projects:
                                        </Typography>
                                        <React.Fragment key={"freelance-project-" + idx}>
                                            <ul className='list-disc' >
                                                {
                                                    experience.projects.map((project, idProject) => (
                                                        <li key={"project-" + idx + "-" + idProject}>{project}</li>
                                                    ))
                                                }
                                            </ul>
                                        </React.Fragment>
                                    </TimelineBody>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </div>
            </div>
            <div className='my-10'>
                <Typography variant="h3" className='pt-10 mb-2'>
                    Skills
                </Typography>
                <hr />
                <div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-5'>
                        {
                            skills.map((skill, idx) => (
                                <Card className="mt-2 w-96 bg-amber mx-1" key={"skills-" + idx}>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 text-black">
                                            {skill.name}
                                        </Typography>
                                        <div className='flex'>
                                            <Slider className='mt-3' value={skill.score * 10} />
                                            <Typography variant='lead' className='ml-4 text-black'>
                                                {skill.score}
                                            </Typography>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <Typography variant="h3" className='pt-10 mb-2'>
                    Educations
                </Typography>
                <hr />
                {
                    educations.map((education, idx) => (
                        <div className="text-left mt-5" key={"education-" + idx}>
                            <Typography variant="h5" className="mb-2">
                                {education.degree} of {education.field}
                            </Typography>
                            <Typography variant='lead'>
                                {education.school}
                            </Typography>
                            <Typography variant='lead'>
                                {education.year}
                            </Typography>
                            <Typography>
                                {education.description}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AboutMe