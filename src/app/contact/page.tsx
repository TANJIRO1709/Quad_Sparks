"use client";

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
//import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
function contactpage() {
    return (
        <div>
            <nav>
                <div className='flex justify-center rounded-lg'>
                    <div className='w-10 '></div>
                    <div className='text-3xl py-8 hover:text-sky-400 font-serif absolute top-0 left-0'><a href="/home"> Home </a></div>
                    <div className='w-10'></div>
                    <div className='text-3xl py-8 hover:text-sky-400 font-serif absolute top-0 right-0'> <a href='signup'>Sign In</a></div>
                </div>
            </nav>

            <div className="relative">
                <div className="w-full h-100 relative">
                    <img className="w-full h-full object-cover" src="https://images.adsttc.com/media/images/5ef1/68f8/b357/6529/f500/0347/large_jpg/yc8m6r-A_jpeg.jpg?1592879340" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className='h-80'></div>
                    <div className="font-bold text-7xl mb-8">CONTACT US</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='/home'>HOME</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up</a></button>

                    </div>
                </div>
            </div>
            <div className='w-30 h-20'></div>
            <div className='flex justify-center'>
                <span><h2 className='text-2xl font-serif'>Organiser</h2> <p className='h-4'></p><p className='font-medium text-xl font-serif'>Sujal kumar Agarwal</p> </span>
                <span className='w-20'></span>
                <span><h2 className='text-2xl font-serif'>Links</h2> <p className='h-4'></p><p className='font-medium text-xl hover:text-blue-300 font-serif'><a href='https://www.linkedin.com/in/sujal-agarwal-0420a3288/'>Linkedln</a></p></span>
                <span className='w-20'></span>
                <span><h2 className='text-2xl font-serif'>Email</h2> <p className='h-4'></p> <p className='font-medium text-xl font-serif'>sujalagarwalwk@gmail.com</p> </span>
            </div>
            <p className='h-30 w-15'></p><br />
            <div>
                <h2 className='flex justify-center py-3 text-4xl font-serif '>Know more about the organisation</h2>
                <p className='text-xl font-serif px-80'>Our primary mission is to foster a vibrant and inclusive esports environment where players of all skill levels can come together to compete, learn, and connect. By organizing and facilitating various esports events and tournaments, we aim to enhance the overall gaming experience within our community.</p>
                <br />
                <p className='text-xl font-serif px-80'>We encourage all members of our community to get involved with our esports initiatives. Whether you're a seasoned competitor, a casual gamer, or someone interested in helping behind the scenes, there will be opportunities for everyone to contribute and make our esports community even better.
                </p>
                <br />
                <p className='text-xl font-serif px-80'>Stay tuned for updates on upcoming events, and feel free to reach out to our Esports Organizing Team with any questions, suggestions, or ideas.</p>
                <br />
                <p className='text-xl font-serif px-80'>Here's to a future filled with exciting competitions, camaraderie, and the continued growth of our esports community!

                </p>
                <br /> <br />
                <h2 className='text-2xl px-80 py-3'>Best Regards,</h2>
                <p className='text-2xl px-80 py-3'>Quad_Sparks</p>
                <br />
                <hr />
                <br />
                <h1 className='flex justify-center py-3 text-4xl font-serif'>Quick Links:</h1>
                <div className='flex justify-center'>
                    <span className='py-2'><GitHubIcon /><a href='https://github.com/TANJIRO1709'><p className='font-medium text-xl hover:text-blue-300 font-serif'>Github</p></a></span>
                    <div className='w-10'></div>
                    <span className='py-2 '><LinkedInIcon /><a href='https://www.linkedin.com/in/sujal-agarwal-0420a3288/'><p className='font-medium text-xl hover:text-blue-300 font-serif'>Linkedln</p></a></span>
                    <div className='w-10'></div>
                    <span className='py-2'><XIcon /><a href='https://twitter.com/SUJAL9628985162'><p className='font-medium text-xl hover:text-blue-300 font-serif'>Twitter</p></a></span>
                    <div className='w-10'></div>
                    <span className='py-2'><InstagramIcon /><a href='https://www.instagram.com/sujal_0917/'><p className='font-medium text-xl hover:text-blue-300 font-serif'>Instagram</p></a></span>
                </div>
            </div>
            <div className='w-30'></div>
        </div>
    )
}

export default contactpage
