import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import Preloader from "@/components/Preloader";
import { usePreloader } from "@/hooks/usePreloader";

import FaqMain from "@/components/containers/FaqMain";

import ContactForm from "@/components/containers/ContactForm";
import LetsTalk from "@/components/containers/home/LetsTalk";

import WorkStepsProject from "@/components/containers/project/WorkStepsProject";

const Home = () => {
  const loading = usePreloader();

  if (loading) {
    return <Preloader />;
  }

  return (
    // <Layout header={1} footer={5} video={false}>
    <Layout header={1} footer={5} video={false}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeOffer />
      {/* <HomeTestimonial /> */}
      {/* <HomeBlog /> */}
      {/* <HomeSponsor /> */}
      {/* <WorkStepsProject /> */}

      <FaqMain />
      <LetsTalk />
      {/* <CtaTwo /> */}
      <ContactForm />
      {/* <NextPage href="contact-us" title="Contact Us" linkText="Book Us" /> */}
    </Layout>
  );
};

export default Home;
