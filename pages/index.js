import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { 
  AiFillInstagram, 
  AiFillFacebook,
  AiFillGithub, 
  AiFillMessage, 
} from "react-icons/ai";
import Image from "next/image";
import Logo from "../public/favicon.ico";
import Face from "../public/Face.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import AreaCrew from "../public/AreaCrew.jpg";
import CssReset from "../public/CssReset.jpg";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}> 
      <Head>
        <title>Matteo Manià | Web-designer</title>
        <meta name="description" content="Hi! I'm Matteo Manià, that's my website. you can contact me!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition ease-in-out duration-200 font-SourceSansPro'>    
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <div className='relative rounded-full w-12 h-12 overflow-hidden'>
              <Image src={Logo}/>
            </div>
            <ul className='flex items-center dark:text-gray-400'>
              <li className='hover:text-gray-700 dark:hover:text-gray-100'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-base md:text-xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-md ml-8 hover:opacity-90' href="mailto:matteomania09@gmail.com">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className='text-center mx-auto pt-8 px-2 md:pt-32 md:p-6'>
            <h2 className='text-4xl py-2 text-teal-600 font-semibold dark:text-teal-400 md:text-5xl'>Matteo Manià</h2>
            <h3 className='text-xl py-2  dark:text-gray-200  md:text-2xl'>Developer & Designer</h3>
            <p className='text-base py-5 leading-8 text-gray-800  dark:text-teal-400 m:text-md'>I'm a student that love coding.</p>
          </div>

          <div className='text-5xl flex justify-center gap-10 md:gap-14 pt-6 px-2 md:pt-3 md:p-10 text-gray-600 dark:text-gray-400'>
            <a href="https://www.instagram.com/itz_matteomania/" className='hover:text-gray-700 dark:hover:text-gray-100'>
              <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/robin.ticke.50/" className='hover:text-gray-700 dark:hover:text-gray-100'>
              <AiFillFacebook />
            </a>
            <a href="https://github.com/Matteo0099" className='hover:text-gray-700 dark:hover:text-gray-100'>
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section className='min-h-screen'>  
          <div className='lg:flex gap-10 mx-auto'>
            <div className='text-center shadow-lg pl-2 pr-2 pt-16 pb-16 rounded-xl my-10  dark:bg-white mx-auto flex-1 max-w-5xl min-h-max'>
              <Image src={Face} width={170} height={234} className='mx-auto relative rounded-xl w-44 overflow-hidden'/>
              <h3 className='text-4xl font-bold pt-9 pb-6'>About me</h3>
                <div className='mx-16'>
                  <p className='text-gray-800 py-1 font-medium text-lg md:text-xl leading-8 text-center max-w-2xl mx-auto'>
                    I started coding when I was 15 y.o., with some websites.
                    Actually, I work on some project, like 
                    <span className='text-blue-500 font-medium'>
                      <a href="https://areacrewmonfalcone.it" className='pl-1 text-clip hover:underline'>
                        AreaCrewWebsite
                      </a>
                    </span>, or a work-portfolio like 
                    <span className='text-blue-500 font-medium'>
                      <a href="https://www.xjxstudios.tk" className='pl-1 text-clip hover:underline'>
                        Xjx-studios. 
                      </a>
                    </span> <br />
                    <span className='font-bold text-teal-500'>Psst!</span>
                    <span className='underline px-1 font-semibold uppercase'>Hey!</span>
                    I created my own css reset! It's available on the site:
                    <a href="https://cssreset.tk" className='text-blue-500 font-medium px-1 hover:underline'>
                      CssResetV.2
                    </a>
                  </p>
                </div>
            </div>
          </div>
        </section>


        <section className='min-h-screen'>
          <div>
            <h3 className="text-4xl py-1 mt-5 pt-5 dark:text-gray-200 text-center font-bold">My services</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-extrabold pt-8 pb-2">
                Beautiful Designs 
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="pt-4 pb-2 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 italic">Photoshop</p>
              <p className="text-gray-800 py-1 italic">Illustrator</p>
              <p className="text-gray-800 py-1 italic">Figma</p>
              <p className="text-gray-800 py-1 italic">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-extrabold pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="pt-4 pb-2 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 italic">Photoshop</p>
              <p className="text-gray-800 py-1 italic">Illustrator</p>
              <p className="text-gray-800 py-1 italic">Figma</p>
              <p className="text-gray-800 py-1 italic">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-extrabold pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="pt-4 pb-2 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 italic">Photoshop</p>
              <p className="text-gray-800 py-1 italic">Illustrator</p>
              <p className="text-gray-800 py-1 italic">Figma</p>
              <p className="text-gray-800 py-1 italic">Indesign</p>
            </div>
          </div>
        </section>

        <section className='min-h-screen flex flex-col mt-5 pt-5 pb-16 md:pb-24'>
          <div className='flex-1 mt-5 pt-5 flex-col justify-center mx-auto align-middle text-center container max-w-5xl'>
            <div className='mx-auto bg-gradient-to-t from-white to-slate-50 rounded-lg shadow-lg p-6'>  
              <h3 className='text-4xl py-1 mt-5 pt-5 dark:text-gray-200 text-center font-bold'>Portfolio</h3>
              <p className="text-base md:text-lg md:leading-8 pt-6 pb-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with a lot of people to create digital products
                for commercial use. <br />
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 py-28 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-2xl rounded-lg">
              <a href="https://areacrewmonfalcone.it">
                <Image
                  className="rounded-lg object-cover hover:scale-105 transition ease-in-out delay-50 duration-200 transform-gpu"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={AreaCrew}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl rounded-lg">
              <a href="https://cssreset.tk">
                <Image
                  className="rounded-lg object-cover hover:scale-105 transition ease-in-out delay-50 duration-200 transform-gpu"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={CssReset}
                />
              </a>
            </div>
          </div>
        </section>

        <section className='min-h-max flex flex-col pt-4 pb-6'>
          <div className='pt-2 mt-2 mx-auto flex flex-col justify-center max-w-5xl'>
            <h1 className='text-black dark:text-gray-200 text-4xl py-1 mt-5 pt-5 pb-4 text-center mx-auto font-bold'>Contact</h1>
            <ul className='flex flex-row p-4 text-gray-600 dark:text-gray-400 border-t-2'>
              <li className='mx-4 text-4xl'>
                <a href="https://www.instagram.com/itz_matteomania/" className='hover:text-gray-700 dark:hover:text-gray-100'>
                  <AiFillInstagram />
                </a>
              </li>
              <li className='mx-4 text-4xl'>
                <a href="https://www.facebook.com/robin.ticke.50/" className='hover:text-gray-700 dark:hover:text-gray-100'>
                  <AiFillFacebook />
                  </a>
              </li>
              <li className='mx-4 text-4xl'>
                <a href="https://github.com/Matteo0099" className='hover:text-gray-700 dark:hover:text-gray-100'>
                  <AiFillGithub />
                  </a>
              </li>
              <li className='mx-4 text-4xl'>
                <a href="mailto:matteomania09@gmail.com" className='hover:text-gray-700 dark:hover:text-gray-100'>
                  <AiFillMessage />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
