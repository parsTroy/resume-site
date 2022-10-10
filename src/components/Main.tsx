import React from "react";

const Main = () => (
    // Main Container
    <div className='grid grid-rows-6 text-center items-center justify-center'>
        {/* Heading Container */}
        <div>
            <h1 className='text-5xl mb-2 font-bold'>Troy Parsons</h1>
            <p>Aurora Ontario Canada</p>
            <p>(519) 520-1171 - <a href="mailto:troyalparsons@gmail.com">troyalparsons@gmail.com</a></p>
        </div>
        {/* Portfolio Section */}
        <div className='-mt-28 flex justify-between w-[840px] -mb-12 bg-[#262626] rounded-md p-4 pt-8 pb-8'>
            <div className='ml-12 w-64 text-left'>
                <h2 className='text-3xl font-bold'>Portfolio</h2>
                <ul className='mt-6'>
                    <li className='mb-2'><a href="https://troyparsons.ca">https://troyparsons.ca</a></li>
                    <li><a href="https://github.com/parsTroy">https://github.com/parsTroy</a></li>
                </ul>
            </div>
            {/* Skills & Learning */}
            <div className='w-[840px] grid grid-cols-2'>
                <div>
                    <h2 className='text-3xl font-bold'>Skills</h2>
                    <div className='mt-6'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                            <li>GitHub</li>
                            <li>Linux</li>
                            <li>FireBase</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>Learning</h2>
                    <div className='mt-6'>
                        <ul>
                            <li>C++</li>
                            <li>Unreal Engine 5</li>
                            <li>TypeScript</li>
                            <li>React Native</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Professional Summary */}
        <div className='-mt-36 w-[840px] text-left bg-[#262626] rounded-md p-8 pt-8 pb-8'>
            <h2 className='text-3xl font-bold'>Professional Summary</h2>
            <p className='mt-2 indent-4'>
                Enthusiastic Web Developer eager to contribute to team 
                success through hard work, attention to detail and
                excellent organizational skills. With a clear understanding of 
                web development and experience with JavaScript React, 
                GitHub and more. Motivated to learn, grow and excel in 
                web development.
            </p>
        </div>
        {/* Work Experience */}
        <div className='-mt-24 w-[840px] text-left bg-[#262626] rounded-md p-8'>
            <h2 className='text-3xl font-bold'>Work Experience</h2>
            <div className='mt-6 mb-2 flex justify-between'>
                <p className='font-bold'>Financial Services Representative</p>
                <p className='font-bold'>Feb 2022 - Present</p>
            </div>
            <div>
                <p className='font-bold italic'>CIBC</p>
            </div>
            <div>
                <ul className='mt-2 list-disc'>
                    <li>
                        Worked with clients to develop financial planning 
                        strategies and solutions through evaluation of finances.
                    </li>
                    <li>
                        Built and deepened productive relationships with prospective 
                        and competitive customers to drive sustained growth. 
                    </li>
                </ul>
            </div>
            <div className='mt-6 mb-2 flex justify-between'>
                <p className='font-bold'>Easyline Specialist</p>
                <p className='font-bold'>May 2021 - Feb 2022</p>
            </div>
            <div>
                <p className='font-bold italic'>TD Bank</p>
            </div>
            <div>
                <ul className='mt-2 list-disc'>
                    <li>
                        Quickly learned new skills and applied them to daily tasks, 
                        improving efficiency and productivity.
                    </li>
                    <li>
                        Worked flexible hours; night, weekend, and holiday shifts. 
                    </li>
                </ul>
            </div>
        </div>
        {/* Education */}
        <div className='mt-4 w-[840px] text-left bg-[#262626] rounded-md p-8'>
            <h2 className='text-3xl font-bold'>Education</h2>
            <div className='mt-6 flex justify-between'>
                <p className='font-bold'>Advanced Diploma in Finance</p>
                <p>September 2020 - April 2022</p>
            </div>
            <p>Fanshawe College</p>
            <div className='mt-6 flex justify-between'>
                <p className='font-bold'>Diploma in Business Marketing</p>
                <p>September 2017 - April 2019</p>
            </div>
            <p>Fanshawe College</p>
        </div>
    </div>
);

export default Main;
