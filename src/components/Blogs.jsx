import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.avif";
import img2 from "../assets/img/blog2.webp";
import img3 from "../assets/img/blog3.webp";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Posts
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Stay informed with our latest articles covering various aspects of
            health and well-being.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Explore All Posts" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            headline="Unraveling the Mysteries of Sleep"
            description="Explore the science behind sleep patterns, the importance of quality sleep, and tips for improving sleep hygiene."
          />
          <BlogCard
            img={img2}
            headline="The Heart-Healthy Diet"
            description="Discover the key components of a heart-healthy diet, including nutrient-rich foods, portion control, and dietary guidelines for maintaining cardiovascular health."
          />
          <BlogCard
            img={img3}
            headline="Understanding Pediatric Vaccinations"
            description="Learn about the importance of pediatric vaccinations, the diseases they protect against, and common misconceptions surrounding childhood immunizations."
          />
          <BlogCard
            img={img4}
            headline="Navigating Mental Health"
            description="Gain insights into managing mental health challenges, finding support resources, and cultivating resilience in the face of adversity."
          />
          <BlogCard
            img={img5}
            headline="The Importance of Regular Exercise"
            description="Explore the numerous physical and mental health benefits of regular exercise, along with practical tips for incorporating physical activity into daily life."
          />
          <BlogCard
            img={img6}
            headline="Skin Health 101"
            description="Learn about skincare basics, including proper cleansing, moisturizing, and sun protection, as well as common skin conditions and treatments for maintaining healthy skin."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
