import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import Preloader from "@/components/Preloader";
import { usePreloader } from "@/hooks/usePreloader";
import NextPage from "@/components/containers/home/NextPage";
import ContactMain from "@/components/containers/ContactMain";
import ContactForm from "@/components/containers/ContactForm";

const AboutUs = () => {
  const loading = usePreloader();

  if (loading) {
    return <Preloader />;
  }

  return (
    <Layout header={1} footer={5} video={0}>
      {/* <CmnBanner title="About Us" navigation="About Us" /> */}
      <Agency />

      {/* <HomeTwoModal /> */}
      {/* <TeamMembers /> */}
      {/* <HomeTestimonial /> */}
      {/* <AboutSponsor /> */}
      {/* <AboutCta /> */}
      <NextPage href="contact-us" linkText="hehe" title="Let's Talk" />
      <ContactForm />
    </Layout>
  );
};

export default AboutUs;
