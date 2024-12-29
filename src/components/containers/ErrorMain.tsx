import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "public/images/error-thumb.png";

const ErrorMain = () => {
  return (
    // OLD CODE

    <section className="section error fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="text-center error__content fade-top">
              <span className="secondary-text">ERROR</span>

              {/* Original Image */}
              <div className="thumb">
                <Image src={thumb} alt="Image" />
              </div>
              <div className="section__content-cta">
                <Link href="/" className="btn btn--secondary">
                  back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // NEW CODE
  );
};

export default ErrorMain;
