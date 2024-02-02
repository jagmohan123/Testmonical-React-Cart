import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftSideHandler() {
    if (index - 1 < 0) {
      // array kee length pass kar do so vo phir end se aa jayega
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function RightSideHandler() {
    // index agar  array kee length se bada ho jaye to index ko 0 set kar do so that vo phir se ghumta rhe
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surprizeButtonHandler() {
    // floor use here bcs we always want index int not in float no.
    // Math.random() use here which generate any no b/w 0 to our array length
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[500px] mt-16 p-10 mb-10
    rounded-md bg-white flex flex-col justify-center items-center
    transition-all duration-200 hover:shadow-2xl">
      {/* we pass only hard code 0the index value but we pass index for all the value  */}
      {/*   <Card reviews={reviews[0]}></Card>*/}
      <Card reviews={reviews[index]}></Card>
      <div className=" flex text-2xl gap-2 text-violet-400 mt-4 mx-auto font-bold">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftSideHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={RightSideHandler}
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="mx-auto mt-5">
        <button
          className="bg-violet-400 
        hover:bg-violet-500 transition-all
         duration-200 rounded-md px-6 py-1
          text-center text-lg text-white font-bold
          select-none"
          onClick={surprizeButtonHandler}
        >
          Surprize me
        </button>
      </div>
    </div>
  );
}
export default Testimonial;
