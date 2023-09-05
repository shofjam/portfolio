import React from 'react'
import { useState } from 'react'
import profileImage from '../assets/images/profile.jpg'
import { Link } from "react-router-dom";
import { Button, Typography } from '@material-tailwind/react'

const Home = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <img
                        className='h-96 w-96 rounded-full object-cover object-center'
                        src={profileImage}
                        alt='Me'
                    />
                </div>
                <div className='introduction'>
                    <Typography variant='h2' className='my-1'>Hello!</Typography>
                    <Typography variant='h1' className='my-1'>I'm Shofhal</Typography>
                    <Typography variant="lead">I'm a Fullstack Developer based in Bandung, Indonesia. I build many web aplications from small to big scales, user friendly and good performance.</Typography>
                    <div className='buttons my-5'>
                        <Link to='/about-me'>
                            <Button className='me-2'>More about me</Button>
                        </Link>
                        <Button variant='outlined'>Download CV</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home