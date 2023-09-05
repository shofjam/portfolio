import React from 'react'
import { useState } from 'react'
import profileImage from '../assets/images/profile.jpg'
import adaya from '../assets/images/companies/adaya.png'
import bjg from '../assets/images/companies/bjg.png'
import jmk from '../assets/images/companies/jmk.jpeg'
import bmg from '../assets/images/companies/bmg.jpg'
import {
    Card,
    CardHeader,
    CardBody,
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
    const [count, setCount] = useState(0)

    return (
        <>
            <Typography variant='h1' className='my-1'>ABOUT ME</Typography>
            <Typography variant='lead' className='my-1'>I love to make people happy by simplifying their jobs with my writings</Typography>
            <Card className="w-full max-w-[48rem] flex-row mt-10 mx-auto">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={profileImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <ul className='text-left'>
                        <li className='grid grid-cols-2'>
                            <Typography variant='lead'>Full Name</Typography>
                            <Typography variant='lead'>Ahmad Shofhal Jamil</Typography>
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
                            <Typography variant='lead'>Bandung, Indonesia</Typography>
                        </li>
                    </ul>
                    <Button className='mt-5'>Download CV</Button>
                </CardBody>
            </Card>
            <div className='mt-10'>
                <Typography variant="h3">
                    Experiences
                </Typography>
                <hr />
            </div>
            <Timeline className='mt-10 text-left'>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src={adaya} alt="user 1" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            March 2022 - Now
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography variant="lead" color="blue-gray">
                            Middle .NET Developer - PT. Adaya Solusi Teknologi
                        </Typography>
                        <Typography color="gray" className="font-normal text-gray-600">
                            Projects:
                        </Typography>
                        <ul className='list-disc'>
                            <li>EBR Recipe Management - Kalbe (Pharmacy Company)</li>
                            <li>Gas Station Partnership Registration - Pertamina</li>
                            <li>LPG User Dashboards - Pertamina</li>
                        </ul>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src={bjg} alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            June 2021 - March 2022
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography variant="lead" color="blue-gray">
                            Middle .NET Developer - PT. Budi Jaya Group
                        </Typography>
                        <Typography color="gray" className="font-normal text-gray-600">
                            Projects:
                        </Typography>
                        <ul className='list-disc'>
                            <li>Payment Gateway - Getz Pay Singapore</li>
                            <li>Stock Management System - Company's Product</li>
                            <li>E-Chruch - Company's Product (discontinued by the company)</li>
                        </ul>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src={jmk} alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            June 2021 - March 2022
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography variant="lead" color="blue-gray">
                            Web Developer - PT. Jaringan Mega Komputasi
                        </Typography>
                        <Typography color="gray" className="font-normal text-gray-600">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src={bmg} alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            June 2021 - March 2022
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography variant="lead" color="blue-gray">
                            Junior .NET Developer - PT. Bentang MitraGuna
                        </Typography>
                        <Typography color="gray" className="font-normal text-gray-600">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default AboutMe