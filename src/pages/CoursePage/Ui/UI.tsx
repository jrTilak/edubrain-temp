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
      <Hero/>
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