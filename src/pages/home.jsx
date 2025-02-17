import profileImage from '../assets/images/profile.jpg'
import { Link } from "react-router-dom";
import { Button, Typography } from '@material-tailwind/react'

const Home = () => {
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
                    <Typography variant='h3' className='my-1'>Hello!</Typography>
                    <Typography variant='h2' className='my-1'>I&apos;m Shofhal</Typography>
                    <Typography variant="lead">I&apos;m a Full-Stack Developer based in Sumedang, Indonesia. I build web applications from small to big scales that focus on user friendly and best performance.</Typography>
                    <div className='buttons my-5'>
                        <Link to='/portfolio/about-me'>
                            <Button className='me-2'>About me</Button>
                        </Link>
                        <Link to='/portfolio/portfolio'>
                            <Button color="amber">Portfolio</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home