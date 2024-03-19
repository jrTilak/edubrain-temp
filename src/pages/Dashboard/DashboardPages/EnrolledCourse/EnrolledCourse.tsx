//@ts-nocheck
import { useState } from "react";
import CoursePage from "../CoursePage/CoursePage";
import RecomendedCourse from "../RecomendedCourse/RecomendedCourse";
import Workshop from "../Workshop/Workshop";

const EnrolledCourse = () => {
    // Course Details
    const courseDetails = [
        {
          img: "https://i.ibb.co/dcQynTD/ui-ux-design.png",
          courseName: "UI/UX design",
          enrollDate: "Enrolled on 12 may, 2023",
          time: "Last Read: Introduction of UI/UX",
          module: "154",
          completedModule: "12",
        },
    
        {
          img: "https://i.ibb.co/VBJZcwK/data-science.png",
          courseName: "Data Science",
          enrollDate: "Enrolled on 12 may, 2023",
          time: "Last Read: Learn Data Science",
          module: "154",
          completedModule: "1",
        },
    
        {
          img: "https://i.ibb.co/2qYdCVc/Mern-stark.png",
          courseName: "Mern Stack",
          enrollDate: "Enrolled on 23 June, 2023",
          time: "Last Read: Learn Mern Stack",
          module: "154",
          completedModule: "50",
        },
        {
          img: "https://i.ibb.co/dcQynTD/ui-ux-design.png",
          courseName: "UI/UX design",
          enrollDate: "Enrolled on 12 may, 2023",
          time: "Last Read: Introduction of UI/UX",
          module: "154",
          completedModule: "12",
        },
    
        {
          img: "https://i.ibb.co/VBJZcwK/data-science.png",
          courseName: "Data Science",
          enrollDate: "Enrolled on 12 may, 2023",
          time: "Last Read: Learn Data Science",
          module: "154",
          completedModule: "1",
        },
    
        {
          img: "https://i.ibb.co/2qYdCVc/Mern-stark.png",
          courseName: "Mern Stack",
          enrollDate: "Enrolled on 23 June, 2023",
          time: "Last Read: Learn Mern Stack",
          module: "154",
          completedModule: "50",
        },
    
        {
          img: "https://i.ibb.co/2qYdCVc/Mern-stark.png",
          courseName: "Mern Stack",
          enrollDate: "Enrolled on 23 June, 2023",
          time: "Last Read: Learn Mern Stack",
          module: "154",
          completedModule: "50",
        },
      ];
    
      const recomendedCourseDetails = [
        {
          img: "https://i.ibb.co/CsLGHy8/image-38.png",
          courseName: "UI/UX design",
          lecture: "120 Lecture",
          duration: "12hr duration",
        },
    
        {
          img: "https://i.ibb.co/CsLGHy8/image-38.png",
          courseName: "Data Science",
          lecture: "120 Lecture",
          duration: "12hr duration",
        },
    
        {
          img: "https://i.ibb.co/CsLGHy8/image-38.png",
          courseName: "Mern Stack",
          lecture: "120 Lecture",
          duration: "12hr duration",
        },
        {
          img: "https://i.ibb.co/CsLGHy8/image-38.png",
          courseName: "Mern Stack",
          lecture: "120 Lecture",
          duration: "12hr duration",
        },
        {
          img: "https://i.ibb.co/CsLGHy8/image-38.png",
          courseName: "Mern Stack",
          lecture: "120 Lecture",
          duration: "12hr duration",
        }
      ];
    
      const workshopCourseDetails = [
        { 
         "img" : "https://i.ibb.co/sH2NrNp/image-112.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
    
        { 
         "img" : "https://i.ibb.co/S08f1yk/image-113.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
    
        { 
         "img" : "https://i.ibb.co/BGGkVfx/image-114.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
    
        { 
         "img" : "https://i.ibb.co/BGGkVfx/image-114.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
     ]

     
  const [currentSlider, setCurrentSlider] = useState(0);
  const [recomendedSlider, setRecomendedSlider] = useState(0);
  const [workshopSlider, setWorkshopSlider] = useState(0);

  const isSmallScreen = window.innerWidth <= 768;
  const isMediumScreen = window.innerWidth >= 1064;

  const prevSlider = (sliderName) => {
    if (sliderName === "enrolledCourse") {
      setCurrentSlider((currentSlider) =>
        currentSlider === 0 ? 0 : currentSlider - 1
      );
    }else if(sliderName === "recomended"){
        setRecomendedSlider((recomendedSlider) =>
        recomendedSlider === 0 ? 0 : recomendedSlider - 1)
        
    }else if(sliderName === "workshop"){
        setWorkshopSlider((workshopSlider) =>
        workshopSlider === 0 ? 0 : workshopSlider - 1)
    }
  };

//   const nextSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider ===
//       courseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
//         ? 0
//         : currentSlider + 1
//     );

  const nextSlider = (sliderName,) => {
    if (sliderName === "enrolledCourse") {
        setCurrentSlider((currentSlider) =>
      currentSlider ===
      courseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
        ? 0
        : currentSlider + 1
    );
      }else if(sliderName === "recomended"){
        setRecomendedSlider((recomendedSlider) =>
        recomendedSlider ===
        recomendedCourseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
          ? 0
          : recomendedSlider + 1
      );
          
      }else if(sliderName === "workshop"){
        setWorkshopSlider((workshopSlider) =>
        workshopSlider ===
        workshopCourseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
          ? 0
          : workshopSlider + 1
      );
      }
  }



  //  const tabs = ["All", "In progress", "Yet to start", "Completed"];
  const tabs = [
    {
      tabName: "All",
      link: "tab1",
    },
    {
      tabName: "In progress",
      link: "tab2",
    },
    {
      tabName: "Yet to start",
      link: "tab3",
    },
    {
      tabName: "Completed",
      link: "tab4",
    },
  ];

  return (
    <div className="">
      <CoursePage
        currentSlider={currentSlider}
        btnpressprev={prevSlider}
        btnpressnext={nextSlider}
        tabs={tabs}
        courseHeading={"Enrolled Courses"}
        courseDetails={courseDetails}
      ></CoursePage>

      <RecomendedCourse
      recomendedCourseDetails={recomendedCourseDetails}
        currentSlider={recomendedSlider}
        btnpressprev={prevSlider}
        btnpressnext={nextSlider}
      ></RecomendedCourse>

      <Workshop
        currentSlider={workshopSlider}
        btnpressprev={prevSlider}
        btnpressnext={nextSlider}
      ></Workshop>
    </div>
  );
};

export default EnrolledCourse;
