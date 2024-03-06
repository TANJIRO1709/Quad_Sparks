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


            {/* <img className="w-full h-100 object-cover" src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-play-station-center-0-2023-9-30-t-4-48-24.jpg" alt="Card Image" />
            <div className="px-6 py-4 flex flex-grow flex-col justify-center items-center ">
                <div className="font-bold text-xl mb-2">Play Station Centre</div>

                <p className="text-slate-400 text-base text-center m-3">
                    Join us for an electrifying evening of gaming innovation and excitement at the "Play Station center: The Future of Gaming." this event promises to be a celebration of all things PlayStation, offering an exclusive glimpse into the future of gaming and entertainment.
                </p>
                <p className="text-sky-400 text-base">
                    Mon 04 March 2024 - Sun 31 March 2024
                </p>

                <p className="text-sky-400 text-base mb-3">
                    North Town Tower 24: Chennai
                </p>
            </div> */}


            <div className="relative">
                <div className="w-full h-100 relative">
                    <img className="w-full h-full object-cover" src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-play-station-center-0-2023-9-30-t-4-48-24.jpg" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className='h-80'></div>
                    <div className="font-bold text-7xl mb-8">Play Station Centre</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='https://in.bookmyshow.com/mumbai/events/play-station-center/ET00371238/bookingStep/datetime'>Register Now</a></button>
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
                    The "Play Station center: The Future of Gaming" event is a unique gathering of gaming enthusiasts, where we     explore the latest innovations in gaming technology and provide a platform for passionate gamers to connect. Join us for a memorable experience filled with excitement and a sneak peek into the future of gaming and entertainment.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>World Premiere Game Reveals: Be among the first to witness the unveiling of breathtaking new titles from PlayStation's most celebrated franchises. From action-packed adventures to immersive storytelling, get ready to embark on unforgettable gaming journeys.</p>
                    </li>
                    <li>
                        <p>Next-Gen PlayStation Hardware: Get up close and personal with the latest advancements in PlayStation hardware. Experience the cutting-edge technology that will redefine your gaming experience, from graphics to gameplay.</p>
                    </li>
                    <li>
                        <p>Meet the Developers: Engage with game developers and industry visionaries in Q&A sessions and developer panels. Gain insights into the creative process and the inspiration behind some of the most anticipated games of the year.</p>
                    </li>
                    <li>
                        <p>PlayStation VR Showcase: Immerse yourself in the world of virtual reality with a dedicated PlayStation VR showcase. Try out the latest VR titles and experience gaming in a whole new dimension.</p>
                    </li>
                    <li>
                        <p>Exclusive Merchandise and Collectibles: Explore a PlayStation-themed marketplace featuring exclusive merchandise and collectibles, perfect for any gaming enthusiast.</p>
                    </li>
                    <li>
                        <p>Hands-On Gaming Stations: Test your skills and try out upcoming PlayStation games at hands-on gaming stations scattered throughout the convention center. Compete with friends or challenge yourself in solo adventures.</p>
                    </li>
                    <li>
                        <p>Live Entertainment: Enjoy live music, entertainment, and surprises that will keep the energy levels high throughout the event.</p>
                    </li>
                    <li>
                        <p>Community and Networking: Connect with fellow gamers, PlayStation fanatics, and content creators. Share your passion for gaming and make new friends within the vibrant PlayStation community.</p>
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