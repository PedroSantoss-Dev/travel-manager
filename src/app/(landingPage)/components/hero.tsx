import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex xl:flex-row flex-col gap-5 w-full h-screen ">
            <div className="flex flex-col mt-20 ">
                <h1 className=" ml-20 lg:text-[35px] sm:text-[30px] text-[25px] font-semibold text-gray-800
           absolute z-40 ">
                    Descubra destinos tropicais incríveis
                </h1>

            </div>
            <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen ">
                <div className=" w-full  xl:h-full h-[590px] z-0 ">
                    <Image src="/hero.png" alt="hero" fill className=" object-fill w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default Hero;