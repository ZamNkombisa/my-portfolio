"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <h1>Projects</h1>
          <p>Here are some of my best projects:</p>
          <ul>
            <div>
              <Image
                src="/images/Restaurant.jpeg"
                alt="restaurant"
                width={450}
                height={200}
              />
            </div>
            <li>
              <a
                href="https://github.com/ZamNkombisa/Capstone-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Restaurant Website!
              </a>
              <br />
              <p>This my Capstone built using Javascript, HTML and CSS.</p>
            </li>
            <div>
              <Image
                src="/images/Hangman.jpg"
                alt="Hangman-game"
                width={450}
                height={200}
              />
            </div>
            <li>
              <a
                href="https://github.com/ZamNkombisa/My-Hangman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hangman Game!
              </a>
              <br />
              <p>This is a hangman game that I created using react.</p>
            </li>
          </ul>
        </div>
      </main>
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

        p {
          font-size: 16px;
          margin-bottom: 10px;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }

        a {
          color: #007bff;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Projects;
