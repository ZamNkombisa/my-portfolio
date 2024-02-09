'use client'
import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <h1>Contact Me</h1>
          
          <div className="image-container">
            <Image src="/images/ZamPicture.jpg" alt="Zamuxolo" width={400} height={280} />
          </div>

          <p>
            If you are interested in my work or have any questions, feel free to get in touch:
          </p>

          <ul>
            <li>
              <i className="fas fa-envelope"></i> Email: <a href="mailto:your.email@example.com">zamuxolo.nkombisa@gmail.com</a>
            </li>

            <li>
              <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/zamuxolo-nkombisa-201b47a6/">Zamuxolo Nkombisa</a>
            </li>
            
            <li>
              <i className="fab fa-github"></i> GitHub: <a href="https://github.com/ZamNkombisa">ZamNkombisa</a>
            </li>
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

          p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          i {
            margin-right: 10px;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </main>
    </div>
  );
};

export default Contact;
