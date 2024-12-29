import React from "react";
import Image from "next/image";
import Link from "next/link";
// import logo from "public/images/logo.png";
import Logo2 from "public/images/Logo2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="pb-0 footer section"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={Logo2} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/u/0/edit?mid=1uHmQgMZ7fgEaCSo7DCv3uXmwFhj7Hwg&usp=sharing"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Hyderabad, India
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  (406) 555-0120
                </Link>
                <Link href="mailto:info@xpovio.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@xpovio.com
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Award Winning</Link>
                  </li>
                  <li>
                    <Link href="blog">News & Blog</Link>
                  </li>
                  <li>
                    <Link href="contact-us">careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="text-center footer__copyright-text text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> Xpovio by{" "}
                      <Link
                        
                        href="https://themeforest.net/user/UltraDevs"
                        target="_blank"
                      >
                        UltraDevs{" "}
                      </Link>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
