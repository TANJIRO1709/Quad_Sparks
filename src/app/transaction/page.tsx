"use client"
import React from 'react'

function page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
                <h1 className='text-6xl'>SPONSOR OUR EVENTS</h1>
                <div className='h-10'></div>
                <h1 className='text-3xl'>OUR UPCOMING EVENTS</h1>
                <p className='h-10'></p>
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
                <div>
                    <h1 className='text-3xl font-bold font-serif'>ENTER EVENT NAME</h1>
                    <p className='h-6'></p>
                    <input type="text flex justify-center focus:underline mx-4" placeholder='event' />
                    <p className='h-6'></p>
                    <label htmlFor="sponsor" className='text-3xl font-bold font-serif'>SPONSORSHIP AMOUNT</label>
                    <p className='h-6'></p>
                    <input type="text flex justify-center focus:underline " placeholder='amount in tokens' />
                    <p className='h-6'></p>
                    <button className='bg-blue-500 flex text-white px-4 py-2 rounded-full justify-center'>Submit</button>
                </div>
            </div>

        </>
    )
}

export default page;
