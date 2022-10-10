import React from "react";

const Main = () => (
    // Main Container
    <div>
        {/* Heading Container */}
        <div>
            <h1>Troy Parsons</h1>
            <p>141 Badgerow Way Aurora Ontario, L4G 0Z5</p>
            <p>(519) 520-1171 - troyalparsons@gmail.com</p>
        </div>
        {/* Portfolio Section */}
        <div>
            <h2>Portfolio</h2>
            <ul>
                <li><a href="https://troyparsons.ca">https://troyparsons.ca</a></li>
                <li><a href="https://github.com/parsTroy">https://github.com/parsTroy</a></li>
            </ul>
        </div>
        {/* Professional Summary */}
        <div>
            <h2>Professional Summary</h2>
            <p>
                Enthusiastic Web Developer eager to contribute to team 
                success through hard work, attention to detail and
                excellent organizational skills. Clear understanding of 
                web development and experience with JavaScript React, 
                GitHub and more. Motivated to learn, grow and excel in 
                web development.
            </p>
        </div>
        {/* Work Experience */}
        <div>
            <h2>Work Experience</h2>
            <div>
                <p>Financial Services Representative</p>
                <p>Feb 2022 - Present</p>
            </div>
            <div>
                <p>CIBC</p>
            </div>
            <div>
                <ul>
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

            <div>
                <p>Easyline Specialist</p>
                <p>May 2021 - Feb 2022</p>
            </div>
            <div>
                <p>TD Bank</p>
            </div>
            <div>
                <ul>
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
        <div>
            <h2>Education</h2>
            <div>
                <p>Advanced Diploma in Finance</p>
                <p>Sep-2020 to Apr - 2022</p>
            </div>
            <div>
                <p>Diploma in Business Marketing</p>
                <p>Sep - 2017 to Apr - 2019</p>
            </div>
            <p>Fanshawe College</p>
        </div>
        {/* Skills & Learning */}
        <div>
            <h2>Skills</h2>
            <div>
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
            <h2>Learning</h2>
            <div>
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
);

export default Main;
