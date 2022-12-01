import React from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillMessage,
} from "react-icons/ai";

export default function Contact() {
    return (
        <div>
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
        </div>
    );
}