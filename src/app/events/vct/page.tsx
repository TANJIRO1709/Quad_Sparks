"use client";


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
                    <img className="w-full h-full object-cover" src="https://www.gosugamers.in/wp-content/uploads/2023/01/Coming-to-America-2023-VCT-Champions-will-reportedly-be-held-in-the-U.S.jpg" alt="Card Image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-56'></div>
                    <div className='h-56'></div>
                    <div className='h-56'></div>
                    <div className="font-bold text-7xl mb-8">Valorant Champions Tour</div>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='https://in.bookmyshow.com/mumbai/events/play-station-center/ET00371238/bookingStep/datetime'>Register Now</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up </a></button>
                    </div>
                </div>
            </div>
            <div className='h-14'></div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-2xl mb-2">
                    Date: January 2024 - September 2023
                </p>
                <p className="text-teal-300 text-2xl">
                    Location: Berlin, Germany; Seoul, South Korea; Los Angeles, California, USA
                </p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-base">

                    Valorant is a popular esports title and over the past few years, it has been taking place in Europe. But as per the current speculations, the event is all set to take place in Los Angeles. Alejandro Gomis an investigative reporter found out that this year, Riot Games are looking for a new city to host their 2023 VCT Valorant Champions 2023 and the main focus is on Los Angeles. This news can be found on Alejandro Gomis’s official Twitter account. According to the reports from Alejandro Gomis, the dates are also released and the official announcement will be made available soon.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>In 2023 Challenger Leagues will feature two splits of regular season play that will culminate in a play-off where a single team will be crowned as that league’s champion! The biggest Challenger leagues will receive dedicated broadcast windows that will be scheduled to avoid conflicts with international league matches.</p>
                    </li>
                    <li>
                        <p>VCT Game Changers supplements the competitive season by creating new opportunities and exposure for women within VALORANT esports. Regional events that ladder up to a World Championship will return in 2023. Through Game Changers, we hope to build towards a VALORANT Champions Tour that is more inclusive and representative of our community.</p>
                    </li>
                    <li>
                        <p>Each year after the conclusion of Champions, teams across the entire ecosystem will have the opportunity to participate in third party VALORANT tournaments around the globe. Teams will be able to test new rosters and prepare for the next season of the VCT.</p>
                    </li>
                    <li>
                        <p>We believe that the path to Champions should begin directly within VALORANT. The upcoming in-game competitive system will create a seamless connection between VALORANT and the VCT at a global scale through a bridge of make-or-break moments where the lowest ranked Challenger teams have to defend their place against the newest batch of online superstars. We'll have more to share on this system before the end of the year.</p>
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