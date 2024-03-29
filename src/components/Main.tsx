import React from "react";

const Main = () => (
    // Main Container
    <div className='grid gap-8 mt-12 text-center items-center justify-center'>
        {/* Heading Container */}
        <div>
            <h1 className='text-5xl mb-2 font-bold'>Troy Parsons</h1>
            <p>Aurora Ontario Canada</p>
            <p>(519) 520-1171 - <a href="mailto:troyalparsons@gmail.com">troyalparsons@gmail.com</a></p>
        </div>
        {/* Portfolio Section */}
        <div className='flex justify-between w-[840px] bg-[#262626] rounded-md p-4 pt-8 pb-8'>
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
                    <h2 className='text-3xl font-bold'>Languages</h2>
                    <div className='mt-6'>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>C#</li>
                            <li>Rust</li>
                            <li>Java</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>Technologies</h2>
                    <div className='mt-6'>
                        <ul>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>.NET</li>
                            <li>Blazor</li>
                            <li>AWS</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Professional Summary */}
        <div className='w-[840px] text-left bg-[#262626] rounded-md p-8 pt-8 pb-8'>
            <h2 className='text-3xl font-bold'>Professional Summary</h2>
            <p className='mt-2 indent-4'>
                Enthusiastic Web Developer eager to contribute to team
                success through hard work, attention to detail and
                excellent organizational skills. With a clear understanding of
                web development and experience with JavaScript React,
                Java and more. Motivated to learn, grow and excel in
                web development.
            </p>
        </div>
        {/* Work Experience */}
        <div className='w-[840px] text-left bg-[#262626] rounded-md p-8'>
            <h2 className='text-3xl font-bold'>Work Experience</h2>
            <div className='mt-6 mb-2 flex justify-between'>
                <p className='font-bold'>Front-End Developer</p>
                <p className='font-bold'>Dec 2022 - Aug 2023</p>
            </div>
            <div>
                <p className='font-bold italic'>Carpages</p>
            </div>
            <div>
                <ul className='mt-2 list-disc'>
                    <li>
                        Developed and maintained user interfaces for websites and web applications.
                    </li>
                    <li>
                        Wrote clean, efficient, and maintainable HTML, CSS, and JavaScript code.
                    </li>
                    <li>
                        Ensured cross-browser compatibility and responsive design.
                    </li>
                </ul>
            </div>
            <div className='mt-6 mb-2 flex justify-between'>
                <p className='font-bold'>Financial Services Representative</p>
                <p className='font-bold'>Feb 2022 - Dec 2022</p>
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
        <div className='w-[840px] text-left bg-[#262626] rounded-md p-8'>
            <h2 className='text-3xl font-bold'>Education</h2>
            <div className='mt-6 flex justify-between'>
                <p className='font-bold'>Bachelors Degree Software Engineering</p>
                <p>September 2024</p>
            </div>
            <p>Western Governors University</p>
            <div className='mt-6 flex justify-between'>
                <p className='font-bold'>Advanced Diploma in Finance</p>
                <p>April 2022</p>
            </div>
            <p>Fanshawe College</p>
            <div className='mt-6 flex justify-between'>
                <p className='font-bold'>Diploma in Business Marketing</p>
                <p>April 2019</p>
            </div>
            <p>Fanshawe College</p>
        </div>
    </div>
);

export default Main;
