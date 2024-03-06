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
                        src="https://pbs.twimg.com/media/D1jON3xWsAEHD4m?format=jpg&name=medium"
                        alt="Card Image"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url("https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-college-rivals-grand-finale-4-2024-2-29-t-10-36-44.jpg")' }}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                    <div className='h-80'></div>
                    <div className='h-80'></div>
                    <div className='h-36'></div>
                    <div className="font-bold text-7xl mb-8 text-teal-700 text-center">League of Legends Worlds Championships</div>

                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full"><a href='https://authenticate.riotgames.com/?client_id=rso-web-client-prod&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Drso-web-client-prod%26redirect_uri%3Dhttps%253A%252F%252Flogin.leagueoflegends.com%252Foauth2-callback%26response_type%3Dcode%26scope%3Dopenid%26state%3Dk0E0z_y4p1Pg6ThC_kHRKilpLPS8RsdQI6h64n4AqkU%26ui_locales%3Den'>Register Now</a></button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full"><a href='/login'>Login/Sign Up </a></button>
                    </div>
                </div>
            </div>





            <br /><br /><br />
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-center">
                <p className="text-teal-300 text-2xl mb-2">
                    Date: 10 January 2024 - 11 January 2024
                </p>
                <p className="text-teal-300 text-2xl">
                    Location: South Korea
                </p>
            </div>
            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-base">
                    The World Championship 2023 is back for its 13th iteration with a tournament in South Korea. This competition is the pinnacle of the League of Legends competition, and 2023 will be no exception. However, there is a significant change to the format this year.
                </p>
            </div>

            <div className="mt-8 px-6 py-4 bg-gray-800 text-white">
                <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        <p>- These eight teams will be drawn into two groups of four to compete in best-of-three, double elimination matches</p>
                    </li>
                    <li>
                        <p>- The winners of each group and the winner of a last chance qualification match between the two lower bracket winners, will move on to the Bracket Stage to join the five qualified teams</p>
                    </li>
                    <li>
                        <p>- The Bracket Stage will see eight teams face off in a double elimination, best-of-five bracket. This will include the three winners of Play-Ins, along with LEC1, LCS1, LPL1, LCK1, and LCK2.</p>
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