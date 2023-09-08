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
} from '@material-tailwind/react'

const AboutMe = () => {
    var data = [
        {
            role: "Middle .NET Developer",
            companyName: "PT. Adaya Solusi Teknologi",
            companyLogo: "img/companies/adaya.png",
            yearFrom: "April 2022",
            yearTo: "Present",
            projects: [
                "EBR Recipe Management - Kalbe (Pharmacy Company)",
                "Gas Station Partnership Registration - Pertamina",
                "LPG User Dashboards - Pertamina"
            ]
        },
        {
            role: "Frontend Developer (Freelance)",
            companyName: "Playbook Indonesia",
            companyLogo: "img/companies/playbook.png",
            yearFrom: "Jan 2023",
            yearTo: "Apr 2023",
            projects: [
                "Main website development"
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
                "E-Chruch (Mobile App) (discontinued by the company)"
            ]
        },
        {
            role: "Frontend Developer (Freelance)",
            companyName: "Alkelio",
            companyLogo: "img/companies/alkelio.png",
            yearFrom: "Jun 2021",
            yearTo: "Oct 2021",
            projects: [
                "Registration wizard"
            ]
        },
        {
            role: "Web Developer",
            companyName: "PT. Jaringan Mega Komputasi",
            companyLogo: "img/companies/jmk.jpeg",
            yearFrom: "June 2021",
            yearTo: "March 2022",
            projects: [
                "Transport Management System (TMS)",
                "Speed Audit for Korlantas",
                "SIMAN for Indonesian Ministry of Finance",
                "Internal homepages",
                "Internal schedulers"
            ]
        },
        {
            role: "Frontend Developer (Freelance)",
            companyName: "Playbook Indonesia",
            companyLogo: "img/companies/playbook.png",
            yearFrom: "Nov 2020",
            yearTo: "Feb 2021",
            projects: [
                "Main product development"
            ]
        },
        {
            role: "Middle .NET Developer",
            companyName: "PT. Budi Jaya Group",
            companyLogo: "img/companies/bjg.png",
            yearFrom: "Feb 2017",
            yearTo: "Jul 2017",
            projects: [
                "Employee Management System for Garuda Food"
            ]
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
                    className="h-80 w-80 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50"
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
                    <Link to="/docs/Resume-Ahmad_Shofhal_Jamil.pdf" target="_blank" download>
                        <Button className='mt-5'>Download My CV</Button>
                    </Link>
                </div>
            </div>
            <div className='mt-10'>
                <Typography variant="h3">
                    Experiences
                </Typography>
                <hr />
                <div>
                    <Timeline className='mt-10 text-left'>
                        {
                            data.map((experience, expIdx) => (
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-0">
                                            <Avatar size="sm" src={experience.companyLogo} alt="user 1" withBorder />
                                        </TimelineIcon>
                                        <Typography variant="h5">
                                            {experience.yearFrom} - {experience.yearTo}
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography variant="lead">
                                            {experience.role} at {experience.companyName}
                                        </Typography>
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
            </div>
        </>
    )
}

export default AboutMe