import Image from 'next/image'
import about_img from '@/public/images/about-profile.jpg'
import { BriefcaseBusiness, CodeXml, GraduationCap } from 'lucide-react'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] scroll-mt-20">
        <h2 className="text-center mb-6 text-3xl">About me</h2>

        <div className="flex gap-10">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image src={about_img} className="w-full rounded-3xl" alt="Profile image" />
            </div>
            <div className="flex flex-col flex-1 gap-5 text-left">
                <p>
                    I am an experienced Software developer with over 4+ years of professional expertise in the field. Throughout my career, I have had the privileage of collabrating with prestigious organisations, contributing to their sucess and growth. 
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                    <div className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500">
                        <CodeXml />

                        <h6 className="my-4 font-semibold text-gray-700">Languages</h6>
                        <p className="text-gray-600 text-sm">Html, Css, Javascript, React Js, Next Js, Node Js, Java, Php, Laravel</p>
                    </div>

                    <div className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500">
                        <GraduationCap />

                        <h6 className="my-4 font-semibold text-gray-700">Education</h6>
                        <p className="text-gray-600 text-sm">B.E in Mechanical Engineering</p>
                    </div>

                    <div className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500">
                        <BriefcaseBusiness />

                        <h6 className="my-4 font-semibold text-gray-700">Projects</h6>
                        <p className="text-gray-600 text-sm">Built more than 5 projects</p>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About