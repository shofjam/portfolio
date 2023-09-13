import React from 'react'
import profileImage from '../assets/images/profile.jpg'
import { Link } from 'react-router-dom';
import {
    Button,
    Typography,
    Card,
    CardBody,
    Input,
    Textarea
} from '@material-tailwind/react'

const Contact = () => {
    var contacts = [
        {
            media: "Mobile / WhatsApp",
            address: "+62 812 8897 8569",
        },
        {
            media: "Email",
            address: "shoval.jamil@gmail.com"
        },
        {
            media: "LinkedIn",
            address: "https://www.linkedin.com/in/shofjam",
            isUrl: true,
        },

    ]
    return (
        <>
            <Typography variant='h2' className='my-1'>CONTACT ME</Typography>
            {/* <Typography variant='lead' className='my-1'>I'm always open for freelance projects.</Typography> */}
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 text-left gap-6'>
                <Card className="w-full">
                    <CardBody>
                        {
                            contacts.map((contact, idx) => (
                                <div key={"contact-" + idx} className={(idx > 0 ? "mt-3" : "") + " whitespace-normal"}>
                                    <Typography>
                                        {contact.media}
                                    </Typography>
                                    {
                                        contact.isUrl ? (
                                            <a href={contact.address} >Visit my profile</a>
                                        ) : (
                                            <Typography>
                                                {contact.address}
                                            </Typography>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </CardBody>
                </Card>
                <div className='col-span-2'>
                    <Card className="w-full">
                        <CardBody>
                            <form>
                                <div className="mb-4 grid grid-cols-2 gap-6">
                                    <Input size="lg" label="Name" disabled />
                                    <Input size="lg" label="Email" disabled />
                                    <div className='col-span-2'>
                                        <Textarea label="Message" disabled />
                                    </div>
                                </div>
                                <Button disabled>
                                    Send
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div >
        </>
    )
}

export default Contact