import React from 'react'
import {
    Button,
    Typography,
    Carousel,
    Card,
    CardBody,
    Dialog,
    DialogHeader,
    DialogBody} from '@material-tailwind/react'

const Portfolio = () => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogImage, setDialogImage] = React.useState({});
    function handleOpenDialog(img) {
        setDialogImage(img);
        setOpenDialog(() => !openDialog);
    };

    var data = [
        {
            projectName: "TMS Global Logistics ID",
            company: "PT. Jaringan Mega Komputasi",
            year: "2024",
            description: "Logistic Platform",
            technicalStack: "Blazor, Fluent UI, DevExpress, PostgreSQL",
            images: [
                {
                    src: "img/portfolios/TMS-Blazor-1.png",
                    description: "Login"
                },
                {
                    src: "img/portfolios/TMS-Blazor-2.png",
                    description: "Create Order"
                },
                {
                    src: "img/portfolios/TMS-Blazor-3.png",
                    description: "Add Item Popup"
                },
            ]
        },
        {
            projectName: "EBR Recipe Management for Kalbe",
            company: "PT. Adaya Solusi Teknologi",
            year: "2022-2023",
            description: "We manage the data sent from an Oracle application to a RabbitMQ pool. The data then generated and processed for reporting needs. There are 9 services in total, including data generation, data management, reporting, authentication, and files.",
            technicalStack: ".NET Core, ASP.NET Core MVC, jQuery, RabbitMQ, Dapper, Microsoft SQL Server, Microservices, GitLab",
            images: [
                {
                    src: "img/portfolios/EBR-Kalbe-Dashboard1.png",
                    description: "Dashboard"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Dashboard2.png",
                    description: "Dashboard"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Details.png",
                    description: "Data Detail"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-ExportToExcel.png",
                    description: "Export to Excel"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-PrintReport.png",
                    description: "Print Report"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-QRCode.png",
                    description: "QR Code Generation"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Dynamic-Approvals.png",
                    description: "Dynamic Approvals"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Tables.png",
                    description: "Table"
                },
                {
                    src: "img/portfolios/EBR-Kalbe-Master-Shift.png",
                    description: "Master Shift"
                }
            ]
        },
        {
            projectName: "LPG and Gas Station Partnership for Pertamina",
            company: "PT. Adaya Solusi Teknologi",
            year: "2022",
            description: "This web application handles partnership registration for gas stations and LPG station dasboard for Pertamina.",
            technicalStack: ".NET Core, ASP.NET Core MVC, Highcharts, jQuery, RabbitMQ, Microsoft SQL Server, Stored Procedures, Microservices, GitLab",
            images: [
                {
                    src: "img/portfolios/Pertamina-Dashboard.png",
                    description: "Dashboard"
                },
                {
                    src: "img/portfolios/Pertamina-Dashboard2.png",
                    description: "Dashboard"
                },
                {
                    src: "img/portfolios/Pertamina-LPG-User-Registration.png",
                    description: "LPG Registration"
                },
                {
                    src: "img/portfolios/Pertamina-LPG-User-Registration2.png",
                    description: "LPG Registration"
                },
                {
                    src: "img/portfolios/Pertamina-LPG-User-Verification.png",
                    description: "LPG User Verification"
                },
                {
                    src: "img/portfolios/Pertamina-SPBU-Registration.png",
                    description: "SPBU Registration"
                }
            ]
        },
        {
            projectName: "Vetting for Pertamina",
            company: "PT. Adaya Solusi Teknologi",
            year: "2023",
            description: "This web application handles ships or vessels for delivering products owned by Pertamina.",
            technicalStack: ".NET Core, ASP.NET Core MVC, Highcharts, jQuery, RabbitMQ, Microsoft SQL Server, Stored Procedures, Microservices, GitLab",
            images: [
                {
                    src: "img/portfolios/Pertamina-Vetting-Home.png",
                    description: "Home"
                },
                {
                    src: "img/portfolios/Pertamina-Vetting-Ship-Owner.png",
                    description: "Ship Owner"
                },
                {
                    src: "img/portfolios/Pertamina-Vetting-User-Registration.png",
                    description: "User Registration"
                },
                {
                    src: "img/portfolios/Pertamina-Vetting-User-Registration2.png",
                    description: "User Registration"
                },
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
        },
        {
            projectName: "Transport Management System",
            company: "PT. Jaringan Mega Komputasi",
            year: "2019",
            description: "A Platform to manage the system in transportation companies",
            technicalStack: "DevExpress, ASP.NET, jQuery, PostgreSQL, SQL Server",
            images: [
                {
                    src: "img/portfolios/TMS-1.png",
                    description: "Dashboard"
                },
                {
                    src: "img/portfolios/TMS-2.png",
                    description: "Create Order"
                },
                {
                    src: "img/portfolios/TMS-3.png",
                    description: "Create Invoice"
                },
            ]
        },
    ]

    var sampleCodes = [
        {
            platform: "ASP.NET MVC",
            images: 
            [
                "img/portfolios/SampleCodes-ASPNET-Model.png",
                "img/portfolios/SampleCodes-ASPNET-View.png",
                "img/portfolios/SampleCodes-ASPNET-Controller.png",
                "img/portfolios/SampleCodes-ASPNET-Extensions.png"
            ]
        },
        {
            platform: "ReactJS",
            images: 
            [
                "img/portfolios/SampleCodes-ReactJS1.png",
            ]
        },
        {
            platform: "CSS",
            images: 
            [
                "img/portfolios/SampleCodes-CSS.png",
            ]
        },
    ]

    return (
        <>
            <Typography variant='h2' className='my-1'>PORTFOLIO</Typography>
            <Typography variant='lead' className='my-1'>Here are some projects I have completed. Some projects cannot be shown here due to the permissions.</Typography>
            <div className='grid grid-cols-1 gap-4'>
                {data.map((project, index) => (
                    <React.Fragment key={"project-" + index}>
                        <Card className="mt-10 w-full">
                            <CardBody>
                                <Typography variant="h5" className="mb-3">
                                    {project.projectName}
                                </Typography>
                                <Carousel transition={{ duration: 0.5 }} className="rounded-xl h-95 cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                                    {
                                        project.images.map((projectImage, idx) => (
                                            <React.Fragment key={"project-" + index + "-image-" + idx}>

                                                <figure className="relative h-full w-full" onClick={() => handleOpenDialog(projectImage)}>
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
                                                            <Typography variant="h5">
                                                                {projectImage.description}
                                                            </Typography>
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
            <Dialog size="xl" open={openDialog} handler={() => handleOpenDialog({})}>
                <DialogHeader className="justify-between">
                    <div className="flex items-center gap-3">
                        <Typography
                            variant="lead"
                        >
                            {dialogImage.description}
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button color="gray" size="sm" onClick={() => handleOpenDialog({})}>
                            close
                        </Button>
                    </div>
                </DialogHeader>
                <DialogBody divider={true} className="p-0">
                    <img
                        alt={dialogImage.description}
                        className="h-full w-full object-cover object-center"
                        src={dialogImage.src}
                    />
                </DialogBody>
            </Dialog>
            <hr className="mt-10" />
            <Typography variant='h3' className='my-1 mt-5'>Sample Codes</Typography>
            <div className='grid grid-cols-1 gap-4'>
                {sampleCodes.map((sampleCode, index) => (
                    <React.Fragment key={"samplecode-" + index}>
                        <Card className="mt-10 w-full">
                            <CardBody>
                                <Typography variant="h5" className="mb-3">
                                    {sampleCode.platform}
                                </Typography>
                                <Carousel transition={{ duration: 0.5 }} className="rounded-xl h-95 cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                                    {
                                        sampleCode.images.map((codeImage, idx) => (
                                            <React.Fragment key={"samplecode-" + index + "-image-" + idx}>
                                                <figure className="relative h-full w-full">
                                                    <img
                                                        className="w-full max-h-screen rounded-xl object-cover object-center"
                                                        src={codeImage}
                                                    />
                                                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                                                        <div className="w-3/4 text-center md:w-2/4">
                                                        </div>
                                                    </div>
                                                </figure>
                                            </React.Fragment>
                                        ))
                                    }
                                </Carousel>
                            </CardBody>
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Portfolio