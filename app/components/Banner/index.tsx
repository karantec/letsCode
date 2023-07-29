import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Let's Code</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h3 className='text-6xl lg:text-50xl font-bold text-darkpurple'>
                            Dedicated to <br /> bring your <br /> empowering individuals in Tech Journey. 
                        </h3>
                        <p className="text-2xl font-bold py-2">Our mission is to
                        make quality tech education accessible to everyone, 
                                regardless of their background or financial constraints.</p>
                    </div>
                    <div className='my-7 text-center space-x-5  px-4 lg:text-start'>
                       <a href="https://competitions-and-programs-list.vercel.app/"> <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                       Competion and Program List for Students
                        </button></a>
                      
                    </div>
                   
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
