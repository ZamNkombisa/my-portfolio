'use client'
import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Image from "next/image";

const Home = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <h1>Full Stack Developer</h1>
          <Image
            src="/images/ZamPicture.jpg"
            alt="Zamuxolo"
            width={400}
            height={400}
          />
          <p>
            I am a motivated and driven full stack developer with a passion for building web applications
            and solving complex problems. I have experience in various programming
            languages and frameworks, including JavaScript, React, and Node.js.
          </p>
          <p>
            On this portfolio, you can find examples of my work, learn more about
            my skills, and get in touch with me.
          </p>
          <button onClick={handleButtonClick}>
            <Link href={"/Contact"} >
              Contact Me
            </Link>
          </button>
          {isButtonClicked && <p>Contact button clicked!</p>}
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
          line-height: 1.5;
          margin-bottom: 10px;
        }

        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Home;
