import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceMain from "@/components/containers/ServiceMain";
import ContactForm from "@/components/containers/ContactForm";
import LetsTalk from "@/components/containers/home/LetsTalk";
import { usePreloader } from "@/hooks/usePreloader";
import Preloader from "@/components/Preloader";

const OurServices = () => {
  const loading = usePreloader();

  if (loading) {
    return <Preloader />;
  }
  return (
    <Layout header={1} footer={5} video={0}>
      {/* <CmnBanner title="Our Services" navigation="Our Services" /> */}
      <ServiceMain />
      <LetsTalk />
      <ContactForm />
      {/* <HomeTwoModal /> */}
      {/* <UxProcessTwo /> */}
      {/* <HomeTestimonialThree /> */}
      {/* <CtaTwo /> */}
    </Layout>
  );
};

export default OurServices;
