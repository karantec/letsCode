"use client"
import Slider from "react-slick";
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
        
        heading: 'Placement Material',
        heading2: "At  Let's Code , we are dedicated to empowering individuals in their tech journey by providing free study materials .",
        title:   "Placement Material",
        Demo:"https://drive.google.com/drive/folders/1b7WFGCwERYEUm_S0lpwiJL3fWNjb8SAF?usp=sharing",
        imgSrc: '/images/article1.jpg',
    },
    {
        heading: 'Resume View',
        heading2: "We also help students improve their resumes, LinkedIn profiles, and GitHub profiles. So don't wait, reach out to us for any help!.",
        title:   "Resume",
        Demo:"https://docs.google.com/forms/d/e/1FAIpQLSfG0glYZ2dtraoWfvLkZpbfZodK_zfWMljRL7I1ChTthyBDaQ/viewform",
        imgSrc: '/images/articles/article3.png',
    },
    {
        heading: 'PortFolio Development',
        heading2: "Portfolios can help you clearly define your strengths and weaknesses. The documents included in a portfolio will identify your strong suits.The documents included in a portfolio will identify your strong suits. .",
        title:   "PortFolio",
        Demo:"https://docs.google.com/forms/d/e/1FAIpQLSc9pRvjNSargdpq6Vc3USwFacMUJ0HXv7kg1Nuov6GMMasKOA/viewform",
        imgSrc: '/images/articles/portifi.png',
    },
    {
        heading: 'College  Collaboration',
        heading2: "By staying connected with us, you can enhance your knowledge and seize potential prospects that may lead to a successful career.We have already created groups for many college .",
        title:   " Collaboration",
        Demo:"https://docs.google.com/forms/d/e/1FAIpQLSc3p0ZY8EQeJL5rxonVt3URVw-zgSv97hNPUG7-b8MaxRNoUg/viewform",
        imgSrc: '/images/articles/college.jpg',
    },
    {
        heading: 'LinkedIn profile optimization',
        heading2: "LinkedIn profile optimization involves strategically tailoring your profile to showcase your skills experience  and accomplishments in a compelling manner. By doing so, you can enhance your online presence and improve your chances of being noticed by recruiters, hiring managers.",
        title:   "LinkedIn",
        Demo:"LinkedIn",
        imgSrc: '/images/articles/article6.png',
    },
    {
        heading: 'Github profile optimization',
        heading2: "Optimizing your GitHub profile will not only strengthen your presence within the developer community but also open doors to new opportunities and collaborations.As you showcase your skills and dedication to coding, potential. ",
        title:   "Github",
        Demo:"Github",
        imgSrc: '/images/articles/article7.jpg',
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
                        <h3 className="text-blue text-lg font-normal tracking-widest">Services We offer to Studensts</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Services</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={400} height={500} className="inline-block m-auto" />

                                    
                                    <h4 className="mt-8 text-center text-2xl font-bold pt-10 text-black">{items.heading}</h4>
                                    <p className=' text-center text-base   text-green-500'>{items.heading2}</p>
                                    <Link  className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img" href={items.Demo}>
                                       {items.title}
                                    </Link>

                                   

                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </div>
            </div>

        );
    }
}
