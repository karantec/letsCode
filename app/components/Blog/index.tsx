"use client"
// import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    title: string;
    Demo:string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        
        heading: 'MLH Fellowship Program',
        heading2: " Applications Are Open for the for the Fall 2023 Semester!.A fully remote, 12-week internship alternative where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies. ",
        title:   "Apply Here",
        Demo:" https://fellowship.mlh.io/ ",
        imgSrc: '/images/Blogs/mlh.png',
    },
    {
        heading: '2023 Solution Challenge Demo Day',
        heading2: "Catch the Google Developer Student Club demos solving pressing problems like sustainable energy, healthcare, and education and meet the top 3 winners",
        title:   "Solution Challenge Demo Day",
        Demo:"https://gdsc.community.dev/events/details/developer-student-clubs-gdsc-global-presents-2023-solution-challenge-demo-day/",
        imgSrc: '/images/Blogs/solution.png',
    },
    {
        heading: 'Google I/O Extended',
        heading2: "Join a global event series that explores the technology and announcements from Google I/O 2023, hosted by a Google Developer Group near you..May 10-August 31 | Virtual and in-person",
        title:   "Register Now",
        Demo:"https://gdg.community.dev/ioextended/",
        imgSrc: '/images/Blogs/extended.png',
    },

    
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div>
                <div id="service-section">
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">Our Recent Blogs</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Blogs</h3>
                    </div>
                    <div 
                    className="grid sm:grid-cols-2 items-center  md:grid-cols-3 gap-8  sm:px-0">
        
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative md:flex-wrap'>
                                    <Image src={items.imgSrc} alt="gaby" width={400} height={500} className="inline-block m-auto" />
                                    <h4 className="mt-8 text-center text-2xl font-bold pt-10 text-black">{items.heading}</h4>
                                    <p className=' text-center text-base   text-green-500'>{items.heading2}</p>
                                    <Link  className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img" href={items.Demo}>
                                       {items.title}
                                    </Link>

                                   

                                </div>

                            </div>
                        ))}
                    </div>
                
                </div>
            </div>
            </div>
            </div>

        );
    }
}
