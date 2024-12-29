import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import Logo2 from "public/images/Logo2.svg";
import gsap from "gsap";
import chroma from "chroma-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FooterFive = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      // const folksGradient = chroma.scale(["#ff7425", "#ffffff"]);
      const folksGradient = chroma.scale(["#E3FF04", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay,
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7,
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9,
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);

  return (
    <footer className="pb-0 footer-two footer-cmn section">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="logo">
                <Link href="/">
                  <Image src={Logo2} priority alt="Image" />
                </Link>
              </div>
              <div className="paragraph">
                <p>
                  Reap is a strategic growth partner, helping organizations
                  scale and thrive across industries. We provide end-to-end
                  solutions that combine strategy, design, and technology to
                  drive sustainable growth and market leadership.
                </p>
              </div>
              <div className="section__content-cta">
                <h2>
                  <Link
                    href="mailto:info@reap.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    info@reap.com
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3">
            <div className="footer-two__right">
              <div className="social justify-content-start justify-content-lg-start">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                  <span>Facebook</span>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </Link>
                <Link href="https://www.pinterest.com/" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </Link>
              </div>
              <div className="footer__single-meta section__content-cta">
                <Link
                  href="https://www.google.com/maps/d/u/0/edit?mid=1uHmQgMZ7fgEaCSo7DCv3uXmwFhj7Hwg&usp=sharing"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Hyderabad, India
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +91 9390418860
                </Link>
                <Link href="mailto:info@reap.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@reap.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-xl-6">
              <div className="text-center footer__copyright-text text-xl-start">
                <p>
                  Copyright &copy;
                  <span id="copyYear">{currentYear}</span> by{" "}
                  <Link
                    href="https://themeforest.net/user/UltraDevs"
                    target="_blank"
                  >
                    {" "}
                    Reap.
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <ul className="justify-content-center justify-content-xl-end">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about-us">About</Link>
                </li>
                <li>
                  <Link href="our-services">Services</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;
