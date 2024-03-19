import Card from "./Card"
import Hero from "./Hero"
import Allsection from "./Allsection"
import Curriculum from "./Curriculum"
import SliderCard from "./Slider"
import Certification from "./Certification"
import Sectionlearn from './Sectionlearn'
import Subscription from './Subscrition'
import Faq from './Faq'

const UI = () => {
  return (
    <div className=" overflow-hidden">
      <Hero
    title="Embark on a Creative Journey"
    subtitle="Master UI/UX Design with Our"
    subtitle1="Dynamic Course "
    
/>
      <Card/>
      <Allsection/>
      <Curriculum/>
      <SliderCard/>
      <Certification/>
      <Sectionlearn/>
      <Subscription/>
      <Faq/>
    </div>
  )
}

export default UI