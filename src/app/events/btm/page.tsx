"use client";

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function igs() {
    return (<>
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
                    <img className="w-full h-full object-cover" src="https://www.beyondgames.biz/wp-content/uploads/2023/05/Paris-Major-Counter-Strike-Cineworld-2023.jpg" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className='h-64'></div>
                    <div className="font-bold text-7xl mb-8">Blast.TV Major</div>

                    <div className="flex space-x-4 ">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='https://blast.tv/major'>Register Now</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up</a></button>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-2xl mb-2">
                    Date: May 2023
                </p>
                <p className="text-teal-300 text-2xl">
                    Location: Paris, France
                </p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-base">
                    2023 is a paramount year for France. Paris is set to host its first-ever Counter Strike Major event with the BLAST.tv Major 2023. As one of the biggest esports events in the community, the BLAST.tv Major 2023 precedes other international events hosted by France as well, such as the 2024 Paris Olympics and Paralympic Games. This will also be the first time the Denmark-based esports media company BLAST organizes a Major tournament.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>Of course not! That said… The BLAST.tv stream will not only have really cool features that bring you closer to the action than you have ever been before, it will also have exclusive content that you won’t be able to see anywhere else. But, if none of that sounds like something you’re into, you’ll still be able to watch the stream on Twitch and YouTube via our usual channels!</p>
                    </li>
                    <li>
                        <p>The good news? BLAST are behind both! One is a platform and the other is an event series.</p>
                    </li>
                    <li>
                        <p>Meet the Developers: Engage with game developers and industry visionaries in Q&A sessions and developer panels. Gain insights into the creative process and the inspiration behind some of the most anticipated games of the year.</p>
                    </li>
                    <li>
                        <p>BLAST.tv is your one-stop-shop for all things BLAST. It’s a streaming platform, an event hub, a cool place to play games (have you tried Counter-Strikle?!) and much more. It also happens to be the host of the Paris Major!</p>
                    </li>
                    <li>
                        <p>BLAST Premier is a worldwide Counter-Strike tournament series where the best teams and biggest superstars fight it out for glory and a multi-million dollar prize pool. Check out about.blast.tv for more info!</p>
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
    </>
    )
};
export default igs;