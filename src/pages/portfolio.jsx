import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import {
    Button,
    Typography,
    Carousel,
    Card,
    CardHeader,
    CardBody,
} from '@material-tailwind/react'

const Portfolio = () => {
    var data = [
        {
            projectName: "EBR Recipe Management for Kalbe",
            company: "PT. Adaya Solusi Teknologi",
            year: "2022-2023",
            description: "We manage the data sent from an Oracle application to a RabbitMQ pool. The data then processed for reporting needs.",
            technicalStack: ".NET Core, ASP.NET Core MVC, jQuery, RabbitMQ, Dapper, Microsoft SQL Server, Microservices, GitLab",
            images: [
                {
                    src: "img/portfolios/EBR-Kalbe-Dashboard1.png",
                    description: "Dashboard 1"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Dashboard2.png",
                    description: "Dashboard 2"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Details.png",
                    description: "Detail Data"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-PrintReport.png",
                    description: "Print Report"
                }
            ]
        },
        {
            projectName: "LPG User Dashboard for Pertamina",
            company: "PT. Adaya Solusi Teknologi",
            year: "2022",
            description: "Lorem ipsum dolor sit amet",
            technicalStack: ".NET Core, ASP.NET Core MVC, jQuery, RabbitMQ, Microsoft SQL Server, Stored Procedures, Microservices, GitLab",
            images: [
                {
                    src: "img/portfolios/LPG-Pertamina-1.png",
                    description: "User Verification Step"
                }
            ]
        },
        {
            projectName: "Playbook (Main Homepage & Product)",
            company: "Playbook",
            year: "2021, 2023",
            description: "Online Course Platform",
            technicalStack: "ReactJS, ECMA Script, Bootstrap, Material UI",
            images: [
                {
                    src: "img/portfolios/Playbook-1.png",
                    description: "Home"
                },
                {
                    src: "img/portfolios/Playbook-2.png",
                    description: "Product"
                },
                {
                    src: "img/portfolios/Playbook-3.png",
                    description: "Mobile View"
                }
            ]
        },
        {
            projectName: "Alkelio Registration Wizard",
            company: "Alkelio",
            year: "2021",
            description: "Similar to LinkedIn, but this is an outsourcing platform.",
            technicalStack: "ReactJS, TypeScript, CSS, SCSS",
            images: [
                {
                    src: "img/portfolios/Alkelio-Home.png",
                    description: "Home"
                },
                {
                    src: "img/portfolios/Alkelio-SignUp-1.png",
                    description: "Sign Up 1"
                },
                {
                    src: "img/portfolios/Alkelio-SignUp-2.png",
                    description: "Sign Up 2"
                },
            ]
        }
    ]



    return (
        <>
            <Typography variant='h2' className='my-1'>PORTFOLIO</Typography>
            <Typography variant='lead' className='my-1'>Here are some projects I have completed. Some projects cannot be shown here due to the permissions.</Typography>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {data.map((project, index) => (
                    <React.Fragment key={"project-" + index}>
                        <Card className="mt-10 w-full">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-3">
                                    {project.projectName}
                                </Typography>
                                <Carousel transition={{ duration: 0.5 }} className="rounded-xl h-95">
                                    {
                                        project.images.map((projectImage, idx) => (
                                            <React.Fragment key={"project-" + index + "-image-" + idx}>

                                                <figure className="relative h-full w-full">
                                                    <img
                                                        className="w-full max-h-screen rounded-xl object-cover object-center"
                                                        src={projectImage.src}
                                                    />
                                                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                                                        <div className="w-3/4 text-center md:w-2/4">
                                                        </div>
                                                    </div>
                                                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                                        <div>
                                                            <Typography variant="h5" color="blue-gray">
                                                                {projectImage.description}
                                                            </Typography>
                                                            {/* <Typography color="gray" className="mt-2 font-normal">
                                                            {projectImage.description}
                                                        </Typography> */}
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </React.Fragment>
                                        ))
                                    }
                                </Carousel>
                                <Typography className='mt-2'>
                                    {project.description}
                                </Typography>
                                <Typography variant='small' color="gray" className="font-normal text-gray-600 mt-2">
                                    Technical Stack: {project.technicalStack}
                                </Typography>
                            </CardBody>
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Portfolio