'use client'
import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <h1>About Me</h1>
          <div className="image-container">
            <Image src="/images/ZamPicture.jpg" alt="Zamuxolo" width={150} height={150} />
          </div>
          <p>
            Hello name is Zamuxolo Nkombisa, a student full stack developer currently studying at Hyperiondev. I have a passion for building web applications and solving complex problems.
          </p>

          <h2>Education</h2>
          <p>
          I am currently studying at Hyperiondev, where I am studying Full Stack Web Development. I have completed various projects which you can find in my Github profile.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Javascript, HTML and CSS</li>
            <li>Frameworks: React.js, Node.js and Next.js</li>
            <li>Tools: Git, GitHub and VS Code</li>
            <li>Soft skills: Deployment, Problem solving, Communication and Team player.</li>
            <li>Databases: MongoDB</li>
          </ul>
        </div>
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }

          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .image-container {
            padding: 20px;
            border-radius: 50px;
          }

          p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
        `}</style>
      </main>
    </div>
  );
};

export default About;