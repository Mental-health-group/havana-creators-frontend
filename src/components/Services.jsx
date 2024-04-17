import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = (
    <MdHealthAndSafety size={35} className="text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Discover a range of tailored services designed to support your
            mental well-being journey. From professional counseling sessions to
            community support groups, we offer comprehensive resources to help
            you navigate life's challenges with confidence and resilience.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Individual Counseling Sessions"
          description="One-on-one therapy sessions with licensed mental health professionals to address personal concerns, explore emotions, and develop coping strategies tailored to individual needs."
        />
        <ServicesCard
          icon={icon2}
          title="Group Therapy Sessions"
          description="Supportive group sessions led by trained facilitators, providing opportunities for individuals to connect with others facing similar challenges, share experiences, and learn from one another in a supportive environment."
        />
        <ServicesCard
          icon={icon3}
          title="Online Workshops and Webinars"
          description="Interactive workshops and webinars covering a variety of topics such as stress management, mindfulness practices, relationship skills, and self-care techniques, facilitated by experts in the field of mental health and well-being."
        />
      </div>
    </div>
  );
};

export default Services;
