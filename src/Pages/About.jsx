import React, { useEffect } from "react";
import {
  HeroAbout,
  LinkedinConn,
  MeetCEO,
  OurCommitment,
} from "../componet/About";
import { Footer, Navbar } from "../componet";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="About Us - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="About Us - AC Agarwal"
        />

        <link rel="canonical" href="https://acagarwal.com/about" />
      </Helmet>
      <Navbar navColor={navColor} />
      <HeroAbout />
      <OurCommitment />
      <MeetCEO />
      <LinkedinConn />
      <Footer backColor={backColor} />
    </div>
  );
};

export default About;
