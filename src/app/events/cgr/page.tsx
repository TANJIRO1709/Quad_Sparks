"use client";

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function igs() {
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
                    <img
                        className="w-full h-full object-cover"
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-college-rivals-grand-finale-4-2024-2-29-t-10-36-44.jpg"
                        alt="Card Image"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url("https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-college-rivals-grand-finale-4-2024-2-29-t-10-36-44.jpg")' }}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className="font-bold text-7xl mb-8 text-white">College Rivals</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Register Now</button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up</a></button>
                    </div>
                </div>
            </div>





            <br /><br /><br />
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-2xl mb-2">
                    Date: Mon 04 March 2024 - Sun 31 March 2024
                </p>
                <p className="text-teal-300 text-2xl">
                    Location: North Town Tower 24, Chennai
                </p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-base">
                    COLLEGE RIVALS Grand Finale at NESCO, Mumbai on 3rd March will be a captivating celebration of youth culture, music, esports, streetwear & creators showcasing the passion and talent of the next generation of Indian Esports stars.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>- Sickest Music Festival with Top Artist Lineup including Seedhe Maut, Chaar Diwaari & MuhFaad.</p>
                    </li>
                    <li>
                        <p>- Meet & Greet with Top Influencers like Mortal, Scout, Payal & many more</p>
                    </li>
                    <li>
                        <p>- High Octane LAN Event: 6 Game Titles</p>
                    </li>
                    <li>
                        <p>- 90’s Retro Gaming Arcade</p>
                    </li>
                    <li>
                        <p>- Youth Carnival with Selected Trendy Brand Activations</p>
                    </li>
                    <li>
                        <p>- Themed Pop Culture & Youth Culture Experience</p>
                    </li>
                    <li>
                        <p>- Fun Entertainment & Gaming Activations (Cosplay to Event Zones)</p>
                    </li>

                </ol>
            </div>

            <div className='h-14'></div>
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
            <div className='w-30'></div>





        </div>
    )
};
export default igs;