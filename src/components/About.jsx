import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          At Havana, we are passionate about promoting mental well-being and
          providing accessible support to individuals navigating their mental
          health journey. Havana is more than just a platform - it's your
          trusted companion on the path to mental wellness.
        </p>
        <p className="text-justify lg:text-start">
          Our mission at Havana is simple yet profound: to empower individuals
          to prioritize their mental health and lead fulfiling lives. We believe
          everyone deserves access to compassionate and effective mental health
          support and effective mental health support, regardless of their
          background or circumstances.
        </p>
        <p className="text-justify lg:text-start">
          Our network comprises licensed therapists, counselors, and mental
          health professionals who are commited to providing personalized
          guidance and support tailored to your unique needs. Whether you're
          seeking therapy, coaching, or simply someone to talk to, our diverse
          team is here to help you every step of the way.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
