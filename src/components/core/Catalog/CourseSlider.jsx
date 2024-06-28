import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Course_Card from './Course_Card';

const CourseSlider = ({ Courses }) => {

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {Courses?.length ? (
        <Slider {...settings}>
          {Courses.map((course, i) => (
            <div key={i} className=" shadow-lg rounded-lg p-4">
              <Course_Card course={course} Height="h-[250px]" />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-xl text-richblack-5 text-center">No Course Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
