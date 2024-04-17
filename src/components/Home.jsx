import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empower Your Mind: Find Clarity and Strength with Havana..
        </h1>
        <p>
          At Havana, we understand that mental health is essential for overall
          well-being. Our platform connects you with qualified professionals who
          are dedicated to supporting you on your mental health journey.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
