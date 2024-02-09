'use client'
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="home-button">
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About">
              About
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        nav {
          display: flex;
          justify-content: flex-end;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          color : #fff
        }
        li {
          margin-left: 10px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Header;
