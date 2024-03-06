"use client";

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function home() {
    return (
        <div >
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
                    <img className="w-full h-full object-cover" src="https://cdn.openart.ai/stable_diffusion/cc5983536e2f9f54f600582b285b598bff59cdcc_2000x2000.webp" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='absolute top-0 right-0 px-3 text-3xl text-black text-bold font-serif'><a href="/contact">Contact us</a></div>
                    <div className='h-80'></div>
                    <div className='h-56'></div>
                    <div className="font-bold text-6xl mb-8">WELCOME</div>
                    <div className="font-bold text-6xl mb-8">TO</div>
                    <div className="font-bold text-6xl mb-8">E-SPORTS FUTURE</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gray-700"><a href='/profile'>PROFILE</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-500"><a href='/login'>Login/Sign Up</a></button>
                        <button className="bg-yellow-700 text-white px-4 py-2 rounded-full"><a href='/sponsor'>SPONSOR US</a></button>
                    </div>
                </div>
            </div>
            <br />
            <div className='flex justify-center text-white text-4xl font-serif hover:text-orange-400 hover:text-7xl'>TOP EVENTS</div>
            <br />

            <br />

            <div className='events flex justify-center'>
                <span><a href="/events/btm"><img src="https://www.beyondgames.biz/wp-content/uploads/2023/05/Paris-Major-Counter-Strike-Cineworld-2023.jpg" alt="btm" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/bgs"><img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-board-game-sunday-0-2024-2-27-t-14-45-3.jpg" alt="bgs" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/cgr"><img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-college-rivals-grand-finale-4-2024-2-29-t-10-36-44.jpg" alt="cgr" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
            </div>
            <div className='h-10'></div>
            <div className='events flex justify-center'>
                <span><a href="/events/crg"><img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-play-station-center-0-2023-9-30-t-4-48-24.jpg" alt="crg" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/eus"><img src="https://static.wixstatic.com/media/11062b_1c4e5d8f0ce241bda76c8c3c17fe0576~mv2.jpg/v1/fill/w_2880,h_1448,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_1c4e5d8f0ce241bda76c8c3c17fe0576~mv2.jpg" alt="eus" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/lol"><img src="https://pbs.twimg.com/media/D1jON3xWsAEHD4m?format=jpg&name=medium" alt="lol" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
            </div>
            <div className='h-10'></div>
            <div className='events flex justify-center'>
                <span><a href="/events/psc"><img src="https://facts.net/wp-content/uploads/2023/07/15-facts-about-dreamhack-digital-festival-1689578848.jpg" alt="psc" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/tgs"><img src="https://d323sccto6ke4l.cloudfront.net/images/news/1500/en-us/290.jpg" alt="bgs" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
                <span className='w-10'></span>
                <span><a href="/events/vct"><img src="https://www.gosugamers.in/wp-content/uploads/2023/01/Coming-to-America-2023-VCT-Champions-will-reportedly-be-held-in-the-U.S.jpg" alt="cgr" className='w-80 h-52 hover:h-96 hover:w-96' /></a></span>
            </div>
            <div className='h-10'></div>

            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-4xl mb-2">
                    QUAD_SPARKS
                </p>
                <p className="text-teal-300 text-2xl">
                    AN E-SPORTS ORGANISING COMPANY
                </p>
                <p className="text-teal-300 text-2xl">#E-SPORTS IS THE FUTURE</p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">KNOW ABOUT US</h2>
                <p className="text-base">
                    In the dynamic realm of competitive gaming, Evolution Esports stands as a beacon of innovation and organization. Founded in 2024, this cutting-edge esports organizing company has rapidly become a powerhouse in the industry, orchestrating some of the most thrilling and successful gaming events worldwide.Evolution Esports is renowned for its commitment to professionalism, integrity, and the relentless pursuit of excellence in the rapidly evolving world of esports. The company's core mission is to provide a platform for gamers to showcase their skills, connect with fans, and contribute to the global esports community.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">E-SPORTS HIGHLIGHTS</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>Evolution Esports hosts a diverse range of events, spanning various game genres and platforms. From intense first-person shooter tournaments to strategic multiplayer online battle arenas (MOBAs), the company ensures that its events cater to a broad audience of gamers and enthusiasts.</p>
                    </li>
                    <li>
                        <p>With a truly global perspective, Evolution Esports transcends geographical boundaries. The company's events attract top-tier talent from around the world, fostering an international esports ecosystem and providing a stage for emerging talents to make their mark.</p>
                    </li>
                    <li>
                        <p>Evolution Esports prides itself on its state-of-the-art production values. High-quality broadcasts, engaging commentary, and immersive viewer experiences are integral components of every event. The company leverages the latest technology to create an electrifying atmosphere for both live and online audiences.</p>
                    </li>
                    <li>
                        <p>Recognizing the significance of community in esports, Evolution Esports actively engages with its audience. Whether through social media interactions, fan meet-ups, or exclusive content, the company builds a strong sense of community among gamers, sponsors, and fans.</p>
                    </li>
                    <li>
                        <p>One of the distinguishing features of Evolution Esports is its willingness to experiment with different tournament formats. From unique qualifiers to innovative scoring systems, the company continually seeks to enhance the competitive experience for both players and viewers.</p>
                    </li>
                    <li>
                        <p>Evolution Esports prioritizes the well-being of players by implementing fair competition standards, providing adequate breaks, and addressing concerns related to physical and mental health. The company recognizes that esports success is not just about winning but also about nurturing a sustainable and healthy gaming environment.</p>
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
export default home;