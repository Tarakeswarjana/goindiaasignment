'use client'; // Ensure this is a valid statement, or remove it if not needed.
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSquare, faSquareShareNodes, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';


const picurl = 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png'
const pickurl = "https://st3.depositphotos.com/16149430/18354/i/600/depositphotos_183540862-stock-photo-sea.jpg"

const data = [{ heading: "Lorem Ipsum", text: " button with specific styling using Tailwind CSS classes. the button with the given classes" },
{ heading: "Lorem Ipsum", text: " button with specific styling using Tailwind CSS classes. the button with the given classes" },
{ heading: "Lorem Ipsum", text: " button with specific styling using Tailwind CSS classes. the button with the given classes" },
{ heading: "Lorem Ipsum", text: " button with specific styling using Tailwind CSS classes. the button with the given classes" },
{ heading: "Lorem Ipsum", text: " button with specific styling using Tailwind CSS classes. the button with the given classes" },]





function Dashboard() {
    const [isActive, setIsActive] = useState(true);

    return (
        <Layout>
            <div className='h-screen flex flex-col md:mx-0 mx-6 w-screen '>
                <div className='flex m-0 justify-center items-center md:bg-white '>
                    <div
                        className={`bg-slate-400 flex-1 md:basis-[60.00%] md:bg-white md:flex md:justify-center text-center pt-8 pb-8 font-bold text-2xl text-red-800  ${isActive ? 'bg-slate-800' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setIsActive(true) }}
                    >
                        <div className='md:bg-slate-300 md:max-w-64  '>
                            DISCUSSION FORUM
                        </div>
                    </div>
                    <div
                        className={`bg-slate-400 md:bg-white md:basis:[40%] flex-1 pt-8 pb-8 md:flex md:justify-center font-bold text-xl text-red-700 hover:bg-slate-800 text-center ${!isActive ? 'bg-slate-800' : ''}`}
                        onClick={(e) => { setIsActive(false); e.stopPropagation() }}
                    >
                        <div className=' md:block md:bg-slate-300 md:max-w-64 '>
                            Market stories
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12   gap-8 overflow-y-auto'>
                    <div className={`md:basis-2/3 md:block ${!isActive ? "hidden" : ""} `}>
                        {
                            data.map((ele, id) => {
                                return (
                                    <div key={id} className="w-100 flex mb-8  text-black rounded-lg shadow-slate-500 shadow-[0_6px_6px_6px] mr-11" >
                                        <div className=' basis-1/5 flex justify-center '>
                                            <img className='rounded-[50%] w-20 h-20' src={picurl} alt="Profile" />
                                        </div>
                                        <div className=' basis-3/5 flex flex-col h-40'>
                                            <div className=' flex basis-1/3 '>
                                                <div className=''>Lorem Ipsum</div>
                                                <div>
                                                    <button className='  rounded-xl text-[13px] bg-blue-600 px-3 mx-6 '>Sector {id + 1}</button>
                                                </div>
                                            </div>
                                            <div className='  basis-1/3 '>
                                                {ele.text}

                                            </div>
                                            <div className='flex justify-between  basis-1/3 mt-4' >

                                                <div>  <FontAwesomeIcon icon={regularHeart} />2k</div>
                                                <div>   <FontAwesomeIcon icon={faEye} />2k</div>
                                                <div>  <FontAwesomeIcon icon={faCommentAlt} />2k Comants</div>


                                                <div> <FontAwesomeIcon icon={faSquareShareNodes} />Share</div>








                                            </div>
                                        </div>
                                        <div className=' basis-1/5 rounded-lg text-blue-800 relative top-0'>2min ago</div>
                                    </div>


                                )
                            })
                        }
                    </div>
                    <div className='basis-1/3'>
                        {
                            data.map((ele, id) => {
                                return (
                                    <div key={id} class="max-w-[36rem] bg-white border border-gray-200 mb-8  shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img class="rounded-t-lg" src={pickurl} alt="" />
                                        </a>
                                        <div class="p-5">
                                            <a href="#">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Coldest SunSet</h5>
                                            </a>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>





                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
