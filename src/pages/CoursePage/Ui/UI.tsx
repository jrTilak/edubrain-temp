import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import SliderCard from "./Slider";
import Certification from "./Certification";
import Sectionlearn from './Sectionlearn';
import Subscription from './Subscrition';
import Faq from './Faq';
import UiHome from "@/assets/data/data/Hero";
import UiCardData from "@/assets/data/data/Card";


interface UiProps {}

const UI: React.FC<UiProps> = () => {
  // Check if UiHome is not empty
  if (UiHome.length === 0) {
    return null; // Return null or handle the empty case
  }

  const firstItem = UiHome[0]; // Accessing the first item in UiHome
  const { title, subtitle, subtitle1, poster } = firstItem.Ui; // Destructure Ui object

  return (
    <div className="overflow-hidden">
      <Hero
        title={title}
        subtitle={subtitle}
        subtitle1={subtitle1}
        videoSrc=""
        poster={poster}
      />
      <Card title1 ="Benefits" subtitle="Why you should become " subtitle1="UI/UX Designer ?" benefits={UiCardData.benefits} />
      <Card title1 ="Introduction" subtitle="What Our UI/UX Design  ?" subtitle1="Courses Encompasses" benefits={UiCardData.benefits} />
      <Curriculum />
      <SliderCard />
      <Certification />
      <Sectionlearn />
      <Subscription />
      <Faq />
    </div>
  );
}

export default UI;
