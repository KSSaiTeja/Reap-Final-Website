import React, { useState } from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion">
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 0 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can you help a business with a limited budget achieve
                    results?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We call it the “smart spend matrix.” First, we identify
                      your “minimum viable audience” – the smallest audience
                      segment likely to convert. Then, we double down on
                      strategies like UGC (user-generated content), hyper-local
                      SEO, and remarketing to get maximum impact without
                      overextending your budget.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 1 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What strategies do you use to adapt to sudden algorithm
                    changes on platforms like Google or Instagram?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We treat algorithms like weather—predictable if you watch
                      closely. Our team experiments constantly in
                      micro-campaigns to spot trends before they hit mainstream.
                      This proactive approach lets us tweak strategies before
                      changes impact your results.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 2 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do you ensure content aligns with our brand’s tone and
                    audience expectations?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We develop a “content DNA map” for your brand. This
                      includes your audience’s favorite words, visual
                      preferences, and even emojis. Every piece of content is
                      run through this map to ensure it feels authentically you.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 3 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What’s your approach to reducing ad fatigue in long-running
                    campaigns?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We turn your audience into co-creators. By inviting
                      customers to submit photos, vote on content, or join
                      hashtag challenges, they feel engaged. This UGC
                      (user-generated content) approach keeps ads fresh without
                      constantly reinventing them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
