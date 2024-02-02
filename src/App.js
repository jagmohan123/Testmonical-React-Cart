import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className='text-center text-4xl'>
        <h2 className="font-bold mt-8">Our Testimonials</h2>
        <div className='bg-violet-400 h-[4px] w-2/5 mt-1 mx-auto'></div>
      </div>
      <Testimonial reviews={reviews}></Testimonial>
    </div>
  );
};

export default App;
