import React, { useEffect } from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#top" className="scrollup animate-bounce w-6 h-6" aria-label="Scroll to top">
      <HiOutlineArrowSmUp className="scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
