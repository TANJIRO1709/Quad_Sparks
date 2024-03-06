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
                    <img className="w-full h-full object-cover" src="https://facts.net/wp-content/uploads/2023/07/15-facts-about-dreamhack-digital-festival-1689578848.jpg" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className="font-light text-7xl mb-8">DreamHack</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='https://dreamhack.com/'>Register Now</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up </a></button>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-2xl mb-2">
                    Date: April to December 2023
                </p>
                <p className="text-teal-300 text-2xl">
                    Location: Hyderabad, India
                </p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-base">
                    DreamHack 2023 spans the Globe and brings competitions, expos, and musical performances. Bring your computer and join fellow players in games like StarCraft II Masters and Magic: The Gathering. Players can also sign up for professional competitions for a range of games such as Super Smash Bros Ultimate, Tekken 7, and Street Fighter V. Connect, compete and win at DreamHack.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>Witness intense battles in major esports titles, including Dota 2, Counter-Strike: Global Offensive (CS:GO), League of Legends, and more. Top-tier teams and players will compete for glory and substantial prizes.</p>
                    </li>
                    <li>
                        <p>Explore a vast gaming expo featuring the latest gaming hardware, software, and accessories. Attendees can experience hands-on demos, discover cutting-edge technology, and interact with industry professionals.</p>
                    </li>
                    <li>
                        <p>Discover the next generation of gaming talent at the Indie Game Showcase. Independent game developers will present their innovative creations, providing a unique opportunity for attendees to experience groundbreaking titles before they hit mainstream markets.</p>
                    </li>
                    <li>
                        <p>Marvel at the creativity and skill of cosplayers as they bring their favorite gaming and pop culture characters to life. Cosplay competitions, photo opportunities, and meet-and-greets with renowned cosplayers will be highlights for fans of the art form.</p>
                    </li>
                    <li>
                        <p>Engage with industry experts, game developers, and esports professionals in insightful panel discussions and workshops. Gain valuable insights into the gaming and esports industries, learn about career opportunities, and participate in Q&A sessions.</p>
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