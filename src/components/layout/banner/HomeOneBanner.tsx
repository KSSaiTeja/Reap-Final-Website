import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Heroimg from "public/images/banner/heroimg.jpg";
import star from "public/images/star.png";

import letstalkfinal from "public/images/letstalkfinal.svg";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import styles from "@/HomeOneBanner.module.scss";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                {/* Original Default Text */}

                {/* <h1 className="mb-0 text-uppercase text-start fw-9 title-anim">
                  We are
                  <span className="text-stroke"> creative</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1> */}

                {/* Custom Text Style */}

                <h1 className="mb-0 text-uppercase text-start fw-9 title-anim">
                  We are
                  <span
                    className={`${styles.textStroke} ${styles.creative}`}
                    data-text=" creative"
                  >
                    {" "}
                    creative
                  </span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1>

                <div className="banner__content-inner">
                  <p>
                    Reap is a strategic growth partner, helping organizations
                    scale and thrive across industries. We provide end-to-end
                    solutions that combine strategy, design, and technology to
                    drive sustainable growth and market leadership.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">1234</h5>
                      <p className="fw-5">lorem ipsum</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">1235</h5>
                      <p className="fw-5">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          // src={banneronethumb}
          src={Heroimg}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@reap.com">mail : info@reap.com</Link>
          <Link href="tel:99-2158-003-6980">Call : +99 2158 003 6980</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/" target="_blank">
            instagram
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            Linkedin
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            facebook
          </Link>
        </div>

        <Link href="/contact-us">
          <button
            className="video-frame video-btn"
            // onClick={() => setVideoActive(true)}
          >
            <i className="icon-arrow-top-right"></i>
            {/* <Image src={videoframe} alt="Image" priority /> */}
            <Image src={letstalkfinal} alt="Image" priority />
            {/* <i className="fa-sharp fa-solid fa-play"></i> */}
          </button>
        </Link>

        {/* OLD Lines */}
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* New Lines */}
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
