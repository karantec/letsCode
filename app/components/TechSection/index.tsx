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
        
        heading: 'Open Source ',
        heading2: " We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things open source. 🤝 Whether you're a seasoned open source contributor or just starting your journey, this group is the perfect platform to connect, collaborate, and learn together. 📚💡 ",
        title:   "Join Group",
        Demo:" https://chat.whatsapp.com/ELpn6eu6b1A0lPXZ9Fr8nO ",
        imgSrc: '/images/Tech/opensource.png',
    },
    {
        heading: 'AI/ML',
        heading2: "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things Artificial Intelligence and Machine Learning. 🤝 Whether you're a seasoned AI expert or just getting started in the world of ML, this group is the perfect platform to connect, collaborate, and learn together. 📚💡        ",
        title:   "Join group ",
        Demo:"https://chat.whatsapp.com/HTDJ0DN54xj6RlyEb1sDUG",
        imgSrc: '/images/Tech/AI.jpg',
    },
    {
        heading: 'DSA',
        heading2: "We are excited to announce the launch of our dedicated community focused on all things DSA. Whether you're a seasoned coder or just beginning your coding journey, this community is the perfect platform to explore, learn, and excel in the world of algorithms and problem-solving. 💻💡        ",
        title:   "Join Group",
        Demo:"https://chat.whatsapp.com/DDA9Vix2xb86lPHvr4GK8L",
        imgSrc: '/images/Tech/dsa.png',
    },
    {
        heading: 'Full Stack Development',
        heading2: "We are excited to announce the launch of our dedicated community focused on all things Full Stack Development. Whether you're a seasoned developer or just beginning your developer coding journey, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡        ",
        title:   "Join Group",
        Demo:"https://chat.whatsapp.com/J2V4N5d4I8MKpPlEsdEN0A",
        imgSrc: '/images/Tech/fullstack.png',
    },
    {
        heading: 'Data science',
        heading2: "We are excited to announce the launch of our dedicated community focused on all things Data science. Whether you're a Data science expert  or just beginning your Data science, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡. 💻💡        ",
        title:   "Join Group",
        Demo:"https://chat.whatsapp.com/KCW6HycyQd2KoAYlC7Obsx",
        imgSrc: '/images/Tech/datascience.jpg',
    },
    {
        heading: 'Cloud Computing',
        heading2: "We are excited to announce the launch of our dedicated community focused on all things Cloud Computing. Whether you're a Cloud expert  or just beginning your Cloud journey, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡. 💻💡        ",
        title:   "Join Group",
        Demo:"https://chat.whatsapp.com/FKDHUWJPjEyCoG0VLKRbEZ",
        imgSrc: '/images/Tech/cloud.png',
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
                        <h3 className="text-blue text-lg font-normal tracking-widest">Our Official Group</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Join our Tech Groups</h3>
                    </div>
                    <div 
                    className="grid sm:grid-cols-2 items-center  md:grid-cols-3 gap-8  sm:px-0">
        
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative md:flex-wrap'>
                                    <Image src={items.imgSrc} alt="gaby" width={400} height={500} className="inline-block m-auto" />
                                    <h4 className="mt-8 text-center text-2xl font-bold pt-10 text-black">{items.heading}</h4>
                                    <p className=' text-center text-base   text-green-500'>{items.heading2}</p>
                                    <Link  className="flex flex-col items-center justify-center mt-5 bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img" href={items.Demo}>
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
