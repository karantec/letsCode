import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Mission.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: `We understand the importance of staying up-to-date with the ever-evolving technology landscape. That's why we curate and provide comprehensive study materials on various tech topics, ranging from programming languages and web development to data science, artificial intelligence, and beyond.`,
        link: 'Learn more'
    },
    {
        heading: "Vision",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "Educational guidance is primarily concerned with the student's success in their educational career. We guide students to achieve their dream jobs by providing proper guidance and resources.",
        link: 'Learn more'
    },
    {
        heading: "Goal",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "We also help students improve their resumes, LinkedIn profiles, and GitHub profiles. So don't wait, reach out to us for any help!",
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;