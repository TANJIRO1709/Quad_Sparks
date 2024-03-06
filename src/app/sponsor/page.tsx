"use client"
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
function sponsor() {
    return (<>
        <div className="relative">
            <div className="w-full h-100 relative">
                <img src="https://www.techopedia.com/wp-content/uploads/2023/07/blockchain_01.png" className='w-screen h-screen bg-cover' ></img>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                <div className='h-80'></div>
                <div className='h-80'></div>
                <div className="font-bold text-7xl mb-8 py-1/2 font-serif">We need sponsors....</div>

                <div className="flex space-x-4">

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-yellow-500 font-serif"><a href='/transaction'>Sponsor us</a></button>
                </div>
            </div>
        </div>
        <br /><br /><br />
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

    </>
    )
}

export default sponsor;
